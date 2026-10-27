import type { FaqItem } from './types'
import { SPF_DOCS, SPF_DOCS_COPY } from '../spfDocs'

export const DAILY_SHIELD_FAQ: FaqItem[] = [
  {
    question: 'How much should I apply?',
    answer: 'Two finger-lengths for face and neck, every morning.',
    link: { href: '/dose-guide', label: 'See the dose guide' },
  },
  {
    question: 'When do I apply it in my routine?',
    answer: 'Last step of the morning routine, 15–20 minutes before sun exposure.',
  },
  {
    question: 'How often do I reapply?',
    answer: 'Every 2 hours outdoors, and after swimming, heavy sweating or towel drying.',
  },
  {
    question: 'Can I use it under makeup?',
    answer: null,
    todo: '[TO BE CONFIRMED after real-use testing]',
  },
  {
    question: 'Does it leave a white cast?',
    answer: null,
    todo: '[TO BE CONFIRMED after real-use testing on a range of skin tones]',
  },
  {
    question: 'It says synthetic fragrance-free, so why does it smell?',
    answer:
      'Daily Shield has no synthetic fragrance. It contains Rosa Damascena flower extract, a natural botanical with a mild scent.',
    link: { href: '#fragrance-disclosure', label: 'Read the fragrance disclosure' },
  },
  {
    question: 'Is it suitable for sensitive skin?',
    answer:
      'We recommend a patch test before first use. If irritation develops, stop using it and consult a healthcare professional.',
  },
  {
    question: 'Where can I buy it, and when?',
    answer: "Daily Shield is launching soon. Join the waitlist and we'll tell you first.",
    link: { href: '#waitlist', label: 'Join the waitlist' },
  },
  {
    question: 'Where is the SPF test documentation?',
    answer: SPF_DOCS.status === 'published' ? SPF_DOCS_COPY.faqPublished : SPF_DOCS_COPY.faqNotPublished,
    link: SPF_DOCS.status === 'published' ? { href: '#test-documentation', label: 'Go to test documentation' } : undefined,
  },
]
