import { AnimatedBackground } from "@/components/animated-background"
import { Navigation } from "@/components/navigation"
import { ClientCard } from "@/components/client-card"
import { SecurityWrapper } from "@/components/security-wrapper"
import { bedrockTopClients, bedrockAllClients } from "@/lib/clients"

export default function BedrockPage() {
  return (
    <SecurityWrapper>
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <Navigation />

        <main className="relative z-10 pt-16">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Bedrock Edition Clients</h1>
                <p className="text-lg text-muted-foreground">Explore hacked clients for Minecraft Bedrock Edition</p>
              </div>

              {/* Top 3 Section */}
              <section className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-primary rounded-full" />
                  <h2 className="text-2xl font-bold">Top 3 Minecraft Bedrock Hacked Clients</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {bedrockTopClients.map((client) => (
                    <ClientCard key={client.name} {...client} featured />
                  ))}
                </div>
              </section>

              {/* All Clients Section */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-accent rounded-full" />
                  <h2 className="text-2xl font-bold">All Bedrock Clients</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bedrockAllClients.map((client) => (
                    <ClientCard key={client.name} {...client} />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </SecurityWrapper>
  )
}
