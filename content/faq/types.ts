export type FaqItem = {
  question: string
  // null when the answer needs facts we do not have yet. Such questions show
  // as a TODO in development and are left out of production pages and JSON-LD.
  answer: string | null
  todo?: string
  link?: { href: string; label: string }
}
