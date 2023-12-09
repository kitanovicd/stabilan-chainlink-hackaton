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
import { useWingsContractRead } from "lib/client/hooks/useWingsContractRead";
import { useWingsContractWrite } from "lib/client/hooks/useWingsContractWrite";
import { getDateAsLastDayOfTheMonth } from "lib/utils/date/find-last-day-of-the-month";
import { useTargetNetwork } from "lib/client/hooks/useTargetNetwork";

interface IToken {
  name: string;
  icon: string;
}
{
  /* <CheckmarkIcon className="absolute top-0 right-0 h-6 w-6 text-green-500" /> */
}

export default function Page() {
  const { targetNetwork: network } = useTargetNetwork();
  console.log({ networMN: network.modifiedName });
  console.log({ network });

  const [isApproved, setIsApproved] = useState(false);
  const [months, setMonths] = useState(1);
  const [amount, setAmount] = useState("");
  const [selectedToken, setSelectedToken] = useState<IToken | undefined>(
    tokens[0]
  );

  const selectToken = (token: IToken) => {
    setSelectedToken(token);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!isNaN(Number(value))) {
      setAmount(value);
    }
  };

  // ------------- Contract ---------- //
  // const getAssetAPY = 1n;
  const { data: getAssetAPY } = useWingsContractRead({
    contractName: "StabilanCore",
    functionName: "getAssetAPY",
    args: [
      getAddressByTokenAndNetwork(selectedToken?.name, network.modifiedName),
    ],
  });
  console.log({ getAssetAPY });

  console.log({
    adres: getAddressByTokenAndNetwork(
      selectedToken?.name,
      network.modifiedName
    ),
  });
  const { data: assetsConfig } = useWingsContractRead({
    contractName: "StabilanCore",
    functionName: "assetsConfig",
    args: [
      getAddressByTokenAndNetwork(selectedToken?.name, network.modifiedName),
    ],
  });
  console.log({ assetsConfig });

  // todo check if this is working - overrideContractAddress??
  const { writeAsync: approveOptionsAsync, isLoading: isApproving } =
    useWingsContractWrite({
      contractName: "WETH",
      functionName: "approve",
      overrideContractAddress: assetsConfig ? (assetsConfig as any)[0] : "0xss",
      args: [undefined, undefined],
    });

  const { writeAsync: backAsync, isLoading: isBacking } = useWingsContractWrite(
    {
      contractName: "StabilanCore",
      functionName: "backing",
      args: [undefined, undefined, undefined],
    }
  );

  const submitAsync = async () => {
    if (!isApproved) {
      console.log({ assetsConfig });
      console.log({
        amount: amount ? parseUnits(String(amount), etherUnits.wei) : BigInt(0),
      });
      console.log({
        address:
          contractAddressesByChain[network.modifiedName as AvailableChains]
            ?.StabilanCore,
      });

      await approveOptionsAsync({
        args: [
          contractAddressesByChain[network.modifiedName as AvailableChains]
            ?.StabilanCore,
          amount ? parseUnits(String(amount), etherUnits.wei) : BigInt(0),
        ],
        onSuccess: () => setIsApproved(true),
      });
      console.log("first");
      return;
    }

    await backAsync({
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
        <Typography type="h2">Back asset</Typography>
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
        <div className="md:col-span-8 col-span-12 gap-12 flex flex-col mb-0 md:mb-10">
          <Card size="big">
            <Typography type="h5">Quote details</Typography>
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
                        WETH
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
                    WETH
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
                    {amount} WETH
                  </Typography>
                </FlexRow>
                <FlexRow className="justify-between">
                  <FlexRow className="gap-2 items-center">
                    <Typography>APY</Typography>
                    <Icon src={Icons.SolarInfoCircleBold} />
                  </FlexRow>
                  <Typography type="body-bold" className="text-info">
                    {getAssetAPY
                      ? `${(
                          Number(formatUnits(getAssetAPY, etherUnits.wei)) * 100
                        ).toFixed(2)}%`
                      : "/"}
                  </Typography>
                </FlexRow>
                <Divider />

                <Button
                  color="success"
                  size="big"
                  onClick={submitAsync}
                  loading={isBacking || isApproving}
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
