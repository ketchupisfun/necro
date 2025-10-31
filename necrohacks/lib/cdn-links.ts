// CDN configuration for client downloads
// Maps client names to their download URLs

export interface CDNEntry {
  url: string
  host: "cloudflare" | "gofile"
}

// Helper function to normalize client names for URLs
export function normalizeClientName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-")
}

// CDN mappings - add new clients here
export const cdnLinks: Record<string, CDNEntry> = {
  // Java Clients
  "doomsday-client": { url: "https://gofile.io/d/Ei01rl", host: "gofile" },
  "liquidbounce": { url: "https://gofile.io/d/QRoRty", host: "gofile" },
  "meteor": { url: "https://gofile.io/d/vACFUB", host: "gofile" },
  "baritone": { url: "https://gofile.io/d/3elYle", host: "gofile" },

  // Bedrock Clients
  "horion-client": { url: "https://gofile.io/d/CF8jIA", host: "gofile" },
  "metro-proxy": { url: "https://gofile.io/d/CF8jIA", host: "gofile" },
  "boost-v3": { url: "https://gofile.io/d/CF8jIA", host: "gofile" },
  "solstice": { url: "https://gofile.io/d/CF8jIA", host: "gofile" },
  "vortexpulse": { url: "https://gofile.io/d/CF8jIA", host: "gofile" },

  // MCPE Clients
  "apollon-client": { url: "https://gofile.io/d/YC4f1k", host: "gofile" },
  "saber-proxy": { url: "https://gofile.io/d/YC4f1k", host: "gofile" },
  "lumina": { url: "https://gofile.io/d/YC4f1k", host: "gofile" },
  "atlas": { url: "https://gofile.io/d/YC4f1k", host: "gofile" },
}
