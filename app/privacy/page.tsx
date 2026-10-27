import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import { PRIVACY_REVIEW_NOTE, PRIVACY_SECTIONS, PRIVACY_UPDATED } from '@/content/privacy'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Therazo collects, uses and protects your personal data, and your rights.',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy px-6 md:px-20 pt-32 pb-14">
        <SectionLabel dark>Privacy</SectionLabel>
        <h1 className="font-extrabold text-white text-[36px] sm:text-[48px] leading-[1.05] mb-3">Privacy Policy</h1>
        <p className="text-bluelight text-[14px]">Last updated {PRIVACY_UPDATED}</p>
      </section>
      <section className="bg-white px-6 md:px-20 py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="border border-dashed border-navy p-4 text-navy text-[13px] leading-[1.6] mb-10">{PRIVACY_REVIEW_NOTE}</p>
          {PRIVACY_SECTIONS.map((s) => (
            <div key={s.heading} className="mb-9">
              <h2 className="font-bold text-navy text-[18px] mb-3">{s.heading}</h2>
              {s.body.map((para) => (
                <p key={para} className="text-dgrey text-[14px] leading-[1.75] mb-3 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
