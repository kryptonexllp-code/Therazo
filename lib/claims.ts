// Held claims. Each flag stays false until the supporting evidence (test
// report, packaging declaration or manufacturer declaration) is on file.
// Nothing gated here appears anywhere on the site while its flag is false.
export const CLAIMS = {
  dermatologicallyTested: false,
  nonComedogenic: false,
  recyclablePackaging: false,
  crueltyFree: false,
} as const

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
