import React from "react";

import { Address0x } from "../../config/Contract-Addresses";
import { Button } from "../../../lib";
import { useWingsContractWrite } from "../../../lib/client/hooks/useWingsContractWrite";
import { useWingsContractRead } from "../../../lib/client/hooks/useWingsContractRead";

export const ClaimRewardsAmount: React.FC<{
  contractAddress: Address0x;
}> = ({ contractAddress }) => {
  //(kada je stabilanCore.currentEpoch() > backintToken.endEpoch())
  const { data: currentEpoch } = useWingsContractRead({
    contractName: "StabilanCore",
    functionName: "currentEpoch",
  });

  const { data: endEpoch } = useWingsContractRead({
    contractName: "BackingToken",
    functionName: "endEpoch",
    overrideContractAddress: {
      address: contractAddress,
    },
  });

  // StabilanCore.claimBackingRewards(backingTokenAddress)
  const { writeAsync: claimAsync, isLoading } = useWingsContractWrite({
    contractName: "StabilanCore",
    functionName: "claimBackingRewards",
    args: [undefined],
  });

  return (
    <Button
      disabled={(currentEpoch || 0) <= (endEpoch || 0) || isLoading}
      onClick={async () => {
        await claimAsync({
          args: [contractAddress],
        });
      }}
    >
      Claim Rewards Amount
    </Button>
  );
};
