// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "./IStabilanToken.sol";

interface IBackingToken is IStabilanToken {
    error NotInsurancePlugin();

    function backedAsset() external view returns (address);

    function addPremiums(uint256 amount) external;

    function addExecutedOptions(uint256 amount) external;

    function getClaimingRewardsAndUpdate(address account) external returns(uint256);

    function getClaimingExecutedOptionsAndUpdate(address account) external returns(uint256);

    function getRewardsAmount(address account) external view returns(uint256, uint256);
}
