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
        className="flex sm:flex-row flex-col gap-2 sm:gap-0 items-center justify-between py-6 px-8"
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
