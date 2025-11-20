"use client";

import { Button } from "@/components/ui/button";
import {
  AndroidLogoIcon,
  WindowsLogoIcon,
  BracketsAngleIcon,
  GlobeIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import Clink from "@/components/Link";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Issues",
// };

export default function Report() {
  const router = useRouter();
  return (
    <>
      <h1>Report Issues</h1>
      <p>
        If you wanna report bugs and other application-related problems, please
        use GitHub issues tracker.
      </p>
      <ul className="flex gap-8">
        <li>
          <Button
            size="lg"
            title="LocalShare Windows"
            onClick={() =>
              router.push(
                "https://github.com/localshare/localshare-windows/issues"
              )
            }
          >
            LocalShare <WindowsLogoIcon size={28} weight="fill" />
          </Button>
        </li>
        <li>
          <Button
            size="lg"
            title="LocalShare Android"
            onClick={() =>
              router.push(
                "https://github.com/localshare/localshare-android/issues"
              )
            }
          >
            LocalShare <AndroidLogoIcon size={28} weight="fill" />
          </Button>
        </li>
        {/* <li>
              <Button size="lg" onClick={()=>router.push("https://github.com/localshare/localshare-online/issues")}>LocalShare Online</Button>
            </li> */}
      </ul>
      <p>
        If you've found bugs related to the Core package of LocalShare, submit
        issues on it's GitHub repository.
      </p>
      <Button
        size="lg"
        className="w-fit"
        onClick={() =>
          router.push("https://github.com/localshare/localshare-core/issues")
        }
      >
        LS Core
      </Button>
      <p>For problems in regards of this website,</p>
      <Button
        size="lg"
        className="w-fit"
        onClick={() =>
          router.push("https://github.com/localshare/localshare-website/issues")
        }
      >
        LS Website
      </Button>
      <p>If you encountered any other problems, feel free to email us:</p>
      <Clink href="mailto:issues@localshare.ir" className="w-fit">
        issues [at] localshare [dot] ir
      </Clink>
    </>
  );
}
