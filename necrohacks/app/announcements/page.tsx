import { AnimatedBackground } from "@/components/animated-background"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SecurityWrapper } from "@/components/security-wrapper"
import { AlertTriangle } from "lucide-react"

export default function AnnouncementsPage() {
  return (
    <SecurityWrapper>
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <Navigation />

        <main className="relative z-10 pt-16">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Announcements</h1>
                <p className="text-lg text-muted-foreground">
                  Stay updated with the latest news and important information
                </p>
              </div>

              {/* Announcement Card */}
              <Card className="p-8 bg-card/50 backdrop-blur border-border/50 mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold">Minecraft 1.21.120 Update - Important Security Notice</h2>
                    </div>
                    <Badge variant="outline" className="mb-4">
                      October 29, 2025
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Minecraft has updated to version <strong className="text-foreground">1.21.120</strong>. This is a
                    significant update that changes the underlying architecture from UWP (Universal Windows Platform) to
                    GDK (Game Development Kit).
                  </p>

                  <div className="bg-secondary/50 border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">What's the difference between UWP and GDK?</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        <strong className="text-foreground">UWP</strong> was a sandboxed environment with restricted
                        file system access and limited permissions, providing better security but less flexibility for
                        modifications.
                      </li>
                      <li>
                        <strong className="text-foreground">GDK</strong> offers more direct access to system resources
                        and files, giving developers greater freedom but also opening up potential security
                        vulnerabilities.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <h3 className="font-semibold text-destructive mb-2">⚠️ Critical Information</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Existing hacked clients will NOT work</strong> with
                          version 1.21.120 and won't even load into the game due to the architectural changes.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Malware risk has significantly increased.</strong> GDK's
                          greater file system access means malicious clients can potentially cause more damage to your
                          system.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Exercise extreme caution</strong> when downloading new
                          1.21.120-compatible clients. Only download from trusted sources and verify files before
                          running them.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-foreground font-medium">
                    We recommend waiting for established, trusted client developers to release verified 1.21.120
                    versions before updating. Join our Discord for real-time updates on safe client releases.
                  </p>
                </div>
              </Card>

              {/* Placeholder for future announcements */}
              <div className="text-center py-12 text-muted-foreground">
                <p>More announcements coming soon. Check back regularly or join our Discord for instant updates.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SecurityWrapper>
  )
}
