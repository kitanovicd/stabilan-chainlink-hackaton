// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "forge-std/script.sol";
import "../PriceFeedAggregator.sol";
import "../tokens/TokenFactory.sol";
import "../StabilanCore.sol";
import "../libraries/Constants.sol";
import "../mock/MockERC20.sol";
import "../mock/MockChainlinkOracle.sol";
import "../DataProvider.sol";

contract Deploy is Script {
    function getChainId() public view returns (uint256) {
        uint256 chainId;
        assembly {
            chainId := chainid()
        }
        return chainId;
    }

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address deployerAddress = vm.addr(deployerPrivateKey);

        bool minDeploy = true;

        console.log("Deployer address: ", deployerAddress);
        console.log("Deployer balance: ", deployerAddress.balance);
        console.log("BlockNumber: ", block.number);
        console.log("ChainId: ", getChainId());

        console.log("Deploying... (%s)", minDeploy ? "minimal deploy" : "full deploy");

        vm.startBroadcast(deployerPrivateKey);

        TokenFactory tokenFactory = new TokenFactory();
        console.log("TokenFactory address: ", address(tokenFactory));

        PriceFeedAggregator priceFeedAggregator = new PriceFeedAggregator(
            deployerAddress
        );
        console.log("PriceFeedAggregator address: ", address(priceFeedAggregator));

        StabilanCore stabilanCore = new StabilanCore(
            tokenFactory,
            priceFeedAggregator,
            deployerAddress
        );
        console.log("StabilanCore address: ", address(stabilanCore));

        DataProvider dataProvider = new DataProvider();
        console.log("DataProvider address: ", address(dataProvider));

        MockERC20 usdc = new MockERC20("USDC", "USDC");
        usdc.mint(deployerAddress, 100000 ether);
        console.log("USDC address: ", address(usdc));

        MockChainlinkOracle usdcPriceFeed = new MockChainlinkOracle();
        usdcPriceFeed.setPrice(1 ether);
        console.log("USDC price feed address: ", address(usdcPriceFeed));

        MockERC20 usdt;
        MockChainlinkOracle usdtPriceFeed;
        if (!minDeploy) {
            usdt = new MockERC20("USDT", "USDT");
            usdt.mint(deployerAddress, 100000 ether);
            console.log("USDT address: ", address(usdt));

            usdtPriceFeed = new MockChainlinkOracle();
            usdtPriceFeed.setPrice(1 ether);
            console.log("USDT price feed address: ", address(usdtPriceFeed));
        }

        MockERC20 weth = new MockERC20("WETH", "WETH");
        weth.mint(deployerAddress, 100000 ether);
        console.log("WETH address: ", address(weth));

        MockChainlinkOracle wethPriceFeed = new MockChainlinkOracle();
        wethPriceFeed.setPrice(2000 ether);
        console.log("WETH price feed address: ", address(wethPriceFeed));

        MockERC20 wbtc;
        MockChainlinkOracle wbtcPriceFeed;
        if (!minDeploy) {
            wbtc = new MockERC20("Wrapped Bitcoin", "wBTC");
            console.log("WBTC address: ", address(wbtc));

            wbtcPriceFeed = new MockChainlinkOracle();
            wbtcPriceFeed.setPrice(50000 ether);
            console.log("WBTC price feed address: ", address(wbtcPriceFeed));
        }

        priceFeedAggregator.setPriceFeed(address(usdc), address(usdcPriceFeed));
        priceFeedAggregator.setPriceFeed(address(weth), address(wethPriceFeed));

        if (!minDeploy) {
            priceFeedAggregator.setPriceFeed(address(usdt), address(usdtPriceFeed));
            priceFeedAggregator.setPriceFeed(address(wbtc), address(wbtcPriceFeed));
        }
        console.log("Price feeds setted");

        stabilanCore.setupAsset(address(usdc), 0.8 ether, 0.97 ether, 0.1144 ether, address(weth));

        if (!minDeploy) {
            stabilanCore.setupAsset(address(usdt), 0.8 ether, 0.97 ether, 0.1031 ether, address(weth));
            stabilanCore.setupAsset(address(wbtc), 0.8 ether, 0.55 ether, 0.2471 ether, address(weth));
        }

        console.log("Assets setuped");

        vm.stopBroadcast();

        console.log("{");
          _log("PriceFeedAggregator", address(priceFeedAggregator));
          _log("StabilanCore", address(stabilanCore));
          _log("DataProvider", address(dataProvider));
          _log("USDC", address(usdc));
          _log("USDCPriceFeed", address(usdcPriceFeed));
          _log("WETH", address(weth));
          _log("WETHPriceFeed", address(wethPriceFeed));
          // TOOD: add ustd/wbtc
        console.log("}");
    }

    function _log(string memory _name, address _address) internal {
        console.log('%s: "%s",', _name, _address);
    }
}
