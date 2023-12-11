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
import "../TestpageHelper.sol";

contract Deploy is Script {
    function getChainId() public view returns (uint256) {
        uint256 chainId;
        assembly {
            chainId := chainid()
        }
        return chainId;
    }


// Deploying... (minimal deploy)
//   TokenFactory address:  0xB622C438d523657670ADF27ed510CfCA5DDe8F04
//   StabilanCore address:  0xF3bB2741249Dd0FC6Fc1945471da5Df56ad69d81
//   USDC address:  0xF0d710f11DD9cfc87e2D2d61697921C1D17EFF22
//   USDC price feed address:  0xfE9D930f1d5b187Ed8175D48B38FCE705683b2De
//   WETH address:  0x8d8F095FAdA7Fe60c4397124a6DEDAEfE8586121
//   WETH price feed address:  0x045B0FF4F0E47288cc98D23301554793E273cCc8
//   Price feeds setted
//   Assets setuped
//   {
//   PriceFeedAggregator: "0xb93A89dD8d21E3483F9a2fEAe34D34B7a19e38Ff",
//   StabilanCore: "0xF3bB2741249Dd0FC6Fc1945471da5Df56ad69d81",
//   DataProvider: "0xa21d182889e0BdF0357A5956FEfD9B8F537b6dF5",
//   USDC: "0xF0d710f11DD9cfc87e2D2d61697921C1D17EFF22",
//   USDCPriceFeed: "0xfE9D930f1d5b187Ed8175D48B38FCE705683b2De",
//   WETH: "0x8d8F095FAdA7Fe60c4397124a6DEDAEfE8586121",
//   WETHPriceFeed: "0x045B0FF4F0E47288cc98D23301554793E273cCc8",
//   TestpageHelper: "0x58961cADDAc6c775916A5B6B54b51b4cDA2824e5",
//   }

    PriceFeedAggregator priceFeedAggregator = PriceFeedAggregator(0xb93A89dD8d21E3483F9a2fEAe34D34B7a19e38Ff);
    DataProvider dataProvider = DataProvider(0xa21d182889e0BdF0357A5956FEfD9B8F537b6dF5);
    MockERC20 usdc = MockERC20(0xF0d710f11DD9cfc87e2D2d61697921C1D17EFF22);
    MockChainlinkOracle usdcPriceFeed = MockChainlinkOracle(0xfE9D930f1d5b187Ed8175D48B38FCE705683b2De);
    MockERC20 weth = MockERC20(0x8d8F095FAdA7Fe60c4397124a6DEDAEfE8586121);
    MockChainlinkOracle wethPriceFeed = MockChainlinkOracle(0x045B0FF4F0E47288cc98D23301554793E273cCc8);
    TestpageHelper testpageHelper = TestpageHelper(0x58961cADDAc6c775916A5B6B54b51b4cDA2824e5);
    TokenFactory tokenFactory = TokenFactory(0xB622C438d523657670ADF27ed510CfCA5DDe8F04);

    StabilanCore stabilanCore = StabilanCore(address(0));

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

        if (address(tokenFactory) == address(0)) {
            TokenFactory tokenFactory = new TokenFactory();
            console.log("TokenFactory address: ", address(tokenFactory));
        }

        if (address(priceFeedAggregator) == address(0)) {
            priceFeedAggregator = new PriceFeedAggregator(
                deployerAddress
            );
            console.log("PriceFeedAggregator address: ", address(priceFeedAggregator));
        }
        
        if (address(stabilanCore) == address(0)) {
            stabilanCore = new StabilanCore(
                tokenFactory,
                priceFeedAggregator,
                deployerAddress
            );
            console.log("StabilanCore address: ", address(stabilanCore));
        }


        if (address(dataProvider) == address(0)) {
            dataProvider = new DataProvider();
            console.log("DataProvider address: ", address(dataProvider));
        }

        if (address(usdc) == address(0)) {
            usdc = new MockERC20("USDC", "USDC");
            usdc.mint(deployerAddress, 100000 ether);
            console.log("USDC address: ", address(usdc));
        }


        if (address(usdcPriceFeed) == address(0)) {
            usdcPriceFeed = new MockChainlinkOracle();
            usdcPriceFeed.setPrice(1e8);
            console.log("USDC price feed address: ", address(usdcPriceFeed));

            priceFeedAggregator.setPriceFeed(address(usdc), address(usdcPriceFeed));
        }

        MockERC20 usdt;
        MockChainlinkOracle usdtPriceFeed;
        if (!minDeploy) {
            usdt = new MockERC20("USDT", "USDT");
            usdt.mint(deployerAddress, 100000 ether);
            console.log("USDT address: ", address(usdt));

            usdtPriceFeed = new MockChainlinkOracle();
            usdtPriceFeed.setPrice(1e8);
            console.log("USDT price feed address: ", address(usdtPriceFeed));

            priceFeedAggregator.setPriceFeed(address(usdt), address(usdtPriceFeed));
        }

        if (address(weth) == address(0)) {
            weth = new MockERC20("WETH", "WETH");
            weth.mint(deployerAddress, 100000 ether);
            console.log("WETH address: ", address(weth));
        }

        if (address(wethPriceFeed) == address(0)) {
            wethPriceFeed = new MockChainlinkOracle();
            wethPriceFeed.setPrice(2000 * 1e8);
            console.log("WETH price feed address: ", address(wethPriceFeed));

            priceFeedAggregator.setPriceFeed(address(weth), address(wethPriceFeed));
        }

        MockERC20 wbtc;
        MockChainlinkOracle wbtcPriceFeed;
        if (!minDeploy) {
            wbtc = new MockERC20("Wrapped Bitcoin", "wBTC");
            console.log("WBTC address: ", address(wbtc));

            wbtcPriceFeed = new MockChainlinkOracle();
            wbtcPriceFeed.setPrice(50000 * 1e8);
            console.log("WBTC price feed address: ", address(wbtcPriceFeed));

            priceFeedAggregator.setPriceFeed(address(wbtc), address(wbtcPriceFeed));
        }

        console.log("Price feeds setted");

        stabilanCore.setupAsset(address(usdc), 0.8 ether, 0.97 ether, 0.1144 ether, address(weth));

        if (!minDeploy) {
            stabilanCore.setupAsset(address(usdt), 0.8 ether, 0.97 ether, 0.1031 ether, address(weth));
            stabilanCore.setupAsset(address(wbtc), 0.8 ether, 0.55 ether, 0.2471 ether, address(weth));
        }

        console.log("Assets setuped");

        if (address(testpageHelper) == address(0)) {
            testpageHelper = new TestpageHelper();
            console.log("TestpageHelper address: ", address(testpageHelper));
        }

        vm.stopBroadcast();

        console.log("{");
          _log("PriceFeedAggregator", address(priceFeedAggregator));
          _log("StabilanCore", address(stabilanCore));
          _log("DataProvider", address(dataProvider));
          _log("USDC", address(usdc));
          _log("USDCPriceFeed", address(usdcPriceFeed));
          _log("WETH", address(weth));
          _log("WETHPriceFeed", address(wethPriceFeed));
          _log("TestpageHelper", address(testpageHelper));
          // TOOD: add ustd/wbtc
        console.log("}");
    }

    function _log(string memory _name, address _address) internal {
        console.log('%s: "%s",', _name, _address);
    }
}
