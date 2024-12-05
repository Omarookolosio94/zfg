import React from "react";
import { useHorizontalScroll } from "../hooks/UseHorizontalScroll";

export default function HorizontalScroll({
  children = <div></div>,
}: {
  children?: React.ReactNode;
}) {
  const scrollRef = useHorizontalScroll(0.3);
  return (
    <div
      ref={scrollRef}
      className="hide-scroll-bar flex overflow-x-scroll py-3 transition-all"
    >
      <div className="flex w-full flex-nowrap gap-3">{children}</div>
    </div>
  );
}
