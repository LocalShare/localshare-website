"use client";

import { useEffect } from "react";
import disableDevtool from "disable-devtool";

export default function DisableDevtool() {
  if (!disableDevtool || typeof disableDevtool === "undefined")
    throw new Error("d-d package not found");
  else {
    useEffect(() => {
      disableDevtool();
    }, []);

    return null;
  }
}
