"use client";

export default function Blockquote({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`border-l-2 rtl:border-r-2 rtl:border-l-0 border-ring pl-4 py-1 rtl:pl-0 rtl:pr-4 italic before:content-['"'] after:content-['"'] text-muted-foreground ${className}`}
    >
      {children}
    </span>
  );
}
