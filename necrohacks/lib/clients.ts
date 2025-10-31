// This file makes it easy to add new clients to the lists
// Simply add new entries to the arrays below

export interface Client {
  name: string
  version: string
  description?: string
}

// Java Edition Clients
export const javaTopClients: Client[] = [
  { name: "Doomsday Client", version: "1.8.9 - 1.21.8", description: "Ghost Client" },
  { name: "LiquidBounce", version: "1.21.4" description: "Also Ghost" },
  { name: "Meteor", version: "1.21.10", description: "Blatant idfk" },
]

export const javaAllClients: Client[] = [
  { name: "Baritone", version: "1.21.x" },
]

// Bedrock Edition Clients
export const bedrockTopClients: Client[] = [
  { name: "Horion Client", version: "1.21.10x", description: "SLAYYY QUEEN" },
  { name: "Metro Proxy", version: "1.21.x", description: "Just like the best but paid." },
  { name: "Boost V3", version: "1.21.94", description: "One of the best, tries to win against metro (doesnt win). Paid too." },
]

export const bedrockAllClients: Client[] = [
  { name: "Solstice", version: "1.21.11x" },
  { name: "VortexPulse", version: "1.21.9X" },
]

// MCPE Clients
export const mcpeTopClients: Client[] = [
  { name: "Apollon Client", version: "1.21.x", description: "We love this one." },
  { name: "Saber Proxy", version: "1.21.11x", description: "A free proxy, but on beta." },
  { name: "Lumina", version: "1.21.x", description: "Not the best but its good i guess..." },
]

export const mcpeAllClients: Client[] = [
  { name: "Atlas", version: "1.21.70" },
]
