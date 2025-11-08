"use client";

import { Button } from "../ui/button";
import newTab from "@/lib/newTab";
import { ModeToggle } from "../ModeToggle";
import {
  GithubLogoIcon,
  TwitterLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { BookOpen, Download, Languages } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="flex flex-row-reverse items-center gap-2">
      <ModeToggle />
      {/* <Button variant="outline" size="icon" onClick={() => null}>
        <Languages />
      </Button> */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => newTab("https://github.com/localshare")}
      >
        <GithubLogoIcon weight="bold" />
      </Button>
      <Button variant="outline" size="icon" onClick={() => null}>
        <TwitterLogoIcon weight="bold" />
      </Button>
      {/* <Button variant="outline" onClick={() => null}>
        Docs
        <BookOpen />
      </Button> */}
      <Button title="Coming soon" onClick={() => alert("Coming soon :)")}>
        <span className="font-bold">Install</span>
        <Download />
      </Button>
    </nav>
  );
}
