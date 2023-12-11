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
import "../interfaces/IOptionToken.sol";

contract Play is Script {

      function getChainId() public view returns (uint256) {
        uint256 chainId;
        assembly {
            chainId := chainid()
        }
        return chainId;
    }

  StabilanCore st = StabilanCore(0xC89d4eaCb839f8C731C84d1f765523D08CD0d02e);

    MockERC20 weth = MockERC20(0x1785fac1a9670b81593d4CF7C5412C5DD0a7E342);
    MockERC20 usdc = MockERC20(0xC3e74826B4eBC21e0327e1D3b32b2851bcc33c76);
    MockChainlinkOracle usdcPriceFeed = MockChainlinkOracle(0x1E889CdC8faB43f4e5352761335B9Bf7a452e1BF);


  function run() public {
    
    console.log(st.currentEpoch());
    console.logAddress(address(st.daoToken()));

     uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
      address deployerAddress = vm.addr(deployerPrivateKey);

    console.log(usdc.allowance(deployerAddress, address(st)));

    vm.startBroadcast(deployerPrivateKey);

    // // weth.mint(deployerAddress, 10000 ether);
    // // usdc.mint(deployerAddress, 10000 ether);
    // // weth.approve(address(st), 10 ether);

    // // (address assetAddress, uint256 amount, uint256 durationEpochs) 
    // // st.backing(address(usdc), 10 ether, 3);

    usdc.approve(address(st), 50 ether);
    st.executeOptions(IOptionToken(0xA2C7e6B5EC2d622846Df0F3733238c8EFb3A7233), 50 ether);

    vm.stopBroadcast();
  }

}

/*

  {
  PriceFeedAggregator: "0xb93A89dD8d21E3483F9a2fEAe34D34B7a19e38Ff",
  StabilanCore: "0x485a26228a162054a35c6418A32Ec4364Ce20Bdd",
  DataProvider: "0xa21d182889e0BdF0357A5956FEfD9B8F537b6dF5",
  USDC: "0xC3e74826B4eBC21e0327e1D3b32b2851bcc33c76",
  USDCPriceFeed: "0x1E889CdC8faB43f4e5352761335B9Bf7a452e1BF",
  WETH: "0x1785fac1a9670b81593d4CF7C5412C5DD0a7E342",
  WETHPriceFeed: "0xAa07cA2107c34CAB45d1115b147810b10Dd143A9",
  TestpageHelper: "0x58961cADDAc6c775916A5B6B54b51b4cDA2824e5",
  }
*/