import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { etherUnits, parseUnits } from "viem";

import { useWingsContractRead } from "../../../lib/client/hooks/useWingsContractRead";
import { notification } from "../../../lib/scaffold-lib/utils/scaffold-eth";

import { Address0x } from "app/config/Contract-Addresses";
import {
  Button,
  FlexCol,
  GenericModal,
  GenericModalHandles,
  MyFormProvider,
  RHFInputField,
  Typography,
} from "lib";
import { useWingsContractWrite } from "lib/client/hooks/useWingsContractWrite";

interface FormData {
  amount: string;
}

export const ExecuteOptionModal: React.FC<{
  stabilanTokenAddress: Address0x;
  endEpoch: bigint | undefined;
}> = ({ stabilanTokenAddress, endEpoch }) => {
  const [isApproved, setApproved] = useState(false);

  const { writeAsync: executeOptionsAsync, isLoading } = useWingsContractWrite({
    contractName: "StabilanCore",
    functionName: "executeOptions",
    args: [undefined, undefined],
  });
  // optionsToken.underlying()

  const { data: optionsToken } = useWingsContractRead({
    contractName: "OptionToken",
    functionName: "underlying",
    overrideContractAddress: {
      address: stabilanTokenAddress,
    },
  });

  //IERC20(optionsToken.underlying()).approve(StabilanCoreAddress, amount)
  const { writeAsync: approveAsync, isLoading: isApproving } =
    useWingsContractWrite({
      contractName: "MockERC20",
      functionName: "approve",
      overrideContractAddress: {
        address: optionsToken,
      },
      args: [undefined, undefined],
    });

  const modalRef = useRef<GenericModalHandles>(null);
  const methods = useForm<FormData>({
    defaultValues: {
      amount: "",
    },
  });
  const { handleSubmit, reset, watch } = methods;

  const onSubmitAsync = async (data: FormData) => {
    const value = parseUnits(String(data.amount), etherUnits.wei);
    if (!isApproved) {
      await approveAsync({
        args: [stabilanTokenAddress, value],
        onSuccess: () => {
          notification.success("Success");
          setApproved(true);
        },
      });
      return;
    }
    await executeOptionsAsync({
      args: [stabilanTokenAddress, value],
      onSuccess: () => {
        notification.success("Success");
        setApproved(false);
      },
    });
  };

  const { data: currentEpoch } = useWingsContractRead({
    contractName: "StabilanCore",
    functionName: "currentEpoch",
  });

  const modalContent = (
    <MyFormProvider methods={methods} onSubmit={handleSubmit(onSubmitAsync)}>
      <FlexCol className="gap-8">
        <Typography type="body-bold">Execute option</Typography>
        <FlexCol>
          <RHFInputField<FormData>
            name="amount"
            rightLabel={
              <FlexCol className="items-end content-center justify-center gap-4">
                <div className="flex flex-col items-end content-center justify-center">
                  <Typography type="body-bold">Max</Typography>
                  <Typography type="tiny">MAX: 0</Typography>
                </div>
                <Typography type="body-bold">ETH</Typography>
              </FlexCol>
            }
            placeholder="0"
            type="number"
          />
          <Button
            size="big"
            color="primary"
            className="flex-1 mt-4"
            type="submit"
            disabled={isApproving || isLoading}
          >
            {isApproved ? "Execute option" : "Approve"}
          </Button>
        </FlexCol>
      </FlexCol>
    </MyFormProvider>
  );

  // Execute option
  if ((currentEpoch || 0) > (endEpoch || 0)) return <span>Expired</span>;

  return (
    <GenericModal
      ref={modalRef}
      buttonProps={{
        color: "primary",
        className: "flex-1",
      }}
      buttonText="Execute option"
      onOpen={reset}
    >
      {modalContent}
    </GenericModal>
  );
};
