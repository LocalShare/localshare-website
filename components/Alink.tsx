"use client";

import newTab from "@/lib/newTab";

export default function Alink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`cursor-pointer border-b border-ring hover:text-ring hover:border-transparent transition-colors ${className}`}
      onClick={() => newTab(href)}
      role="link"
    >
      {children}
    </span>
  );
}
