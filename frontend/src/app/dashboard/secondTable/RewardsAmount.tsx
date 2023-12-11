import React from "react";

import { Address0x } from "../../config/Contract-Addresses";
import { useWingsContractRead } from "../../../lib/client/hooks/useWingsContractRead";
import { displayTokens } from "../../../lib/utils/tokens/display-tokens";
import { Spinner } from "../../../lib";

export const RewardsAmount: React.FC<{
  contractAddress: Address0x;
  userAddress: Address0x;
}> = ({ contractAddress, userAddress }) => {
  const { data: getRewardsAmount, isFetching } = useWingsContractRead({
    contractName: "BackingToken",
    functionName: "getRewardsAmount",
    overrideContractAddress: {
      address: contractAddress,
    },
    args: [userAddress],
  });

  return (
    <>
      {isFetching && <Spinner />}
      {!isFetching &&
        displayTokens(getRewardsAmount ? (getRewardsAmount as any)[0] : 0n, {})}
    </>
  );
};
