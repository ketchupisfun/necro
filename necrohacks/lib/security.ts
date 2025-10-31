// Security utilities for IP checking, VPN detection, and blacklist

export interface SecurityCheckResult {
  passed: boolean
  reason?: string
  ip?: string
}

// Check if IP is blacklisted
export async function checkBlacklist(ip: string): Promise<boolean> {
  try {
    const response = await fetch("/api/security/blacklist")
    const data = await response.json()
    return data.blacklistedIPs.includes(ip)
  } catch (error) {
    console.error("[Necro] Blacklist check failed:", error)
    return false
  }
}

// Get user's IP address
export async function getUserIP(): Promise<string> {
  try {
    const response = await fetch("https://api.ipify.org?format=json")
    const data = await response.json()
    return data.ip
  } catch (error) {
    console.error("[Necro] Failed to get IP:", error)
    return "unknown"
  }
}

// Check if IP is using VPN (using IPHub free tier)
export async function checkVPN(ip: string): Promise<boolean> {
  try {
    // Using a free VPN detection API
    const response = await fetch(`https://vpnapi.io/api/${ip}?key=free`)
    const data = await response.json()

    // Check if VPN/proxy is detected
    return data.security?.vpn === true || data.security?.proxy === true
  } catch (error) {
    console.error("[Necro] VPN check failed:", error)
    // If check fails, allow access (fail open)
    return false
  }
}

// Perform all security checks
export async function performSecurityChecks(): Promise<SecurityCheckResult> {
  try {
    // Get user IP
    const ip = await getUserIP()

    // Check blacklist
    const isBlacklisted = await checkBlacklist(ip)
    if (isBlacklisted) {
      return {
        passed: false,
        reason: "Your IP address has been blacklisted",
        ip,
      }
    }

    // Check VPN
    const isVPN = await checkVPN(ip)
    if (isVPN) {
      return {
        passed: false,
        reason: "VPN or proxy detected. Please disable it to access the site",
        ip,
      }
    }

    return {
      passed: true,
      ip,
    }
  } catch (error) {
    console.error("[Necro] Security checks failed:", error)
    // If checks fail, allow access (fail open)
    return { passed: true }
  }
}
