import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import DisableDevtool from "@/lib/DisableDevtool";
import { ThemeProvider } from "@/components/theme-provider";
import TopBar from "@/components/blocks/TopBar";
import Footer from "@/components/blocks/Footer";

import "./globals.css";

const inter = Inter();

export const metadata: Metadata = {
  title: "LocalShare",
  description:
    "Share Media, Locally. Decentralized and Free For All. Easy-to-use On The Go.",
  authors: {
    name: "LocalShare Team",
    url: "https://github.com/localshare",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${inter.className} antialiased select-none`}>
          {process.env.NODE_ENV === "development" ? null : <DisableDevtool />}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="p-8 min-h-dvh sm:p-14 md:p-16">
              <section className="w-240 max-w-[calc(100%)] mx-auto my-0 border border-border rounded-2xl overflow-hidden">
                <TopBar />
                <div className="flex flex-col gap-6 p-8">{children}</div>
                <Footer />
              </section>
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
