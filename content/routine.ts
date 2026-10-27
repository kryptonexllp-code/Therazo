// The Therazo routine, in order. Shared by /routine, /products and the
// customer portal. Clarity Serum and Age Renewal Night Serum are both
// evening serums; Daily Shield is always the last morning step.
export const MORNING_STEPS = [
  { id: 'gentle-cleanser', step: 'Cleanse' },
  { id: 'daily-shield', step: 'Protect' },
]

export const NIGHT_STEPS = [
  { id: 'gentle-cleanser', step: 'Cleanse' },
  { id: 'clarity-serum', step: 'Treat' },
  { id: 'age-renewal', step: 'Renew' },
  { id: 'barrier-repair', step: 'Repair' },
]

export const ROUTINE_SUMMARY = 'Morning: Cleanse → Protect. Night: Cleanse → Treat or Renew → Repair.'
export const ROUTINE_SUMMARY_SKUS =
  'Morning: Cleanse (02) → Protect (01) · Night: Cleanse (02) → Treat (05) or Renew (03) → Repair (04)'
export const NIGHT_SERUM_NOTE = 'Treat and Renew are both evening serums — use the one that fits your focus.'
