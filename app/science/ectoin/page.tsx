import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import IngredientProducts from '@/components/IngredientProducts'
import { ECTOIN_PAGE } from '@/content/ingredients/ectoin'

export const metadata: Metadata = {
  title: 'Ectoin — the extremolyte',
  description: 'What Ectoin is, where it works in the skin, and which Therazo products contain it.',
}

export default function EctoinPage() {
  return (
    <>
      <section className="bg-navy px-6 md:px-20 pt-32 pb-14">
        <SectionLabel dark>The Science · Ingredients</SectionLabel>
        <h1 className="font-extrabold text-white text-[40px] sm:text-[56px] leading-[1.02] mb-2">{ECTOIN_PAGE.title}</h1>
        <p className="italic text-bluemuted text-[18px] mb-5">{ECTOIN_PAGE.subtitle}</p>
        <p className="text-bluelight text-[16px] max-w-xl">{ECTOIN_PAGE.intro}</p>
      </section>
      <section className="bg-white px-6 md:px-20 py-14 md:py-20">
        <div className="max-w-3xl">
          {ECTOIN_PAGE.sections.map((s) => (
            <div key={s.heading} className="mb-10">
              <h2 className="font-bold text-navy text-[20px] mb-3">{s.heading}</h2>
              {s.body.map((para) => (
                <p key={para} className="text-dgrey text-[15px] leading-[1.75] mb-3 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          ))}
          <h2 className="font-bold text-navy text-[20px] mb-4">{ECTOIN_PAGE.productsHeading}</h2>
          <IngredientProducts match="Ectoin" pendingNote={ECTOIN_PAGE.pendingNote} />
          <h2 className="font-bold text-navy text-[18px] mt-12 mb-3">References</h2>
          <ol className="list-decimal pl-5 text-mgrey text-[13px] leading-[1.8]">
            {ECTOIN_PAGE.references.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ol>
          <p className="mt-10">
            <Link href="/science" className="text-navy text-[13px] font-medium underline underline-offset-4">
              ← Back to The Science
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
