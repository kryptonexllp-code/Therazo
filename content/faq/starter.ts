import type { FaqItem } from './types'

const PATCH_TEST =
  'We recommend a patch test before first use. If irritation develops, stop using it and consult a healthcare professional.'

// Starter questions for SKUs that are not launched yet: usage, timing,
// patch test and availability. Fill the null answers once the product team
// confirms them.
export function starterFaq(name: string, timing: string): FaqItem[] {
  return [
    { question: 'When do I use it?', answer: timing },
    { question: 'How much should I use?', answer: null, todo: '[TO BE CONFIRMED by the product team]' },
    { question: 'Should I patch test first?', answer: PATCH_TEST },
    {
      question: 'When can I buy it?',
      answer: `${name} is coming soon. Join the waitlist and we'll tell you first.`,
      link: { href: '#waitlist', label: 'Join the waitlist' },
    },
  ]
}
