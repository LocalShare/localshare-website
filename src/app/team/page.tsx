import Link from "next/link";
import LocalShare from "@/components/LocalShare";
import { Separator } from "@/components/ui/separator";
import Blockquote from "@/components/Blockquote";
import { Metadata } from "next";
import Clink from "@/components/Link";

export const metadata: Metadata = {
  title: "Team",
};

export default function Team() {
  return (
    <>
      <h1>
        This is us. <LocalShare /> development team.
      </h1>
      <Separator />
      {/* <div className="flex flex-col gap-6 *:grid *:grid-cols-3 *:gap-4 *:text-center">
        <ul className="text-lg">
          <li>Core Team</li>
          <li>Designers</li>
          <li>Testers</li>
        </ul>
        <div className="*:flex *:flex-col *:gap-4">
          <ul className="*:border *:rounded-md *:p-4 *:cursor-pointer *:hover:bg-accent/50 *:transition-colors">
            <li onClick={() => newTab("https://alialmasi.ir")}>Ali Almasi</li>
            <li>Mobin Pourhoshangi</li>
          </ul>
          <ul className="*:border *:rounded-md *:p-4 *:cursor-pointer *:hover:bg-accent/50 *:transition-colors">
            <li>Ali Almasi</li>
            <li>Sobhan Hamidi</li>
          </ul>
          <ul className="*:border *:rounded-md *:p-4 *:cursor-pointer *:hover:bg-accent/50 *:transition-colors">
            <li>Mahdi Pahlevani</li>
            <li>Mahdi Sokhanvar</li>
          </ul>
        </div>
      </div> */}
      <div className="flex gap-6 justify-around *:w-50 *:text-center *:border *:rounded-md *:p-4 *:cursor-pointer *:hover:bg-accent/50 *:transition-colors">
        <Clink href="https://alialmasi.ir" newtab>
          Ali Almasi
        </Clink>
        <Clink href="#">Mobin Pourhoshangi</Clink>
      </div>
      <Separator />
      <Blockquote className="text-ring">
        This page is not complete yet, as we're having new people joining our
        team along the way of our first stable release.
      </Blockquote>
      <p>We also appreciate the contributions of our open-source community.</p>
      <p>
        If you wanna learn about the app itself, see our{" "}
        <Link href="/about" className="link">
          about page
        </Link>
        .
      </p>
    </>
  );
}
