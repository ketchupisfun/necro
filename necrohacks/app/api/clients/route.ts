import { type NextRequest, NextResponse } from "next/server"
import {
  javaTopClients,
  javaAllClients,
  bedrockTopClients,
  bedrockAllClients,
  mcpeTopClients,
  mcpeAllClients,
} from "@/lib/clients"

// API to get all clients for a specific platform
// Usage: /api/clients?platform=java or /api/clients?platform=bedrock or /api/clients?platform=mcpe
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const platform = searchParams.get("platform")?.toLowerCase()

  if (!platform) {
    return NextResponse.json(
      {
        error: "Platform parameter is required",
        usage: "Use ?platform=java or ?platform=bedrock or ?platform=mcpe",
      },
      { status: 400 },
    )
  }

  let topClients, allClients

  switch (platform) {
    case "java":
    case "minecraft-java":
      topClients = javaTopClients
      allClients = javaAllClients
      break
    case "bedrock":
    case "mcbe":
      topClients = bedrockTopClients
      allClients = bedrockAllClients
      break
    case "mcpe":
    case "pocket":
      topClients = mcpeTopClients
      allClients = mcpeAllClients
      break
    default:
      return NextResponse.json(
        {
          error: "Invalid platform",
          validPlatforms: ["java", "bedrock", "mcpe"],
        },
        { status: 400 },
      )
  }

  return NextResponse.json({
    platform,
    topClients,
    allClients,
    total: topClients.length + allClients.length,
  })
}
