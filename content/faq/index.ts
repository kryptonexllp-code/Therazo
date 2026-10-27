import type { FaqItem } from './types'
import { DAILY_SHIELD_FAQ } from './daily-shield'
import { GENTLE_CLEANSER_FAQ } from './gentle-cleanser'
import { AGE_RENEWAL_FAQ } from './age-renewal'
import { BARRIER_REPAIR_FAQ } from './barrier-repair'
import { CLARITY_SERUM_FAQ } from './clarity-serum'

// FAQs by product id (lib/products.ts).
export const PRODUCT_FAQ: Record<string, FaqItem[]> = {
  'daily-shield': DAILY_SHIELD_FAQ,
  'gentle-cleanser': GENTLE_CLEANSER_FAQ,
  'age-renewal': AGE_RENEWAL_FAQ,
  'barrier-repair': BARRIER_REPAIR_FAQ,
  'clarity-serum': CLARITY_SERUM_FAQ,
}

export type { FaqItem }
