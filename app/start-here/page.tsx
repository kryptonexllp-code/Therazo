import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import WaitlistForm from '@/components/WaitlistForm'
import { START_HERE } from '@/content/startHere'

export const metadata: Metadata = {
  title: 'Start here',
  description: START_HERE.intro,
}

export default function StartHerePage() {
  return (
    <>
      <section className="bg-navy px-6 md:px-20 pt-32 pb-14">
        <SectionLabel dark>Start Here</SectionLabel>
        <h1 className="font-extrabold text-white text-[40px] sm:text-[56px] leading-[1.02] mb-4">{START_HERE.title}</h1>
        <p className="text-bluelight text-[16px] max-w-xl">{START_HERE.intro}</p>
      </section>

      {START_HERE.sections.map((s, i) => (
        <section key={s.heading} className={`px-6 md:px-20 py-14 ${i % 2 ? 'bg-lgrey' : 'bg-white'}`}>
          <div className="max-w-3xl grid grid-cols-1 md:grid-cols-[60px_1fr] gap-4">
            <p className="text-mgrey text-[13px] font-medium">0{i + 1}</p>
            <div>
              <h2 className="font-bold text-navy text-[22px] mb-3">{s.heading}</h2>
              {s.body.map((para) => (
                <p key={para} className="text-dgrey text-[15px] leading-[1.75] mb-3 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-white px-6 md:px-20 py-14 border-t border-cardline">
        <div className="max-w-3xl">
          <h2 className="font-bold text-navy text-[22px] mb-2">{START_HERE.finderHeading}</h2>
          <p className="text-dgrey text-[15px] mb-6">{START_HERE.finderText}</p>
          <Link
            href="/find-your-routine"
            className="inline-block bg-navy text-white text-[11px] font-bold tracking-[0.15em] uppercase px-8 py-4"
          >
            {START_HERE.finderCta}
          </Link>
        </div>
      </section>

      <section className="bg-navy px-6 md:px-20 py-14">
        <div className="max-w-xl">
          <h2 className="font-bold text-white text-[22px] mb-6">{START_HERE.waitlistHeading}</h2>
          <WaitlistForm dark />
        </div>
      </section>
    </>
  )
}
