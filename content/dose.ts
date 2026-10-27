// Dose wording for Daily Shield: the product page, /dose-guide (the carton QR
// target) and the dose calculator.

export const DOSE_LINE = 'SPF is tested with two finger-lengths of cream. Most people use half.'

export const DOSE_ILLUSTRATIONS = {
  usual: {
    eyebrow: 'What most people use',
    title: 'About one finger-length',
    note: 'Roughly half the tested amount',
    alt: 'Cream along one finger: the amount most people use',
  },
  tested: {
    eyebrow: 'What SPF is tested with',
    title: 'Two finger-lengths',
    note: 'For face and neck',
    alt: 'Cream along two fingers: the amount SPF is tested with',
  },
}

export const TEST_DOSE = {
  amount: '2 mg',
  unit: '/cm²',
  title: 'The test dose, in plain language',
  body: [
    'The SPF and PA numbers on any pack are set in testing with 2 mg of product on every square centimetre of skin. That is a thicker layer than most people apply.',
    'For the face and neck, 2 mg/cm² works out to about two finger-lengths. Apply less and you get less protection than the number on the pack: the number describes protection at the tested amount.',
  ],
}

export const APPLY_STEPS = [
  { title: 'Measure', text: 'Squeeze a line of Daily Shield along the full length of your index and middle fingers.' },
  { title: 'Dot', text: 'Dot it over forehead, cheeks, nose, chin and neck.' },
  {
    title: 'Spread',
    text: 'Spread evenly as the last step of your morning routine, 15–20 minutes before sun exposure. Do not rub most of it back off.',
  },
]

export const REAPPLY = {
  eyebrow: 'Reapply',
  title: 'Every 2 hours outdoors',
  text: 'When you are outdoors, reapply every 2 hours, and again after swimming, heavy sweating or towel drying.',
}

export const DOSE_REFERENCES = ['[REFERENCES TO BE ADDED]']

// Dose calculator (/dose-calculator), live only when calculatorEnabled is true
// in lib/claims.ts. Finger-length guidance per area; null means the product
// team has not supplied it yet, and the calculator shows nothing for it.
export const CALCULATOR_AREAS = [
  { id: 'face', label: 'Face only', guidance: null as string | null },
  { id: 'face-neck', label: 'Face and neck', guidance: 'Two finger-lengths' as string | null },
]

// Days a 50 ml tube lasts at the full daily dose. Stays null — and the
// "this tube lasts about X days" line stays hidden — until the product team
// has run a weigh test and supplied the number. Do not estimate it.
export const TUBE_LIFE_DAYS: number | null = null
