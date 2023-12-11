import React from "react";

import { Address0x } from "../../config/Contract-Addresses";
import { Button } from "../../../lib";
import { useWingsContractWrite } from "../../../lib/client/hooks/useWingsContractWrite";

export const ExecuteOptions: React.FC<{
  contractAddress: Address0x;
}> = ({ contractAddress }) => {
  //StabilanCore.claimExectuedOptions(backingTokenAddress)
  const { writeAsync: claimAsync, isLoading } = useWingsContractWrite({
    contractName: "StabilanCore",
    functionName: "claimExectuedOptions",
    args: [undefined],
  });

  return (
    <Button
      disabled={isLoading}
      onClick={async () => {
        await claimAsync({
          args: [contractAddress],
        });
      }}
    >
      Claim Assets
    </Button>
  );
};
