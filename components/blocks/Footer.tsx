"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";
import Tip from "../Tip";
import newTab from "@/lib/newTab";
import Link from "next/link";
import Navigation from "./Navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-accent/50">
      <Separator />
      <div className="flex items-center justify-between w-full p-8 flex-col gap-6 md:flex-row">
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
        <Navigation />
      </div>
      <div className="px-6">
        <Separator />
      </div>
      <div
        className="grid grid-cols-2 px-8 py-8 md:grid-cols-7 gap-y-8 "
        role="grid"
      >
        <div>
          <ul className="flex flex-col gap-6 text-sm lg:gap-2 text-muted-foreground">
            <li>
              <Link href="/download">Download</Link>
            </li>
            <li>Blog</li>
            <li>
              <Link href="https://github.com/orgs/LocalShare/discussions">
                Disscusions
              </Link>
            </li>
          </ul>
        </div>
        <Separator orientation="vertical" className="hidden mx-auto md:block" />
        <div>
          <ul className="flex flex-col gap-6 text-sm lg:gap-2 text-muted-foreground">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/license">License</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <Separator orientation="vertical" className="hidden mx-auto md:block" />
        <div>
          <ul className="flex flex-col gap-6 text-sm lg:gap-2 text-muted-foreground">
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/report">Report Issues</Link>
            </li>
          </ul>
        </div>
        <Separator orientation="vertical" className="hidden mx-auto md:block" />
        <div>
          <ul className="flex flex-col gap-6 text-sm lg:gap-2 text-muted-foreground">
            <li>
              <Link href="https://docs.localshare.ir" target="_blank">
                Documentations
              </Link>
            </li>
            {/* <li>
              <Tip tipText="Online Servers are not available yet. We're working on it!">
                Online Servers
              </Tip>
            </li> */}
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="https://development.localshare.ir" target="_blank">
                Development
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
