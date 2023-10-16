/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { type NextRequest, NextResponse } from "next/server";
export function GET(request: NextRequest) {
  const message = "Test";
  return new Response(message);
}
