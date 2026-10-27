// Held claims. Each flag stays false until the supporting evidence (test
// report, packaging declaration or manufacturer declaration) is on file.
// Nothing gated here appears anywhere on the site while its flag is false.
export const CLAIMS = {
  dermatologicallyTested: false,
  nonComedogenic: false,
  recyclablePackaging: false,
  crueltyFree: false,
} as const

// /dose-calculator stays off (the route returns 404) until the product team
// has confirmed the finger-length guidance and run a tube weigh test
// (content/dose.ts). No tube-life figure appears anywhere until then.
export const calculatorEnabled = false

export type HeldClaim = keyof typeof CLAIMS

// Wording used once a flag is switched on.
const LABELS: Record<HeldClaim, string> = {
  dermatologicallyTested: 'Dermatologically tested',
  nonComedogenic: 'Non-comedogenic',
  recyclablePackaging: 'Recyclable packaging',
  crueltyFree: 'Cruelty-free',
}

export function claimLabel(claim: HeldClaim) {
  return LABELS[claim]
}

// Returns labels only for claims whose evidence is on file.
export function activeClaims(claims: readonly HeldClaim[]) {
  return claims.filter((c) => CLAIMS[c]).map((c) => LABELS[c])
}
