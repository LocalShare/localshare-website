"use client";
import Link from "next/link";

export default function Clink({
  href,
  newtab = false,
  className = "",
  children,
}: {
  href: string;
  newtab?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  if (!href || href.length <= 0) throw new Error("No href specified");
  return (
    <Link
      href={href}
      className={`link ${className}`}
      target={newtab ? "_blank" : ""}
    >
      {children}
    </Link>
  );
}
