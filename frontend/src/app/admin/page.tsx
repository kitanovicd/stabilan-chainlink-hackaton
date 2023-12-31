"use client";

import { useAccount, useQueryClient } from "wagmi";

import { MockPriceFeedAggregatorComponent } from "./MockPriceFeedAggregator/MockPriceFeedAggregatorComponent";
import { Minterc20 } from "./minterc20/minterc20";

import { Button, FlexCol, Typography } from "lib";
import { useWingsContractWrite } from "lib/client/hooks/useWingsContractWrite";
import { useTargetNetwork } from "lib/client/hooks/useTargetNetwork";

export default function Page() {
  const queryClient = useQueryClient();
  const { targetNetwork: network } = useTargetNetwork();
  const { address } = useAccount();

  const { writeAsync: updateEpochAsync, isLoading: isEpoching } =
    useWingsContractWrite({
      contractName: "StabilanCore",
      functionName: "updateEpoch",
    });

  return (
    <div className="flex flex-col gap-5">
      <FlexCol className="mb-12 gap-5">
        <Typography type="h2">Dashboard</Typography>
        <Typography type="meta">
          <strong>This is dashboard page </strong>
        </Typography>
      </FlexCol>
      <Button
        className="w-48"
        color="error"
        loading={isEpoching}
        onClick={async () => {
          await updateEpochAsync({
            onSuccess: () => {
              queryClient.invalidateQueries();
            },
          });
        }}
      >
        Update epoch
      </Button>

      <FlexCol className="gap-10">
        <Minterc20 />
        <MockPriceFeedAggregatorComponent />
      </FlexCol>
    </div>
  );
}
