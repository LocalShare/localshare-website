"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/blocks/Navigation";

export default function TopBar() {
  const router = useRouter();
  return (
    <>
      <div
        className="flex flex-col items-center justify-between gap-6 px-8 py-8 bg-accent/50 sm:flex-row sm:gap-0 sm:py-6"
        role="topbar"
      >
        <div
          className="flex items-center gap-2"
          role="button"
          onClick={() => router.push("/")}
        >
          <Image
            src="/logo_colored.svg"
            alt="LocalShare Logo"
            width={32}
            height={32}
          />
          <Image
            src="/text_default.svg"
            alt="localShare text logo"
            width={96}
            height={96}
            className="dark:invert-100"
          />
        </div>
        <Navigation />
      </div>
      <Separator />
    </>
  );
}
