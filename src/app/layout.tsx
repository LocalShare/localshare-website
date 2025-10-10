import type { Metadata } from "next";
import localFont from "next/font/local";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const sfpro = localFont({
  src: "./SF-Pro.ttf",
  display: "swap",
  style: "normal",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LocalShare",
  description:
    "Share Media, Locally. Decentralized and Free For All. Easy-to-use On The Go.",
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
        <body className={`${sfpro.className} antialiased select-none`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
