// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/interfaces/IERC20.sol";

interface IDAOToken is IERC20 {
    error NotCore();

    function mint(address account, uint256 amount) external;

    function burn(address account, uint256 amount) external;
}