import { type NextRequest, NextResponse } from "next/server"
import { cdnLinks } from "@/lib/cdn-links"

export async function GET(request: NextRequest, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params

  // Remove .dll extension if present
  const clientName = file.replace(/\.dll$/, "")

  // Check if client exists in CDN links
  const downloadUrl = cdnLinks[clientName]

  if (!downloadUrl) {
    return NextResponse.json({ error: "Client not found" }, { status: 404 })
  }

  // Redirect to the Gofile URL
  return NextResponse.redirect(downloadUrl)
}
