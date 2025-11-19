import Alink from "@/components/Alink";
import LocalShare from "@/components/LocalShare";
import Blockquote from "@/components/Blockquote";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download",
};

export default function Download() {
  return (
    <>
      <h1>Download and Install</h1>
      <p>
        Unfortunately, <LocalShare /> is not yet available for download. We are
        actively working on releasing the application for Android and Windows
        platforms.
      </p>
      <p>Please stay tuned for our first stable release!</p>
      <Blockquote>
        You can see our development progress on{" "}
        <Alink href="https://development.localshare.ir">
          development.localshare.ir
        </Alink>
        .
      </Blockquote>
    </>
  );
}
