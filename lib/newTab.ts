"use client";

import { NewTabOptions } from "./newTab.types";

export default function newTab(
  href: string,
  { rel, download, type, hreflang, referrerpolicy }: NewTabOptions = {},
): void {
  if (!href || href === "" || !String(href)) throw new Error("");

  if (typeof document === "undefined")
    throw new Error("newtab.js can only run in a browser environment");

  const a = document.createElement("a");
  a.setAttribute("href", href);
  a.setAttribute("target", "_blank");

  rel && a.setAttribute("rel", rel ?? "");
  download?.enable && a.setAttribute("download", download.filename ?? "");
  type && a.setAttribute("type", type ?? "");
  hreflang && a.setAttribute("hreflang", hreflang ?? "");
  referrerpolicy && a.setAttribute("referrerpolicy", referrerpolicy ?? "");

  a.click();
  a.remove();
}
