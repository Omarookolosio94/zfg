import React from "react";

export default function HorizontalScroll({
  children = <div></div>,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="hide-scroll-bar flex overflow-x-scroll py-3 transition-all">
      <div className="flex w-full flex-row flex-nowrap gap-3 md:flex-col">
        {children}
      </div>
    </div>
  );
}
