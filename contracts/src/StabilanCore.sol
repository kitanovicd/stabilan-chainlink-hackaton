// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "./interfaces/IPriceFeedAggregator.sol";
import "./interfaces/IBackingToken.sol";
import "./interfaces/IOptionToken.sol";
import "./interfaces/IStabilanCore.sol";
import "./interfaces/ITokenFactory.sol";

contract StabilanCore is IStabilanCore, Ownable {
    uint256 public constant MAX_EPOCH_DURATION = 6; // in months

    uint256 public currentEpoch;
    ITokenFactory public tokenFactory;
    IPriceFeedAggregator public priceFeedAggregator;

    mapping(address => mapping(uint256 => AssetEpochData)) assetsData;
    mapping(address => AssetConfig) public assetsConfig;

    address[] public supportedAssets;

    constructor(ITokenFactory _tokenFactory, address _owner) Ownable(_owner) {
        tokenFactory = _tokenFactory;
        currentEpoch = 1;
    }

    function setupAsset(address assetAddress, uint256 expectedApy) external onlyOwner {}

    function updateEpoch() external {
        currentEpoch++;

        for (uint256 i = 0; i < supportedAssets.length; i++) {
            address assetAddress = supportedAssets[i];

            AssetConfig storage assetConfig = assetsConfig[assetAddress];
            AssetEpochData storage assetData = assetsData[assetAddress][currentEpoch + MAX_EPOCH_DURATION];

            assetData.optionToken =
                tokenFactory.deployOptionToken("Option", "OPT", assetAddress, currentEpoch + MAX_EPOCH_DURATION);
            assetData.backingToken =
                tokenFactory.deployBackingToken("Backing", "BCK", assetAddress, currentEpoch + MAX_EPOCH_DURATION);

            uint256 currAssetPrice = priceFeedAggregator.getLatestPrice(assetAddress);
            assetsData[assetAddress][currentEpoch].strikePrice =
                Math.mulDiv(currAssetPrice, assetConfig.strikePricePercent, 1e18);
        }
    }

    function buyOptions(address assetAddress, uint256 amount, uint256 durationEpochs) external payable {
        AssetEpochData storage assetData = assetsData[assetAddress][currentEpoch + durationEpochs - 1];
        AssetConfig storage assetConfig = assetsConfig[assetAddress];

        uint256 collateralAssetPrice = priceFeedAggregator.getLatestPrice(address(assetData.backingToken.underlying()));
        uint256 totalAvailableCollateral = Math.mulDiv(assetData.collateralAmount, assetConfig.collateralRatio, 1e18);
        uint256 totalAvailableCollateralValue = Math.mulDiv(totalAvailableCollateral, collateralAssetPrice, 1e18);
        uint256 currStrikePrice = assetsData[assetAddress][currentEpoch].strikePrice;
        uint256 insuringAssetValue = Math.mulDiv(amount, currStrikePrice, 1e18);

        if (insuringAssetValue > totalAvailableCollateralValue) {
            revert NotEnoughBacking();
        }

        for (uint256 i = 0; i < durationEpochs; i++) {
            assetsData[assetAddress][currentEpoch + i].reservedAmount += amount;
        }

        assetData.optionToken.mint(msg.sender, amount);
    }

    function executeOptions(IOptionToken option, uint256 amount) external {
        address underlyingAsset = address(option.underlying());
        uint256 underlyingAssetPrice = priceFeedAggregator.getLatestPrice(underlyingAsset);

        AssetEpochData storage assetData = assetsData[underlyingAsset][currentEpoch];

        if (assetData.strikePrice > underlyingAssetPrice) {
            revert CannotExecute();
        }

        address collateralAsset = address(assetData.backingToken.underlying());
        uint256 collateralAssetPrice = priceFeedAggregator.getLatestPrice(collateralAsset);
        uint256 collateralAmount = Math.mulDiv(amount, assetData.strikePrice, collateralAssetPrice);

        for (uint256 i = currentEpoch; i < option.endEpoch(); i++) {
            assetsData[underlyingAsset][i].reservedAmount -= amount;
            assetsData[underlyingAsset][i].collateralAmount -= collateralAmount;
        }

        //TODO: implement burn from because burnFrom will require allowance
        //TODO: add safe ERC20 library
        option.burn(msg.sender, amount);
        IERC20(collateralAsset).transfer(msg.sender, collateralAmount);
    }

    function backing(address assetAddress, uint256 amount, uint256 durationEpochs) external payable {}

    function claimBackingRewards(address backingToken) external {}
}
