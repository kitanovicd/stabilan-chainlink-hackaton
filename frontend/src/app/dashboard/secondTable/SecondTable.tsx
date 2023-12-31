"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useAccount } from "wagmi";
import Link from "next/link";

import { TokenType, formatUntilDate } from "../common";
import { buildTokenUrl } from "../../common/DisplayAddress";
import { useFetchBlockTime } from "../../common/useFetchBlockTime";

import { RewardsAmount } from "./RewardsAmount";
import { ClaimRewardsAmount } from "./ClaimRewardsAmount";
import { ExecuteOptions } from "./ExecuteOptions";
import { RewardsAmount2 } from "./RewardsAmount2";

import {
  Address0x,
  AvailableChains,
  contractAddressesByChain,
} from "app/config/Contract-Addresses";
import {
  findContractKeyByAddress,
  findTokenByAddress,
} from "app/config/tokens";
import {
  Button,
  EmptyContent,
  FlexCol,
  GenericModalHandles,
  ImageWrapper,
  MyFormProvider,
  RHFInputField,
  Typography,
} from "lib";
import { useWingsContractRead } from "lib/client/hooks/useWingsContractRead";
import { displayTokens } from "lib/utils/tokens/display-tokens";
import { useTargetNetwork } from "lib/client/hooks/useTargetNetwork";

interface FormData {
  amount: string;
}

export const SecondTable = () => {
  const { address } = useAccount();
  const { targetNetwork: network } = useTargetNetwork();
  // DataProvider.getUserTokens(coreContractAddress, userAddress)

  const { data: userTokens } = useWingsContractRead({
    contractName: "DataProvider",
    functionName: "getUserTokens",
    args: [
      contractAddressesByChain[network.modifiedName as AvailableChains]
        ?.StabilanCore,
      address as Address0x,
    ],
  });

  console.log({ userTokens });

  const modalRef = useRef<GenericModalHandles>(null);
  const methods = useForm<FormData>({
    defaultValues: {
      amount: "",
    },
  });
  const { handleSubmit, reset, watch } = methods;

  const onSubmitAsync = async () => {
    console.log("first");
  };

  const { currentTime } = useFetchBlockTime();

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
          >
            Execute option
          </Button>
        </FlexCol>
      </FlexCol>
    </MyFormProvider>
  );

  return (
    <div className="relative overflow-x-auto">
      <FlexCol className="gap-8">
        <Typography type="h4">Backing</Typography>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 rounded-xl">
            <tr>
              <th scope="col" className="px-6 py-3">
                Token
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Locked Until
              </th>
              <th scope="col" className="px-6 py-3">
                Rewards amount
              </th>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Assets amount
              </th>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {userTokens && userTokens.length > 0 ? (
              userTokens
                .filter((ut) => ut.tokenType === TokenType.BACKING)
                .map((userToken, index) => {
                  const tokenInfo = findTokenByAddress(
                    userToken.backedAsset,
                    network.modifiedName
                  );
                  const date = formatUntilDate(Number(userToken.endEpoch));
                  return (
                    <tr
                      key={index}
                      className="bg-white dark:bg-gray-800 border-b border-dashed border-[rgba(145,158,171,0.2)]"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                        <Link
                          href={
                            `${network.blockExplorers?.default.url}/token/${userToken.stabilanTokenAddress}` ||
                            "#"
                          }
                          target="_blank"
                          className="flex flex-row gap-2 items-center"
                        >
                          <ImageWrapper
                            src={tokenInfo?.icon || ""}
                            alt={tokenInfo?.name || "Unknown"}
                            width="30"
                            height="30"
                            className="mr-2 rounded-full"
                          />
                          {tokenInfo?.name || "Unknown Token"}
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        {displayTokens(userToken.balance, {
                          tokenLabel: findContractKeyByAddress(
                            userToken.undelyingAssetAddress,
                            network.modifiedName
                          ),
                        })}
                      </td>
                      <td className="px-6 py-4">{date}</td>
                      <td className="px-6 py-4">
                        <RewardsAmount
                          contractAddress={userToken.stabilanTokenAddress}
                          userAddress={address as Address0x}
                        />
                      </td>
                      {/* todo  */}
                      <td className="px-6 py-4">
                        <ClaimRewardsAmount
                          contractAddress={userToken.stabilanTokenAddress}
                          endEpoch={userToken.endEpoch}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <RewardsAmount2
                          contractAddress={userToken.stabilanTokenAddress}
                          userAddress={address as Address0x}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <ExecuteOptions
                          contractAddress={userToken.stabilanTokenAddress}
                        />
                      </td>
                    </tr>
                  );
                })
            ) : (
              <tr>
                <td
                  colSpan={8}
                  className="table-cell justify-center items-center p-10"
                >
                  <EmptyContent />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </FlexCol>
    </div>
  );
};
