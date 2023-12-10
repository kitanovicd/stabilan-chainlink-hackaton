// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "../interfaces/IBackingToken.sol";
import "../interfaces/IOptionToken.sol";
import "../interfaces/IDAOToken.sol";
import "./OptionToken.sol";
import "./BackingToken.sol";
import "./DAOToken.sol";
import "../interfaces/ITokenFactory.sol";

contract TokenFactory is ITokenFactory {
    function deployOptionToken(
        string memory name,
        string memory symbol,
        address underyling,
        uint256 expireTimestamp,
        address coreContract
    ) external returns (IOptionToken) {
        return IOptionToken(
            new OptionToken(
                    name,
                    symbol,
                    IERC20(underyling),
                    expireTimestamp,
                    coreContract
                )
        );
    }

    function deployBackingToken(
        string memory name,
        string memory symbol,
        address underyling,
        uint256 expireTimestamp,
        address coreContract,
        address backedAsset
    ) external returns (IBackingToken) {
        return IBackingToken(
            new BackingToken(
                    name,
                    symbol,
                    IERC20(underyling),
                    expireTimestamp,
                    coreContract,
                    backedAsset
                )
        );
    }

    function deployDAOToken(
        string memory name,
        string memory symbol,
        address coreContract
    ) external returns (IDAOToken) {
        return IDAOToken(
            new DAOToken(
                name,
                symbol,
                coreContract
            )
        );
    }
}
