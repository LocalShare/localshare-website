import Alink from "@/components/Alink";
import Blockquote from "@/components/Blockquote";
import LocalShare from "@/components/LocalShare";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 pb-2">
        <header className="flex flex-col items-center gap-2">
          <Image
            src="/logo_colored.svg"
            alt="LocalShare Logo"
            width={128}
            height={128}
            className="p-4"
          />
          <h1 className="text-4xl font-black">LocalShare</h1>
        </header>
        <h2 className="text-xl">Stream Media, Locally</h2>
      </div>
      <div role="grid" className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex flex-col col-span-2 gap-6 text-balance">
          <Blockquote fromWho="ChatGPT">
            Tbh, this feels like LAN AirDrop + Discord screenshare + Chromecast
            had a baby
          </Blockquote>
          <p>
            <LocalShare /> is a decentralized media sharing platform that allows
            you to stream your media files real-time locally without relying on
            cloud services. Enjoy seamless media sharing with friends and family
            on the go, all while keeping your data private and secure.
          </p>
          <p>
            <strong className="font-bold uppercase text-destructive">
              This project is in active development.
            </strong>{" "}
            We're plannning on releasing this app for Android and Windows. The
            progress can be seen on{" "}
            <Alink href="https://development.localshare.ir">
              our development tracker board
            </Alink>
            .
          </p>
          <p className="text-sm">
            Note that this app cannot help you with sending/receiving files. We
            recommend using{" "}
            <Alink href="https://localsend.org/">LocalSend</Alink> for that.
          </p>
          <p>Await!</p>
        </div>
        <figure className="flex flex-col items-center gap-2 mx-auto saturate-0">
          <Image
            src="/screenshot-app.jpg"
            width={200}
            height={0}
            alt="Demo screenshot of LocalShare"
            className="border rounded-lg shadow-sm w-fit"
          />
          <figcaption className="text-sm text-center text-ring">
            Demo screenshot of LocalShare
          </figcaption>
        </figure>
      </div>
    </>
  );
}
