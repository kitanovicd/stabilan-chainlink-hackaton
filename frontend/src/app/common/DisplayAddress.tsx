"use client";

import Link from "next/link";
import { useState } from "react";

import { Typography } from "../../lib";

export const DisplayAddress: React.FC<{
  address?: string;
}> = ({ address }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <span
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        <Typography type="meta" className="text-primary cursor-pointer">
          🚿 {isHidden ? "Display" : "Hide"} address
        </Typography>
      </span>
      {!isHidden && (
        <Link href={address || "#"} target="_blank">
          <Typography type="meta" className="break-words">
            {address}
          </Typography>
        </Link>
      )}
    </>
  );
};
