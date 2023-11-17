// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/interfaces/IERC20.sol";

interface IOptionToken is IERC20 {
    function mint(address account, uint256 amount) external;
}
