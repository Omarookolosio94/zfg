/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import React from "react";
import { cx } from "../helpers";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      suppressHydrationWarning
      {...rest}
      className={cx(
        "flex items-center justify-center gap-2 px-[26px] py-[12px] uppercase font-mont text-[14px] transition duration-300 ease-in-out disabled:cursor-not-allowed",
        rest?.className!,
      )}
    >
      {children}
    </button>
  );
}
