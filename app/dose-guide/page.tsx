import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import WaitlistButton from '@/components/WaitlistButton'
import DoseIllustrations from '@/components/DoseIllustrations'
import { APPLY_STEPS, DOSE_LINE, DOSE_REFERENCES, REAPPLY, TEST_DOSE } from '@/content/dose'

// Target of the QR code printed on the Daily Shield carton.
// Keep this URL (/dose-guide) stable — do not rename or move the route.
// No tube-life figure here until the dose calculator is switched on (lib/claims.ts).
export const metadata: Metadata = {
  title: 'Two finger-lengths',
  description:
    'SPF is tested with two finger-lengths of cream for the face and neck. Most people use half. How much Daily Shield to apply, and when to reapply.',
}

export default function DoseGuidePage() {
  return (
    <>
      <section className="bg-navy px-6 md:px-20 pt-32 pb-16">
        <SectionLabel dark>Dose Guide · Daily Shield</SectionLabel>
        <h1 className="font-extrabold text-white text-[40px] sm:text-[56px] leading-[1.02] mb-6">
          Two finger-lengths
        </h1>
        <p className="text-bluelight text-[17px] leading-[1.7] max-w-xl">{DOSE_LINE}</p>
      </section>

      {/* ILLUSTRATIONS */}
      <section className="bg-white px-6 md:px-20 py-16 md:py-20">
        <DoseIllustrations size="large" />
      </section>

      {/* THE TEST DOSE */}
      <section className="bg-lgrey px-6 md:px-20 py-16 md:py-20">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
          <p className="font-extrabold text-navy text-[44px] leading-none">
            {TEST_DOSE.amount}
            <span className="text-[22px]">{TEST_DOSE.unit}</span>
          </p>
          <div>
            <h2 className="font-bold text-navy text-[22px] mb-3">{TEST_DOSE.title}</h2>
            {TEST_DOSE.body.map((para) => (
              <p key={para} className="text-dgrey text-[15px] leading-[1.75] mb-3 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section className="bg-white px-6 md:px-20 py-16 md:py-20">
        <h2 className="text-center font-bold text-navy text-[26px] mb-12">How to apply</h2>
        <ol className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          {APPLY_STEPS.map((s, i) => (
            <li key={s.title}>
              <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold text-[18px] mx-auto mb-4">
                {i + 1}
              </div>
              <p className="font-bold text-navy text-[15px] mb-2">{s.title}</p>
              <p className="text-mgrey text-[13px] leading-[1.6]">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* REAPPLY */}
      <section className="bg-lgrey px-6 md:px-20 py-16 md:py-20">
        <div className="bg-white border border-cardline p-7 max-w-2xl mx-auto">
          <p className="text-mgrey text-[11px] uppercase tracking-[0.15em] mb-2">{REAPPLY.eyebrow}</p>
          <p className="font-extrabold text-navy text-[28px] mb-3">{REAPPLY.title}</p>
          <p className="text-dgrey text-[14px] leading-[1.7]">{REAPPLY.text}</p>
        </div>
      </section>

      {/* REFERENCES */}
      <section className="bg-white px-6 md:px-20 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-bold text-navy text-[18px] mb-4">References</h2>
          <ol className="list-decimal pl-5 text-mgrey text-[13px] leading-[1.8]">
            {DOSE_REFERENCES.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/products/daily-shield"
              className="text-center border border-navy text-navy text-[11px] font-bold tracking-[0.15em] uppercase px-8 py-4"
            >
              About Daily Shield →
            </Link>
            <WaitlistButton
              productId="daily-shield"
              className="text-center bg-navy text-white text-[11px] font-bold tracking-[0.15em] uppercase px-8 py-4"
            >
              Join the waitlist →
            </WaitlistButton>
          </div>
        </div>
      </section>
    </>
  )
}
