// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import {IOptionToken} from "./IOptionToken.sol";
import {IBackingToken} from "./IBackingToken.sol";
import {IDAOToken} from "./IDAOToken.sol";

interface ITokenFactory {
    function deployOptionToken(
        string memory name,
        string memory symbol,
        address underyling,
        uint256 expireTimestamp,
        address coreContract
    ) external returns (IOptionToken);

    function deployBackingToken(
        string memory name,
        string memory symbol,
        address underyling,
        uint256 expireTimestamp,
        address coreContract,
        address backedAsset
    ) external returns (IBackingToken);

    function deployDAOToken(
        string memory name,
        string memory symbol,
        address coreContract
    ) external returns (IDAOToken);
}
