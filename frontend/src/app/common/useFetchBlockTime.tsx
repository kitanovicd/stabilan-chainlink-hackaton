import { addMonths, format } from "date-fns";

import { useWingsContractRead } from "../../lib/client/hooks/useWingsContractRead";
import { startdAPPDate } from "../config/date";

/**
 * @returns The current date of the chain.
 */
export function useFetchBlockTime() {
  const { data: currentEpoch, isFetched } = useWingsContractRead({
    contractName: "StabilanCore",
    functionName: "currentEpoch",
  });

  const currentTime = currentEpoch
    ? addMonths(startdAPPDate, Number(currentEpoch))
    : undefined;

  return {
    currentTime,
  };
}
