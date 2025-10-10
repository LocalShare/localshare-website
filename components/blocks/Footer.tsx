"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";
import Tip from "../Tip";

export default function Footer() {
  const router = useRouter();
  return (
    <>
      <Separator />
      <div
        className="flex items-center gap-3 opacity-50 hover:opacity-75 hover:cursor-pointer transition-opacity px-8 py-8 w-fit"
        role="button"
        onClick={() => router.push("/")}
      >
        <Image
          src="/logo_default.svg"
          alt="LocalShare Logo"
          width={56}
          height={56}
          className="dark:invert-100"
        />
        <Image
          src="/text_default.svg"
          alt="localShare text logo"
          width={132}
          height={132}
          className="dark:invert-100"
        />
      </div>
      <Separator className="!w-4/5 mx-auto" />
      <div
        className="grid grid-cols-2 md:grid-cols-7 gap-y-8 px-8 py-8 "
        role="grid"
      >
        <div>
          <ul className="flex flex-col gap-6 lg:gap-2 text-sm text-muted-foreground">
            <li>GitHub</li>
            <li>Twitter</li>
            <li>Disscusions</li>
          </ul>
        </div>
        <Separator orientation="vertical" className="mx-auto hidden md:block" />
        <div>
          <ul className="flex flex-col gap-6 md:gap-4 lg:gap-2 text-sm text-muted-foreground">
            <li>About</li>
            <li>License</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <Separator orientation="vertical" className="mx-auto hidden md:block" />
        <div>
          <ul className="flex flex-col gap-6 md:gap-4 lg:gap-2 text-sm text-muted-foreground">
            <li>Contact</li>
            <li>FAQ</li>
            <li>Report Issues</li>
          </ul>
        </div>
        <Separator orientation="vertical" className="mx-auto hidden md:block" />
        <div>
          <ul className="flex flex-col gap-6 md:gap-4 lg:gap-2 text-sm text-muted-foreground">
            <li>Download</li>
            <Tip tipText="Online Servers are not available yet. We're working on it!">
              <li>Online Servers</li>
            </Tip>
            <li>Documentations</li>
          </ul>
        </div>
      </div>
    </>
  );
}
