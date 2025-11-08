import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const isAdvanced = params.has("advanced");
  if (isAdvanced)
    return NextResponse.json({
      status: "ok",
      data: {
        core: {
          version: "0.0.0",
          date: "11/8/2025",
        },
        android: {
          version: "0.0.0",
          date: "11/8/2025",
        },
        windows: {
          version: "0.0.0",
          date: "11/8/2025",
        },
      },
    });
  return NextResponse.json({
    status: "ok",
    data: { version: "0.0.0", date: "11/8/2025" },
  });
}
