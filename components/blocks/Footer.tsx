"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";
import Tip from "../Tip";
import newTab from "@/lib/newTab";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-accent/50">
      <Separator />
      <div className="flex items-center justify-between w-full p-8">
        <div
          className="flex items-center gap-3 transition-opacity opacity-50 hover:opacity-75 hover:cursor-pointer w-fit"
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
        {/* <span></span> */}
      </div>
      <Separator className="!w-4/5 mx-auto" />
      <div
        className="grid grid-cols-2 px-8 py-8 md:grid-cols-7 gap-y-8 "
        role="grid"
      >
        <div>
          <ul className="flex flex-col gap-6 text-sm lg:gap-2 text-muted-foreground">
            <li onClick={() => newTab("https://github.com/LocalShare")}>
              GitHub
            </li>
            <li onClick={() => newTab("#")}>Twitter</li>
            <li onClick={() => newTab("#")}>Disscusions</li>
          </ul>
        </div>
        <Separator orientation="vertical" className="hidden mx-auto md:block" />
        <div>
          <ul className="flex flex-col gap-6 text-sm lg:gap-2 text-muted-foreground">
            <li onClick={() => newTab("#")}>About</li>
            <li onClick={() => newTab("#")}>License</li>
            <li onClick={() => newTab("#")}>Privacy Policy</li>
          </ul>
        </div>
        <Separator orientation="vertical" className="hidden mx-auto md:block" />
        <div>
          <ul className="flex flex-col gap-6 text-sm lg:gap-2 text-muted-foreground">
            <li onClick={() => newTab("#")}>Contact</li>
            <li onClick={() => newTab("#")}>FAQ</li>
            <li onClick={() => newTab("#")}>Report Issues</li>
          </ul>
        </div>
        <Separator orientation="vertical" className="hidden mx-auto md:block" />
        <div>
          <ul className="flex flex-col gap-6 text-sm lg:gap-2 text-muted-foreground">
            <li onClick={() => newTab("#")}>Download</li>
            <Tip tipText="Online Servers are not available yet. We're working on it!">
              <li onClick={() => newTab("#")}>Online Servers</li>
            </Tip>
            <li onClick={() => newTab("#")}>Documentations</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
