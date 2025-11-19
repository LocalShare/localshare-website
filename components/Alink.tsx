"use client";

import newTab from "@/lib/newTab";

export default function Alink({
  href = "",
  className = "",
  children,
}: {
  href?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const forward = () => (href?.length > 0 ? newTab(href) : null);
  return (
    <span className={`link ${className}`} onClick={forward} role="link">
      {children}
    </span>
  );
}
