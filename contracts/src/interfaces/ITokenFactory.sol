// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import {IOptionToken} from "./IOptionToken.sol";
import {IBackingToken} from "./IBackingToken.sol";

interface ITokenFactory {
    function deployOptionToken(string memory name, string memory symbol, address underyling, uint256 expireTimestamp)
        external
        returns (IOptionToken);

    function deployBackingToken(string memory name, string memory symbol, address underyling, uint256 expireTimestamp)
        external
        returns (IBackingToken);
}
