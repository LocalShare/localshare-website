import LocalShare from "@/components/LocalShare";
import Blockquote from "@/components/Blockquote";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <h1>
        About <LocalShare />
      </h1>
      <p>
        At first, as a part of living in Iran, we had difficulties using
        services like Discord or other screen/media sharing apps, so those were
        not an option. Now, you might ask:
      </p>
      <Blockquote>
        How something "local" resolves with Internet connectivity problems?
      </Blockquote>
      <p>
        Well, tbh, our problem &mdash; which resulted in us getting the idea of{" "}
        <LocalShare /> &mdash; was not about Internet problems, it was about,
        how can we play something{" "}
        <span className="parenthesis">(in our situation, some music)</span> in
        one device, and then listen to it synchronously{" "}
        <span className="parenthesis">(like a live stream)</span> in others'
        devices.
      </p>
      <p>
        Then, BOOM. <LocalShare /> was our idea. An app that helps us create a
        simple media streaming server, but at first, that was not how we were
        thinking of how it will work.
      </p>
      <p>This page will be completed :)</p>
    </>
  );
}
