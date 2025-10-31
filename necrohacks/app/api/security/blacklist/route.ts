import { NextResponse } from "next/server"
import blacklist from "@/lib/blacklist.json"

export async function GET() {
  return NextResponse.json(blacklist)
}
