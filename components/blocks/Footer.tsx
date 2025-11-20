"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";
import Tip from "../Tip";
import Clink from "../Link";
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
        className="grid grid-cols-2 px-8 py-8 md:grid-cols-7 gap-y-8 *:*:*:*:border-b-0!"
        role="grid"
      >
        <div>
          <ul className="flex flex-col gap-6 text-sm lg:gap-2 text-muted-foreground">
            <li>
              <Clink href="/download">Download</Clink>
            </li>
            <li>Blog</li>
            <li>
              <Clink href="https://github.com/orgs/LocalShare/discussions">
                Disscusions
              </Clink>
            </li>
          </ul>
        </div>
        <Separator orientation="vertical" className="hidden mx-auto md:block" />
        <div>
          <ul className="flex flex-col gap-6 text-sm lg:gap-2 text-muted-foreground">
            <li>
              <Clink href="/about">About</Clink>
            </li>
            <li>
              <Clink href="/license">License</Clink>
            </li>
            <li>
              <Clink href="/privacy">Privacy Policy</Clink>
            </li>
          </ul>
        </div>
        <Separator orientation="vertical" className="hidden mx-auto md:block" />
        <div>
          <ul className="flex flex-col gap-6 text-sm lg:gap-2 text-muted-foreground">
            <li>
              <Clink href="/contact">Contact</Clink>
            </li>
            <li>
              <Clink href="/faq">FAQ</Clink>
            </li>
            <li>
              <Clink href="/report">Report Issues</Clink>
            </li>
          </ul>
        </div>
        <Separator orientation="vertical" className="hidden mx-auto md:block" />
        <div>
          <ul className="flex flex-col gap-6 text-sm lg:gap-2 text-muted-foreground">
            <li>
              <Clink href="https://docs.localshare.ir" newtab>
                Documentations
              </Clink>
            </li>
            {/* <li>
              <Tip tipText="Online Servers are not available yet. We're working on it!">
                Online Servers
              </Tip>
            </li> */}
            <li>
              <Clink href="/team">Team</Clink>
            </li>
            <li>
              <Clink href="https://development.localshare.ir" newtab>
                Development
              </Clink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
