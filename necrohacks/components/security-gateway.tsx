"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, AlertTriangle, CheckCircle2, Loader2 } from "lucide-react"
import { performSecurityChecks, type SecurityCheckResult } from "@/lib/security"

interface SecurityGatewayProps {
  onComplete: () => void
}

export function SecurityGateway({ onComplete }: SecurityGatewayProps) {
  const [stage, setStage] = useState<"checking" | "captcha" | "failed">("checking")
  const [securityResult, setSecurityResult] = useState<SecurityCheckResult | null>(null)
  const [captchaButtons, setCaptchaButtons] = useState<Array<{ id: number; isRed: boolean; clicked: boolean }>>([])
  const [clickedCount, setClickedCount] = useState(0)
  const [failedCaptcha, setFailedCaptcha] = useState(false)

  // Initialize security checks
  useEffect(() => {
    const runSecurityChecks = async () => {
      const result = await performSecurityChecks()
      setSecurityResult(result)

      if (result.passed) {
        // Move to captcha stage
        setTimeout(() => {
          setStage("captcha")
          initializeCaptcha()
        }, 2000)
      } else {
        setStage("failed")
      }
    }

    runSecurityChecks()
  }, [])

  // Initialize captcha buttons
  const initializeCaptcha = () => {
    const buttons = []
    // Create 6 buttons: 3 safe (green), 3 dangerous (red)
    for (let i = 0; i < 6; i++) {
      buttons.push({
        id: i,
        isRed: i >= 3, // Last 3 are red
        clicked: false,
      })
    }
    // Shuffle the buttons
    setCaptchaButtons(buttons.sort(() => Math.random() - 0.5))
  }

  const handleCaptchaClick = (buttonId: number) => {
    const button = captchaButtons.find((b) => b.id === buttonId)
    if (!button || button.clicked) return

    if (button.isRed) {
      // Clicked a red button - fail
      setFailedCaptcha(true)
      setTimeout(() => {
        setFailedCaptcha(false)
        setClickedCount(0)
        initializeCaptcha()
      }, 2000)
    } else {
      // Clicked a safe button
      const newButtons = captchaButtons.map((b) => (b.id === buttonId ? { ...b, clicked: true } : b))
      setCaptchaButtons(newButtons)

      const newCount = clickedCount + 1
      setClickedCount(newCount)

      if (newCount === 3) {
        // Completed captcha
        setTimeout(() => {
          onComplete()
        }, 1000)
      }
    }
  }

  if (stage === "checking") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="p-8 max-w-md w-full bg-card/80 backdrop-blur border-border/50">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="relative">
              <Shield className="w-16 h-16 text-primary animate-pulse" />
              <Loader2 className="w-8 h-8 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Security Check</h2>
              <p className="text-muted-foreground">Verifying your connection...</p>
            </div>
            <div className="w-full space-y-2 text-sm text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Checking IP address</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Verifying VPN status</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Checking blacklist</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  if (stage === "failed") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="p-8 max-w-md w-full bg-card/80 backdrop-blur border-destructive/50">
          <div className="flex flex-col items-center gap-6 text-center">
            <AlertTriangle className="w-16 h-16 text-destructive" />
            <div>
              <h2 className="text-2xl font-bold mb-2 text-destructive">Access Denied</h2>
              <p className="text-muted-foreground mb-4">{securityResult?.reason || "Security check failed"}</p>
              {securityResult?.ip && <p className="text-xs text-muted-foreground">IP: {securityResult.ip}</p>}
            </div>
          </div>
        </Card>
      </div>
    )
  }

  // Captcha stage
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="p-8 max-w-2xl w-full bg-card/80 backdrop-blur border-border/50">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Verify You're Human</h2>
            <p className="text-muted-foreground mb-4">Click 3 green buttons. Avoid the red ones!</p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`w-3 h-3 rounded-full ${i < clickedCount ? "bg-green-500" : "bg-muted"}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{clickedCount}/3</span>
            </div>
          </div>

          {failedCaptcha && (
            <div className="text-destructive text-sm font-medium animate-pulse">Wrong button! Try again...</div>
          )}

          <div className="grid grid-cols-3 gap-4 w-full">
            {captchaButtons.map((button) => (
              <Button
                key={button.id}
                onClick={() => handleCaptchaClick(button.id)}
                disabled={button.clicked}
                className={`h-24 text-lg font-bold transition-all ${
                  button.clicked
                    ? "bg-green-500 hover:bg-green-500"
                    : button.isRed
                      ? "bg-red-500/20 hover:bg-red-500/30 border-red-500/50"
                      : "bg-primary/20 hover:bg-primary/30 border-primary/50"
                }`}
                variant="outline"
              >
                {button.clicked ? "✓" : "Click"}
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
