"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { SecurityGateway } from "./security-gateway"

export function SecurityWrapper({ children }: { children: React.ReactNode }) {
  const [hasAccess, setHasAccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has already passed security
    const accessGranted = sessionStorage.getItem("necro_access_granted")
    if (accessGranted === "true") {
      setHasAccess(true)
    }
    setIsLoading(false)
  }, [])

  const handleSecurityComplete = () => {
    sessionStorage.setItem("necro_access_granted", "true")
    setHasAccess(true)
  }

  if (isLoading) {
    return null
  }

  if (!hasAccess) {
    return <SecurityGateway onComplete={handleSecurityComplete} />
  }

  return <>{children}</>
}
