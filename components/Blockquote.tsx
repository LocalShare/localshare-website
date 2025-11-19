"use client";

export default function Blockquote({
  fromWho = "",
  className,
  children,
}: {
  fromWho?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <blockquote className="flex flex-col gap-2 border-l-2 rtl:border-r-2 rtl:border-l-0 border-ring pl-4 py-1 rtl:pl-0 rtl:pr-4">
      <p
        className={`italic before:content-['"'] before:inline after:content-['"'] text-muted-foreground ${className}`}
      >
        {children}
      </p>
      <p
        className={`text-ring brightness-60 dark:brightness-180 ${
          fromWho !== "" ? "block" : "hidden"
        }`}
      >
        &mdash; {fromWho}
      </p>
    </blockquote>
  );
}
