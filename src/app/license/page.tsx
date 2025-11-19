import { Metadata } from "next";

export const metadata: Metadata = {
  title: "License",
};

export default function License() {
  return (
    <>
      <h1>License</h1>
      <p>
        This project{" "}
        <span className="parenthesis">
          (and it's sub-projects, modules and submodules)
        </span>{" "}
        are licensed under the{" "}
        <span className="font-bold">GNU General Public License version 3</span>.
        See the{" "}
        <a href="https://opensource.org/license/gpl-3-0" className="link">
          full license text
        </a>{" "}
        for details.
      </p>
    </>
  );
}
