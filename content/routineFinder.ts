// Routine Finder (/find-your-routine). A plain lookup table: one routine for
// every skin type × focus pair. No scoring, no AI, no skin-condition language.
// Product ids come from lib/products.ts; each list is in the order of use.

export const SKIN_TYPES = [
  { id: 'normal', label: 'Normal' },
  { id: 'oily', label: 'Oily' },
  { id: 'dry', label: 'Dry' },
  { id: 'combination', label: 'Combination' },
  { id: 'sensitive', label: 'Sensitive' },
] as const

export const FOCUSES = [
  { id: 'sun', label: 'Daily sun protection' },
  { id: 'cleansing', label: 'Cleansing' },
  { id: 'dryness', label: 'Dryness and comfort' },
  { id: 'tone', label: 'Evenness of tone' },
  { id: 'ageing', label: 'Visible signs of ageing' },
] as const

export type SkinTypeId = (typeof SKIN_TYPES)[number]['id']
export type FocusId = (typeof FOCUSES)[number]['id']
export type Routine = { am: string[]; pm: string[] }

const CLEANSER = 'gentle-cleanser'
const SHIELD = 'daily-shield'
const RENEWAL = 'age-renewal'
const BARRIER = 'barrier-repair'
const CLARITY = 'clarity-serum'

// Every morning ends with Daily Shield.
const AM = [CLEANSER, SHIELD]

export const ROUTINE_TABLE: Record<FocusId, Record<SkinTypeId, Routine>> = {
  sun: {
    normal: { am: AM, pm: [CLEANSER] },
    oily: { am: AM, pm: [CLEANSER] },
    dry: { am: AM, pm: [CLEANSER, BARRIER] },
    combination: { am: AM, pm: [CLEANSER] },
    sensitive: { am: AM, pm: [CLEANSER, BARRIER] },
  },
  cleansing: {
    normal: { am: AM, pm: [CLEANSER] },
    oily: { am: AM, pm: [CLEANSER] },
    dry: { am: AM, pm: [CLEANSER, BARRIER] },
    combination: { am: AM, pm: [CLEANSER] },
    sensitive: { am: AM, pm: [CLEANSER, BARRIER] },
  },
  dryness: {
    normal: { am: AM, pm: [CLEANSER, BARRIER] },
    oily: { am: AM, pm: [CLEANSER, BARRIER] },
    dry: { am: AM, pm: [CLEANSER, BARRIER] },
    combination: { am: AM, pm: [CLEANSER, BARRIER] },
    sensitive: { am: AM, pm: [CLEANSER, BARRIER] },
  },
  tone: {
    normal: { am: AM, pm: [CLEANSER, CLARITY] },
    oily: { am: AM, pm: [CLEANSER, CLARITY] },
    dry: { am: AM, pm: [CLEANSER, CLARITY, BARRIER] },
    combination: { am: AM, pm: [CLEANSER, CLARITY] },
    sensitive: { am: AM, pm: [CLEANSER, CLARITY, BARRIER] },
  },
  ageing: {
    normal: { am: AM, pm: [CLEANSER, RENEWAL] },
    oily: { am: AM, pm: [CLEANSER, RENEWAL] },
    dry: { am: AM, pm: [CLEANSER, RENEWAL, BARRIER] },
    combination: { am: AM, pm: [CLEANSER, RENEWAL] },
    sensitive: { am: AM, pm: [CLEANSER, RENEWAL, BARRIER] },
  },
}

export const FINDER_COPY = {
  title: 'Find your routine',
  intro: 'Two questions. We will put together a morning and evening routine from the Therazo range.',
  skinTypeLabel: 'Skin type',
  focusLabel: 'What matters most',
  choose: 'Choose…',
  morning: 'Morning',
  evening: 'Evening',
  resultHeading: 'Your routine',
  prompt: 'Choose both to see your routine.',
  status: {
    'launching-soon': 'Launching soon, join waitlist',
    'coming-soon': 'Coming soon, join waitlist',
  },
  disclaimer:
    'This is general guidance, not medical advice. If you have a skin condition, speak to a doctor or pharmacist.',
  waitlistHeading: 'Get this routine when it launches',
  waitlistIntro: 'We will save your routine with your sign-up and tell you as each product launches.',
}
