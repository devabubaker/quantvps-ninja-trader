"use client";

import React from "react";

import { cn } from "../../../libs/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export default function PulsatingButton({
  className,
  children,
  pulseColor = "#0096ff",
  duration = "1.5s",
  ...props
}: PulsatingButtonProps) {
  return (
    <button
      className={cn(
        "yesrelative yestext-center yescursor-pointer yesflex yesjustify-center yesitems-center yesrounded-lg yestext-white dark:yestext-black yesbg-blue-500 dark:yesbg-blue-500 yespx-4 yespy-2",
        className,
      )}
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="yesrelative yesz-10">{children}</div>
      <div className="yesabsolute yestop-1/2 yesleft-1/2 yessize-full yesrounded-lg yesbg-inherit yesanimate-pulse yes-translate-x-1/2 yes-translate-y-1/2" />
    </button>
  );
}
