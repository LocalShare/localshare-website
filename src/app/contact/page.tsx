import Clink from "@/components/Link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <h1>Contact Us</h1>
      <p>
        While{" "}
        <Clink href="https://github.com/orgs/LocalShare/discussions">
          the public disscusion
        </Clink>{" "}
        are available for any questions, you can contact us with{" "}
        <Clink href="mailto:hello@localshare.ir">our e-mail</Clink>.
      </p>
      <p>
        We're also on <Clink href="x.com/localshare">Twitter</Clink>, if you
        need a Gen-Z way to connect.
      </p>
    </>
  );
}
