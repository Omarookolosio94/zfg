/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import React from "react";
import { cx } from "../helpers";

interface ALinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  href: string;
}

export default function ALink({ children, ...rest }: ALinkProps) {
  return (
    <a
      {...rest}
      className={cx(
        "flex items-center justify-center gap-2 px-[26px] py-[10px] text-[14px] transition duration-300 ease-in-out disabled:cursor-not-allowed",
        rest?.className!,
      )}
    >
      {children}
    </a>
  );
}
