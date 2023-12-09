"use client";

import { useState } from "react";
import { etherUnits, formatUnits, parseUnits } from "viem";

import {
  Button,
  Card,
  Divider,
  FlexCol,
  FlexRow,
  Icon,
  Icons,
  InputFieldS,
  Typography,
} from "../../lib";
import { InputSliderFieldS } from "../../lib/components/form/input-stabilan/InputSliderField/InputSliderField";
import { DisplayAddress } from "../common/DisplayAddress";
import { TermsAndConditionCard } from "../common/TermsAndConditionCard";
import TokenCard from "../common/TokenCard";

import {
  AvailableChains,
  contractAddressesByChain,
} from "app/config/Contract-Addresses";
import { getAddressByTokenAndNetwork, tokens } from "app/config/tokens";
import { useGetPriceByAddress } from "lib/client/hooks/useGetPriceByAddress";
import { useWingsContractRead } from "lib/client/hooks/useWingsContractRead";
import { useWingsContractWrite } from "lib/client/hooks/useWingsContractWrite";
import { notification } from "lib/scaffold-lib/utils/scaffold-eth";
import { getDateAsLastDayOfTheMonth } from "lib/utils/date/find-last-day-of-the-month";
import { displayTokens } from "lib/utils/tokens/display-tokens";
import { useTargetNetwork } from "lib/client/hooks/useTargetNetwork";

interface IToken {
  name: string;
  icon: string;
}

export default function Page() {
  const { targetNetwork: network } = useTargetNetwork();
  console.log({ modName: network.modifiedName });
  // StabilanCore.getOptionsPrice(assetAddress, amount, duration, payingTokenAddress)
  const [months, setMonths] = useState(1);
  const [amount, setAmount] = useState("");
  const [isApproved, setIsApproved] = useState(false);
  const [selectedToken, setSelectedToken] = useState<IToken | undefined>(
    tokens[0]
  );

  const selectToken = (token: IToken) => {
    setSelectedToken(token);
  };

  // -- contract -- //
  // StabilanCore.getYearlyCost(assetAddress, amount, duration, payingTokenAddress)
  // const { data: getYearlyCost } = useWingsContractRead({
  //   contractName: "StabilanCore",
  //   functionName: "getYearlyCost",
  //   args: [
  //     getAddressByTokenAndNetwork(selectedToken?.name, network.modifiedName),
  //     parseUnits(String(amount), etherUnits.wei),
  //     BigInt(months),
  //     contractAddressesByChain[network.modifiedName as AvailableChains]?.WETH,
  //   ],
  // });

  // function getMaxOptionAmount(address assetAddress, uint256 durationEpochs) external view returns (uint256) {

  console.log({
    getOptionsPriceAddress: getAddressByTokenAndNetwork(
      selectedToken?.name,
      network.modifiedName
    ),
  });
  console.log({
    wethadd:
      contractAddressesByChain[network.modifiedName as AvailableChains]?.WETH,
  });

  const { formattedPrice: WETHFormattedPrice } = useGetPriceByAddress(
    contractAddressesByChain[network.modifiedName as AvailableChains]?.WETH
  );

  const { data: assetsConfig } = useWingsContractRead({
    contractName: "StabilanCore",
    functionName: "assetsConfig",
    args: [
      getAddressByTokenAndNetwork(selectedToken?.name, network.modifiedName),
    ],
  });
  console.log({ assetsConfig });
  const { data: getOptionsPrice } = useWingsContractRead({
    contractName: "StabilanCore",
    functionName: "getOptionsPrice",
    args: [
      getAddressByTokenAndNetwork(selectedToken?.name, network.modifiedName),
      parseUnits(String(amount), etherUnits.wei),
      BigInt(months),
      assetsConfig ? (assetsConfig as any)[0] : "0xss",
    ],
  });

  const { data: getMaxOptionAmount } = useWingsContractRead({
    contractName: "StabilanCore",
    functionName: "getMaxOptionAmount",
    args: [
      getAddressByTokenAndNetwork(selectedToken?.name, network.modifiedName),
      BigInt(months),
    ],
  });

  console.log({ getMaxOptionAmount });

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!isNaN(Number(value))) {
      console.log({ value });
      console.log({
        max: formatUnits(getMaxOptionAmount || BigInt(0), etherUnits.wei),
      });
      if (
        Number(value) >
        Number(formatUnits(getMaxOptionAmount || BigInt(0), etherUnits.wei))
      ) {
        notification.error(
          "Insufficient amount!, max amount is: " +
            Number(formatUnits(getMaxOptionAmount || BigInt(0), etherUnits.wei))
        );
        return;
      }
      setAmount(value);
    }
  };

  const { writeAsync: approveOptionsAsync, isLoading: isApproving } =
    useWingsContractWrite({
      contractName: "MockERC20",
      functionName: "approve",
      overrideContractAddress: {
        address: assetsConfig ? (assetsConfig as any)[0] : "0xss",
      },
      args: [undefined, undefined],
    });

  const { writeAsync: buyOptionsAsync, isLoading: isBuying } =
    useWingsContractWrite({
      contractName: "StabilanCore",
      functionName: "buyOptions",
      args: [undefined, undefined, undefined],
    });

  const { writeAsync: subscribeAsnyc, isLoading: isSubscribing } =
    useWingsContractWrite({
      contractName: "INSRD",
      functionName: "addPlugin",
      args: [
        contractAddressesByChain[network.modifiedName as AvailableChains]
          ?.INSRD,
      ],
    });

  console.log({ getOptionsPrice });

  const submitAsync = async () => {
    if (!isApproved) {
      console.log({
        formatedOptionPrice: getOptionsPrice
          ? (getOptionsPrice as any)[0]
          : BigInt(0),
      });
      await approveOptionsAsync({
        args: [
          contractAddressesByChain[network.modifiedName as AvailableChains]
            ?.StabilanCore,
          getOptionsPrice ? (getOptionsPrice as any)[0] : BigInt(0),
        ],
        onSuccess: () => setIsApproved(true),
      });
      return;
    }

    //prvo mora approve
    await buyOptionsAsync({
      args: [
        getAddressByTokenAndNetwork(selectedToken?.name, network.modifiedName),
        parseUnits(String(amount), etherUnits.wei),
        BigInt(months),
      ],
      onSuccess: () => resetForm(),
    });
  };

  const resetForm = () => {
    setAmount("");
    setMonths(1);
    setSelectedToken(undefined);
    setIsApproved(false);
  };

  return (
    <div className="flex flex-col gap-5">
      <FlexCol className="mb-12 gap-5">
        <Typography type="h2">Buy insurance</Typography>
        <Typography type="meta">
          <strong>Select Token </strong>& Enter the amount you want to cover and
          for how long.
        </Typography>
      </FlexCol>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
        {tokens.map((token, index) => (
          <TokenCard
            key={index}
            token={token}
            isSelected={selectedToken?.name === token.name}
            onSelect={selectToken}
          />
        ))}
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="md:col-span-8 col-span-12 gap-12 flex flex-col">
          <Card size="big">
            <FlexRow className="content-start justify-between">
              <Typography type="h5">Quote details</Typography>
            </FlexRow>
            <br />
            <div className="flex flex-col gap-12">
              <Typography type="body-regular">
                This product covers any token or combination of tokens you have
                in the Protocol. In case of a claim, you`ll receive the
                equivalent of your lost funds in ETH up to the covered amount.
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <InputSliderFieldS
                    label={<Typography type="body-bold">Duration</Typography>}
                    rightLabel={
                      <Typography type="h6" className="text-info">
                        Months
                      </Typography>
                    }
                    value={months}
                    name="months"
                    min={1}
                    max={6}
                    onChange={(e) => {
                      const newValue = Number(e.target.value);
                      setMonths(newValue > 6 ? 6 : newValue);
                    }}
                  />
                </div>
                <div className="col-span-1">
                  <InputFieldS
                    label={<Typography type="body-bold">Amount</Typography>}
                    rightLabel={
                      <Typography type="h6" className="text-info">
                        {selectedToken ? selectedToken.name : "/"}
                      </Typography>
                    }
                    downLabel={
                      <Typography type="body-bold">
                        Max: <>{displayTokens(getMaxOptionAmount, {}) || "/"}</>
                      </Typography>
                    }
                    value={amount}
                    name="amount"
                    onChange={handleAmountChange}
                  />
                </div>
              </div>
            </div>
          </Card>
          <TermsAndConditionCard />
        </div>
        <div className="md:col-span-4 col-span-12">
          <Card size="big">
            {selectedToken === undefined && (
              <FlexCol className="gap-6">
                <Typography type="h5">Summary</Typography>
                <Typography type="meta">Please select token</Typography>
              </FlexCol>
            )}
            {selectedToken && (
              <FlexCol className="gap-6">
                <Typography type="h5">Summary</Typography>
                <FlexRow className="gap-3 items-center">
                  <Icon
                    className="rounded-full"
                    src={selectedToken.icon}
                    width={64}
                    height={64}
                  />
                  <FlexCol className="gap-3">
                    <Typography type="body-bold">
                      {selectedToken.name}
                    </Typography>
                    <Typography type="meta">
                      {selectedToken.name === "WBTC" ? (
                        <>Bitcoin</>
                      ) : (
                        <>Stablecoin</>
                      )}
                    </Typography>
                  </FlexCol>
                </FlexRow>

                <DisplayAddress
                  address={`${
                    network.blockExplorers?.default.url
                  }/token/${getAddressByTokenAndNetwork(
                    selectedToken?.name,
                    network.modifiedName
                  )}`}
                />

                <Divider />
                <FlexRow className="justify-between">
                  <FlexRow className="gap-2 items-center">
                    <Typography>Pay in</Typography>
                    <Icon src={Icons.SolarInfoCircleBold} />
                  </FlexRow>
                  <Typography type="body-bold" className="text-info">
                    {selectedToken.name}
                  </Typography>
                </FlexRow>
                <FlexRow className="justify-between">
                  <FlexRow className="gap-2 items-center">
                    <Typography>Until</Typography>
                    <Icon src={Icons.SolarInfoCircleBold} />
                  </FlexRow>
                  <Typography type="body-bold" className="text-info">
                    {getDateAsLastDayOfTheMonth({
                      numberOfMonths: months,
                    }).toDateString()}
                  </Typography>
                </FlexRow>
                <FlexRow className="justify-between">
                  <FlexRow className="gap-2 items-center">
                    <Typography>Cost</Typography>
                    <Icon src={Icons.SolarInfoCircleBold} />
                  </FlexRow>
                  <Typography type="body-bold" className="text-info">
                    {getOptionsPrice
                      ? formatUnits((getOptionsPrice as any)[0], 18)
                      : "/"}
                    {/* {getOptionsPrice
                      ? displayTokens((getOptionsPrice as any)[0], {
                          maxDecimals: 12,
                        })
                      : "/"} */}
                  </Typography>
                </FlexRow>
                {/* <FlexRow className="justify-between">
                  <Typography>Yearly cost:</Typography>
                  <Typography type="body-bold" className="text-info">
                    {displayTokens(getYearlyCost, {
                      displayInDollars: true,
                      formattedPrice: WETHFormattedPrice,
                    })}
                  </Typography>
                </FlexRow> */}

                <Divider />

                <Button
                  color="success"
                  size="big"
                  onClick={submitAsync}
                  loading={isBuying || isApproving}
                >
                  {isApproved ? "Pay" : "Approve"}
                </Button>
              </FlexCol>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
