import Link from 'next/link'
import { PRODUCT_FAQ, type FaqItem } from '@/content/faq'

// Questions without an answer yet are shown, marked TODO, only in development.
const SHOW_TODOS = process.env.NODE_ENV === 'development'

function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

// Product FAQ accordion plus FAQPage structured data from the same content
// (content/faq/<product>.ts). Native <details>/<summary>, so it opens and
// closes from the keyboard (Tab, then Enter or Space).
export default function ProductFaq({ productId, name }: { productId: string; name: string }) {
  const all = PRODUCT_FAQ[productId] ?? []
  const answered = all.filter((item) => item.answer)
  const shown = SHOW_TODOS ? all : answered
  if (!shown.length) return null

  return (
    <section id="faq" className="bg-lgrey px-6 md:px-20 py-16 md:py-20 scroll-mt-24">
      {answered.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(answered)) }}
        />
      )}
      <div className="max-w-3xl mx-auto">
        <h2 className="font-bold text-navy text-[26px] mb-2">Questions about {name}</h2>
        <p className="text-mgrey text-[14px] mb-8">Straight answers. Where we don&apos;t know yet, we say so.</p>
        <div className="border-t border-cardline">
          {shown.map((item) => (
            <details key={item.question} className="group border-b border-cardline">
              <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy">
                <span className="font-medium text-navy text-[15px]">{item.question}</span>
                <span aria-hidden="true" className="relative h-3 w-3 shrink-0">
                  <span className="absolute left-0 top-1/2 h-px w-3 bg-navy" />
                  <span className="absolute left-1/2 top-0 h-3 w-px bg-navy group-open:hidden" />
                </span>
              </summary>
              <div className="pb-5 pr-7 text-dgrey text-[14px] leading-[1.7]">
                {item.answer ? (
                  <p>
                    {item.answer}
                    {item.link && (
                      <>
                        {' '}
                        <Link href={item.link.href} className="text-navy font-medium underline underline-offset-4">
                          {item.link.label} →
                        </Link>
                      </>
                    )}
                  </p>
                ) : (
                  <p className="border border-dashed border-red-700 text-red-700 p-3 text-[13px]">
                    TODO (development only): {item.todo ?? 'answer needed'}
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
