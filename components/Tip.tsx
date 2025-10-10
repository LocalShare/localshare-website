"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function Tip({
  tipText,
  triggerClassName = "",
  children,
}: {
  tipText: string;
  triggerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger className={`text-left w-fit ${triggerClassName}`}>
        {children}
      </TooltipTrigger>
      <TooltipContent>{tipText}</TooltipContent>
    </Tooltip>
  );
}
