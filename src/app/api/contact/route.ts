import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log("[contact] submission", data);
  return NextResponse.json({ ok: true });
}
