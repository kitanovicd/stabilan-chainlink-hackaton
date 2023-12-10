// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "@openzeppelin/contracts/interfaces/IERC20Metadata.sol";
import "./interfaces/IPriceFeedAggregator.sol";
import "./interfaces/IBackingToken.sol";
import "./interfaces/IOptionToken.sol";
import "./interfaces/IStabilanCore.sol";
import "./interfaces/ITokenFactory.sol";
import "./libraries/WadRayMath.sol";
import "./libraries/StringLib.sol";

contract StabilanCore is IStabilanCore, Ownable {
    using WadRayMath for uint256;

    uint256 public constant MAX_EPOCH_DURATION = 6; // in months

    uint256 public currentEpoch;
    ITokenFactory public tokenFactory;
    IPriceFeedAggregator public priceFeedAggregator;

    mapping(address => mapping(uint256 => AssetEpochData)) public assetsData;
    mapping(address => AssetConfig) public assetsConfig;

    address[] public supportedAssets;

    IOptionToken[] public allOptionTokens;
    IBackingToken[] public allBackingTokens;

    constructor(ITokenFactory _tokenFactory, IPriceFeedAggregator _priceFeedAggregator, address _owner)
        Ownable(_owner)
    {
        tokenFactory = _tokenFactory;
        priceFeedAggregator = _priceFeedAggregator;
        currentEpoch = 1;
    }

    function setupAsset(
        address assetAddress,
        uint256 collateralRatio,
        uint256 strikePricePercent,
        uint256 expectedApy,
        address collateralAddress
    ) external onlyOwner {
        AssetConfig storage assetConfig = assetsConfig[assetAddress];
        assetConfig.collateralRatio = collateralRatio;
        assetConfig.strikePricePercent = strikePricePercent;
        assetConfig.expectedApy = expectedApy;
        assetConfig.collateralAsset = collateralAddress;

        supportedAssets.push(assetAddress);

        AssetEpochData storage assetData = assetsData[assetAddress][currentEpoch];

        uint256 assetPrice = priceFeedAggregator.getLatestPrice(assetAddress);
        assetData.strikePrice = assetPrice.wadMul(strikePricePercent);

        for (uint256 i = 0; i < MAX_EPOCH_DURATION; i++) {
            (IOptionToken optionToken, IBackingToken backingToken) =
                _deployOptionBackingTokenPair(assetAddress, collateralAddress, currentEpoch + i);
        }
    }

    function updateAssetConfig(
        address assetAddress,
        uint256 collateralRatio,
        uint256 strikePricePercent,
        uint256 expectedApy
    ) external onlyOwner {
        AssetConfig storage assetConfig = assetsConfig[assetAddress];
        assetConfig.collateralRatio = collateralRatio;
        assetConfig.strikePricePercent = strikePricePercent;
        assetConfig.expectedApy = expectedApy;
    }

    function updateEpoch() external {
        currentEpoch++;

        for (uint256 i = 0; i < supportedAssets.length; i++) {
            address assetAddress = supportedAssets[i];

            AssetConfig storage assetConfig = assetsConfig[assetAddress];

            (IOptionToken optionToken, IBackingToken backingToken) = _deployOptionBackingTokenPair(
                assetAddress, assetConfig.collateralAsset, currentEpoch + MAX_EPOCH_DURATION - 1
            );

            uint256 currAssetPrice = priceFeedAggregator.getLatestPrice(assetAddress);
            assetsData[assetAddress][currentEpoch].strikePrice = currAssetPrice.wadMul(assetConfig.strikePricePercent);
        }
    }

    function buyOptions(address assetAddress, uint256 amount, uint256 durationEpochs) external {
        AssetEpochData storage assetData = assetsData[assetAddress][currentEpoch + durationEpochs - 1];
        AssetConfig storage assetConfig = assetsConfig[assetAddress];

        (uint256 optionsPrice, uint256 totalEpochsBacking) =
            getOptionsPrice(assetAddress, amount, durationEpochs, address(assetData.backingToken.underlying()));

        IERC20(assetConfig.collateralAsset).transferFrom(msg.sender, address(this), optionsPrice);

        uint256 collateralAssetPrice = priceFeedAggregator.getLatestPrice(address(assetData.backingToken.underlying()));
        uint256 currStrikePrice = assetsData[assetAddress][currentEpoch].strikePrice;
        uint256 insuringAssetValue = amount.wadMul(currStrikePrice);

        for (uint256 i = 0; i < durationEpochs; i++) {
            AssetEpochData storage epochData = assetsData[assetAddress][currentEpoch + i];

            uint256 totalAvailableCollateral = epochData.collateralAmount.wadDiv(assetConfig.collateralRatio);
            uint256 totalAvailableCollateralUSD = totalAvailableCollateral.wadMul(collateralAssetPrice);

            if (insuringAssetValue > totalAvailableCollateralUSD) {
                revert NotEnoughBacking(currentEpoch + i, insuringAssetValue, totalAvailableCollateralUSD);
            }

            epochData.reservedAmount += amount;

            // epochData.totalPremium += optionsEpochPrice[i];
            // epochData.collateralAmount += optionsEpochPrice[i];
            
            // // TODO: za svih 6 ?!
            // uint256 totalRewards = rewardsToNext + optionsEpochPrice[i];
            // uint256 backingTotalSupply = assetData.backingToken.totalSupply();
            // uint256 rewardsToThisEpoch = (backingTotalSupply / epochData.collateralAmount) * totalRewards;

            // backingTokenTotalSupply() += rewardsToThisEpoch;
            // rewardsToNext = totalRewards - rewardsToThisEpoch; 
        }

        for(uint256 i = 0; i < MAX_EPOCH_DURATION - durationEpochs + 1; i++) {
            uint256 epochPremium = (assetsData[assetAddress][currentEpoch + durationEpochs - 1 + i].backingToken.totalSupply() * optionsPrice) / totalEpochsBacking;
            assetsData[assetAddress][currentEpoch + durationEpochs - 1 + i].backingToken.addPremiums(epochPremium);
        }

        assetData.optionToken.mint(msg.sender, amount);
    }

    function getOptionsPrice(address assetAddress, uint256 amount, uint256 durationEpochs, address payingToken)
        public
        view
        returns (uint256 totalCost, uint256 totalEpochsBacking)
    {
        AssetConfig storage assetConfig = assetsConfig[assetAddress];
        AssetEpochData storage currEpochData = assetsData[assetAddress][currentEpoch];

        uint256 collateralPrice = priceFeedAggregator.getLatestPrice(address(currEpochData.backingToken.underlying()));
        uint256 assetPrice = priceFeedAggregator.getLatestPrice(assetAddress);

        // epochCosts = new uint256[](durationEpochs);

        for (uint256 i = 0; i < durationEpochs; i++) {
            uint256 _amount = amount;
            AssetEpochData storage assetData = assetsData[assetAddress][currentEpoch + i];

            uint256 reservedUSD = (assetData.reservedAmount + _amount / 2).wadMul(currEpochData.strikePrice);
            uint256 collateralUSD = assetData.collateralAmount.wadMul(collateralPrice);
            uint256 util = reservedUSD.wadDiv(collateralUSD).wadDiv(assetConfig.collateralRatio);
            uint256 assetAmountCost = (2 * util).wadMul(assetConfig.expectedApy).wadMul(_amount) / 12;

            // epochCosts[i] = assetAmountCost.wadMul(assetPrice).wadDiv(collateralPrice);
            totalCost += assetAmountCost.wadMul(assetPrice).wadDiv(collateralPrice);
        }
        
        totalEpochsBacking = 0;

        for(uint256 i = 0; i < MAX_EPOCH_DURATION - durationEpochs + 1; i++) {
            totalEpochsBacking += assetsData[assetAddress][currentEpoch + durationEpochs - 1 + i].backingToken.totalSupply();
        }
        // epochPremiums = new uint256[](MAX_EPOCH_DURATION - durationEpochs + 1);
        // for(uint256 i = 0; i < MAX_EPOCH_DURATION - durationEpochs + 1; i++) {
        //     epochPremiums[i] = (assetsData[assetAddress][currentEpoch + durationEpochs - 1 + i].backingToken.totalSupply() * totalCost) / totalEpochsBacking;
        // }

        return (totalCost, totalEpochsBacking);
    }

    function getMaxOptionAmount(address assetAddress, uint256 durationEpochs) external view returns (uint256) {
        AssetConfig storage assetConfig = assetsConfig[assetAddress];
        AssetEpochData storage currEpochData = assetsData[assetAddress][currentEpoch];

        uint256 collateralPrice = priceFeedAggregator.getLatestPrice(address(currEpochData.backingToken.underlying()));
        // uint256 assetPrice = priceFeedAggregator.getLatestPrice(assetAddress);

        uint256 minAvailable = type(uint256).max;
        for (uint256 i = 0; i < durationEpochs; i++) {
            AssetEpochData storage assetData = assetsData[assetAddress][currentEpoch + i];

            uint256 reservedUSD = (assetData.reservedAmount).wadMul(currEpochData.strikePrice);
            uint256 collateralUSD = assetData.collateralAmount.wadMul(collateralPrice);
            uint256 availableCollateralUSD = collateralUSD.wadMul(assetConfig.collateralRatio) - reservedUSD;
            uint256 availableCollateralInAssets = availableCollateralUSD.wadDiv(currEpochData.strikePrice);
            if (availableCollateralInAssets < minAvailable) {
                minAvailable = availableCollateralInAssets;
            }
        }

        return minAvailable;
    }

    function getAssetAPY(address assetAddress) public view returns (uint256) {
        return assetsConfig[assetAddress].expectedApy;
    }

    function executeOptions(IOptionToken option, uint256 amount) external {
        address underlyingAsset = address(option.underlying());
        

        AssetEpochData storage assetData = assetsData[underlyingAsset][currentEpoch];

        // uint256 underlyingAssetPrice = priceFeedAggregator.getLatestPrice(underlyingAsset);
        // if (assetData.strikePrice > underlyingAssetPrice) {
        //     revert CannotExecute();
        // }

        option.underlying().transferFrom(msg.sender, address(this), amount);

        address collateralAsset = address(assetData.backingToken.underlying());
        uint256 collateralAssetPrice = priceFeedAggregator.getLatestPrice(collateralAsset);
        uint256 collateralAmount = Math.mulDiv(amount, assetData.strikePrice, collateralAssetPrice);

        for (uint256 i = currentEpoch; i <= option.endEpoch(); i++) {
            assetsData[underlyingAsset][i].reservedAmount -= amount;
            assetsData[underlyingAsset][i].collateralAmount -= collateralAmount;
        }

        option.burn(msg.sender, amount);
        IERC20(collateralAsset).transfer(msg.sender, collateralAmount);

        uint256 totalBacking = 0;
        for(uint256 i = option.endEpoch(); i < currentEpoch + MAX_EPOCH_DURATION; i++) {
            totalBacking = assetsData[underlyingAsset][currentEpoch + i].backingToken.totalSupply();
        }
        for(uint256 i = option.endEpoch(); i < currentEpoch + MAX_EPOCH_DURATION; i++) {
            uint256 executedOptions = (assetsData[underlyingAsset][currentEpoch + i].backingToken.totalSupply() * amount) / totalBacking;
            assetsData[underlyingAsset][currentEpoch + i].backingToken.addExecutedOptions(executedOptions);
        }
    }

    function backing(address assetAddress, uint256 amount, uint256 durationEpochs) external {
        AssetConfig storage assetConfig = assetsConfig[assetAddress];
        IERC20(assetConfig.collateralAsset).transferFrom(msg.sender, address(this), amount);

        for (uint256 i = 0; i < durationEpochs; i++) {
            AssetEpochData storage assetData = assetsData[assetAddress][currentEpoch + i];

            assetData.collateralAmount += amount;
        }

        IBackingToken backingToken = assetsData[assetAddress][currentEpoch + durationEpochs - 1].backingToken;
        backingToken.mint(msg.sender, amount);
    }

    function claimBackingRewards(IBackingToken backingToken) external {
        if (currentEpoch <= backingToken.endEpoch()) {
            revert BackingIsntOver();
        }

        uint256 rewards = backingToken.getClaimingRewardsAndUpdate(msg.sender);
        backingToken.underlying().transfer(msg.sender, backingToken.balanceOf(msg.sender) + rewards);
    }

    function claimExectuedOptions(IBackingToken backingToken) external {
        uint256 executedOptionsAmount = backingToken.getClaimingExecutedOptionsAndUpdate(msg.sender);
        IERC20(backingToken.backedAsset()).transfer(msg.sender, executedOptionsAmount);
    }

    function allStabilanTokens() external view returns (IOptionToken[] memory, IBackingToken[] memory) {
        return (allOptionTokens, allBackingTokens);
    }

    function _deployOptionBackingTokenPair(address assetAddress, address collateralAddress, uint256 endingEpoch)
        private
        returns (IOptionToken, IBackingToken)
    {
        string memory tokenSuffix = string.concat(
            " ",
            StringLib.getMonthSymbol((10 + endingEpoch) % 12),
            " ",
            StringLib.getYearSymbol((10 + endingEpoch) / 12)
        );

        IOptionToken optionToken = tokenFactory.deployOptionToken(
            string.concat("Option ", IERC20Metadata(assetAddress).name(), tokenSuffix),
            string.concat("OPT ", IERC20Metadata(assetAddress).symbol(), tokenSuffix),
            assetAddress,
            endingEpoch,
            address(this)
        );

        IBackingToken backingToken = tokenFactory.deployBackingToken(
            string.concat(
                "Backing ",
                IERC20Metadata(assetAddress).name(),
                "-",
                IERC20Metadata(collateralAddress).name(),
                tokenSuffix
            ),
            string.concat(
                "BCK ",
                IERC20Metadata(assetAddress).symbol(),
                "-",
                IERC20Metadata(collateralAddress).symbol(),
                tokenSuffix
            ),
            collateralAddress,
            endingEpoch,
            address(this),
            assetAddress
        );

        AssetEpochData storage assetData = assetsData[assetAddress][endingEpoch];

        assetData.optionToken = optionToken;
        assetData.backingToken = backingToken;

        allOptionTokens.push(assetData.optionToken);
        allBackingTokens.push(assetData.backingToken);

        return (optionToken, backingToken);
    }
}
