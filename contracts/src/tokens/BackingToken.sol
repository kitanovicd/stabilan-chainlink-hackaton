// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../interfaces/IBackingToken.sol";
import "./StabilanToken.sol";

contract BackingToken is IBackingToken, StabilanToken {
    address public backedAsset;
    address public insurancePlugin;

    uint256 public totalPremiumsPerToken;
    mapping(address => uint256) public lastPremium;
    mapping(address => uint256) public totalRewardsForAccount;

    uint256 public totalExecutedOptionsPerToken;
    mapping(address => uint256) public lastExecutedOptions;
    mapping(address => uint256) public totalExecutedOptionsForAccount;

    modifier onlyInsurancePlugin() {
        if (msg.sender != insurancePlugin) {
            revert NotInsurancePlugin();
        }
        _;
    }

    constructor(
        string memory _name,
        string memory _symbol,
        IERC20 _underlying,
        uint256 _endEpoch,
        address _coreContract,
        address _backedAsset
    ) StabilanToken(_name, _symbol, _underlying, _endEpoch, _coreContract) {
        backedAsset = _backedAsset;
        totalPremiumsPerToken = 0;
        totalExecutedOptionsPerToken = 0;
    }

    function addPremiums(uint256 amount) external onlyCore {
        if (totalSupply() != 0) {
            totalPremiumsPerToken += (amount * 1e18) / totalSupply();
        }
    }

    function addExecutedOptions(uint256 amount) external onlyCore {
        if (totalSupply() != 0) {
            totalExecutedOptionsPerToken += (amount * 1e18) / totalSupply();
        }
    }

    function getClaimingRewardsAndUpdate(address account) external onlyCore returns(uint256) {
        uint256 rewards = totalRewardsForAccount[account];
        totalRewardsForAccount[account] = 0;
        return rewards;
    }

    function getClaimingExecutedOptionsAndUpdate(address account) external onlyCore returns(uint256) {
        uint256 executedOptions = totalExecutedOptionsForAccount[account];
        totalExecutedOptionsForAccount[account] = 0;
        return executedOptions;
    }

    function getRewardsAmount(address account) external view returns(uint256, uint256) {
        return (totalRewardsForAccount[account], totalExecutedOptionsForAccount[account]);
    }

    function _updateAccount(address account) internal {
        totalRewardsForAccount[account] += balanceOf(account) * (totalPremiumsPerToken - lastPremium[account]);
        lastPremium[account] = totalPremiumsPerToken;

        totalExecutedOptionsForAccount[account] += balanceOf(account) * (totalExecutedOptionsPerToken - lastExecutedOptions[account]);
        lastExecutedOptions[account] = lastPremium[account];
    }

    function _update(address from, address to, uint256 value) internal virtual override {
        if (from != address(0)) {
            _updateAccount(from);
        }
        if (to != address(0)) {
            _updateAccount(to);
        }
        super._update(from, to, value);
    }
}
