// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../interfaces/IDAOToken.sol";

contract DAOToken is IDAOToken, ERC20 {
    address public coreContract;

    modifier onlyCore() {
        if (msg.sender != coreContract) {
            revert NotCore();
        }
        _;
    }

    constructor(
        string memory _name,
        string memory _symbol,
        address _coreContract
    ) ERC20(_name, _symbol) {
        coreContract = _coreContract;
    }

    function mint(address account, uint256 amount) external override onlyCore {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) external override onlyCore {
        _burn(account, amount);
    }
}