import { AnimatedBackground } from "@/components/animated-background"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SecurityWrapper } from "@/components/security-wrapper"
import Link from "next/link"
import { ArrowRight, Code2, Shield, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <SecurityWrapper>
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <Navigation />

        <main className="relative z-10 pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-primary text-sm font-medium">The Ultimate Minecraft Client Directory</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Necrohacks
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                Your comprehensive resource for Minecraft hacked clients across Java Edition, Bedrock Edition, and MCPE.
                Stay updated with the latest clients and community announcements.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/java">
                    Browse Java Clients <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
                  <a href="https://discord.gg/uqyVVDRDcX" target="_blank" rel="noopener noreferrer">
                    Join Discord
                  </a>
                </Button>
              </div>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-3 gap-6 mt-16">
                <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Comprehensive Lists</h3>
                  <p className="text-sm text-muted-foreground">
                    Curated collections of clients for Java, Bedrock, and MCPE editions
                  </p>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Regular Updates</h3>
                  <p className="text-sm text-muted-foreground">
                    Stay informed with the latest client releases and important announcements
                  </p>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Community Driven</h3>
                  <p className="text-sm text-muted-foreground">
                    Join our Discord community for support, discussions, and updates
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* Quick Links Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Browse by Platform</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/java">
                  <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary transition-all hover:scale-105 cursor-pointer">
                    <h3 className="font-bold text-2xl mb-2">Java Edition</h3>
                    <p className="text-muted-foreground">Desktop clients for PC</p>
                  </Card>
                </Link>

                <Link href="/bedrock">
                  <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary transition-all hover:scale-105 cursor-pointer">
                    <h3 className="font-bold text-2xl mb-2">Bedrock Edition</h3>
                    <p className="text-muted-foreground">Cross-platform clients</p>
                  </Card>
                </Link>

                <Link href="/mcpe">
                  <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary transition-all hover:scale-105 cursor-pointer">
                    <h3 className="font-bold text-2xl mb-2">MCPE</h3>
                    <p className="text-muted-foreground">Mobile edition clients</p>
                  </Card>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SecurityWrapper>
  )
}
