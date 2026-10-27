// SPF test documentation for Daily Shield. Leave status 'not-published' until
// the report is on file. Never describe testing as "in progress", "in a
// laboratory" or "before shipping" — none of that is stated until it is true.
export type SpfDocs =
  | { status: 'not-published' }
  | {
      status: 'published'
      title: string
      laboratory: string
      standard: string
      date: string
      pdf: string // path under /public, e.g. /docs/daily-shield-spf-report.pdf
    }

export const SPF_DOCS: SpfDocs = { status: 'not-published' }

export const SPF_DOCS_COPY = {
  heading: 'Test documentation',
  notPublished: 'SPF test documentation will be published here when it is available.',
  faqNotPublished: 'Test documentation will be published on this page when it is available.',
  faqPublished: 'The SPF test report is published on this page, under Test documentation.',
}
