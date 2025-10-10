"use client";

import { Button } from "../ui/button";
import Tip from "../Tip";
import newTab from "@/lib/newTab";
import { ModeToggle } from "../ModeToggle";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { TwitterLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { BookOpen } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="flex flex-row-reverse items-center gap-2">
      <Tip tipText="Switch theme">
        <ModeToggle />
      </Tip>
      <Tip tipText="GitHub">
        <Button
          variant="outline"
          size="icon"
          onClick={() => newTab("https://github.com/localshare")}
        >
          <GithubLogoIcon weight="bold" />
        </Button>
      </Tip>
      <Tip tipText="Twitter">
        <Button variant="outline" size="icon" onClick={() => null}>
          <TwitterLogoIcon weight="bold" />
        </Button>
      </Tip>
      <Tip tipText="Documentation">
        <Button variant="outline" size="icon" onClick={() => null}>
          <BookOpen />
        </Button>
      </Tip>
      <Tip tipText="Coming soon">
        <Button>Download</Button>
      </Tip>
    </nav>
  );
}
