import Alink from "@/components/Alink";
import Blockquote from "@/components/Blockquote";
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
      <div role="grid" className="grid grid-cols-3 gap-x-4">
        <div className="flex flex-col col-span-2 gap-6 text-balance">
          <Blockquote>
            Tbh, this feels like LAN AirDrop + Discord screenshare + Chromecast
            had a baby
          </Blockquote>
          <p>
            LocalShare is a decentralized media sharing platform that allows you
            to stream your media files real-time locally without relying on
            cloud services. Enjoy seamless media sharing with friends and family
            on the go, all while keeping your data private and secure.
          </p>
          <p>
            Note that this app cannot help you with sending/receiving files. We
            recommend using{" "}
            <Alink href="https://localsend.org/">LocalSend</Alink> for that.
          </p>
          <p>
            <span className="font-bold uppercase text-localshare-blue">
              This project is in active development.
            </span>{" "}
            We're plannning on releasing this app on Android and Windows. The
            progress can be seen on{" "}
            <Alink href="https://github.com/orgs/LocalShare/projects/2">
              our development tracker board
            </Alink>
            .
          </p>
          <p>Await!</p>
        </div>
        <Image
          src="/screenshot-app.jpg"
          width={150}
          height={0}
          alt="A demo screenshot of LocalShare"
          className="border rounded-lg w-fit"
        />
      </div>
    </>
  );
}
