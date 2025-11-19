import Alink from "@/components/Alink";
import Blockquote from "@/components/Blockquote";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function Privacy() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p>
        Your privacy is important to us. This project{" "}
        <span className="parenthesis">
          (and its sub-projects, modules, and submodules)
        </span>{" "}
        does not collect, store, or share any personal data from its users.
      </p>
      <p>
        For more information on how we handle data and ensure your privacy,
        please refer to our{" "}
        <a href="/license" className="link">
          License
        </a>{" "}
        page.
      </p>
      <p>
        This privacy policy is provided for informational purposes only and does
        not constitute legal advice. For specific legal concerns, please consult
        a qualified attorney.
      </p>
      <Blockquote fromWho="LocalShare Team">
        You can also check out our git repository to review the source code and
        verify our privacy practices. All of this project{" "}
        <span className="parenthesis">
          (and its sub-projects, modules, and submodules)
        </span>{" "}
        are available on{" "}
        <Alink href="https://github.com/LocalShare">GitHub</Alink>
      </Blockquote>
    </>
  );
}
