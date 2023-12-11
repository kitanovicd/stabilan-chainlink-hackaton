import React from "react";

import { Address0x } from "../../config/Contract-Addresses";
import { Button } from "../../../lib";
import { useWingsContractWrite } from "../../../lib/client/hooks/useWingsContractWrite";
import { useWingsContractRead } from "../../../lib/client/hooks/useWingsContractRead";

export const ClaimRewardsAmount: React.FC<{
  contractAddress: Address0x;
  endEpoch: bigint | undefined;
}> = ({ contractAddress, endEpoch }) => {
  //(kada je stabilanCore.currentEpoch() > backintToken.endEpoch())
  const { data: currentEpoch } = useWingsContractRead({
    contractName: "StabilanCore",
    functionName: "currentEpoch",
  });

  // StabilanCore.claimBackingRewards(backingTokenAddress)
  const { writeAsync: claimAsync, isLoading } = useWingsContractWrite({
    contractName: "StabilanCore",
    functionName: "claimBackingRewards",
    args: [undefined],
  });

  // Claim Rewards Amount
  if ((currentEpoch || 0) <= (endEpoch || 0)) return null;

  return (
    <Button
      disabled={isLoading}
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
