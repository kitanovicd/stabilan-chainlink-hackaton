// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "./mock/MockERC20.sol";
import "./mock/MockChainlinkOracle.sol";

contract TestpageHelper {
  function mintTokens(MockERC20[] memory tokens, uint256[] memory amounts, address account) external {
    for(uint256 i=0; i<tokens.length; i++) {
      tokens[i].mint(account, amounts[i]);
    }
  } 

  function burnTokens(MockERC20[] memory tokens, uint256[] memory amounts, address account) external {
    for(uint256 i=0; i<tokens.length; i++) {
      tokens[i].burn(account, amounts[i]);
    }
  } 

  function changeAssetPrices(MockChainlinkOracle[] memory oracles, uint256[] memory prices) external {
    for(uint256 i=0; i<oracles.length; i++) {
      oracles[i].setPrice(prices[i]);
    }
  }
}