import Image from "next/image";
import TopBar from "@/components/blocks/TopBar";
import P from "@/components/Paragraph";
import Footer from "@/components/blocks/Footer";

export default function Home() {
  return (
    <main className="min-h-dvh p-8 sm:p-14 md:p-16">
      <section className="w-240 max-w-[calc(100%)] mx-auto my-0 border border-border rounded-2xl">
        <TopBar />
        <div className="flex flex-col items-center justify-center gap-2 p-8">
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
        <div>
          <P className="text-muted-foreground">
            "Tbh, this feels like LAN AirDrop + Discord screenshare + Chromecast
            had a baby 😂"
          </P>
          <P>
            LocalShare is a decentralized media sharing platform that allows you
            to stream your media files real-time locally without relying on
            cloud services. Enjoy seamless media sharing with friends and family
            on the go, all while keeping your data private and secure.
          </P>
          {/* <blockquote className="outline-l-2 outline-border">
            <P>
              <span>Note:</span> This software cannot help you with sending
              files. We recommend using{" "}
              <Link href="https://localsend.org/">localSend</Link> for that.
            </P>
          </blockquote> */}
          <P>
            This project is currently in development. We're plannning on
            releasing this app on Android and Windows. Stay tuned!
          </P>
        </div>
        <Footer />
      </section>
    </main>
  );
}
