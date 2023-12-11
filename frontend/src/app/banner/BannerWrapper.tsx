"use client";

import React from "react";
import Link from "next/link";
import { addMonths, format } from "date-fns";

import { Banner } from "../../lib/components/banner/Banner";
import { RouterSettings } from "../../lib";
import { useWingsContractRead } from "../../lib/client/hooks/useWingsContractRead";
import { startdAPPDate } from "../config/date";

export const BannerWrapper = () => {
  const { data: currentEpoch, isFetched } = useWingsContractRead({
    contractName: "StabilanCore",
    functionName: "currentEpoch",
  });

  const currentTime = currentEpoch
    ? format(addMonths(startdAPPDate, Number(currentEpoch)), "MMMM, yyyy")
    : isFetched
    ? "Unable to load"
    : "Loading...";

  // if (IS_DEV_MODE) return null;

  return (
    <Banner
      headerText="Stabilan"
      bodyText={`This is test/demo version of the dAPP. Current dAPP time is: ${currentTime}`}
      action={
        <Link
          href={RouterSettings.admin}
          className="px-5 py-2 me-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Go To Dashboard
        </Link>
      }
    />
  );
};
