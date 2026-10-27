import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import WaitlistButton from '@/components/WaitlistButton'

// Target of the QR code printed on the Daily Shield carton.
// Keep this URL (/dose-guide) stable — do not rename or move the route.
export const metadata: Metadata = {
  title: 'Two finger-lengths',
  description:
    'SPF is tested with two finger-lengths of cream for the face and neck. Most people use half. How much Daily Shield to apply, and when to reapply.',
}

// Two fingers seen palm-up, with a line of cream along each one that is
// covered. `covered` is 1 (one finger-length) or 2 (two finger-lengths).
function FingerIllustration({ covered, label }: { covered: 1 | 2; label: string }) {
  return (
    <svg viewBox="0 0 220 260" role="img" aria-label={label} className="w-full max-w-[220px] mx-auto">
      {/* palm edge */}
      <path d="M30 250 Q30 205 50 195 L170 195 Q190 205 190 250 Z" fill="#E6E8EC" stroke="#1F3A5F" strokeWidth="2" />
      {/* index finger */}
      <rect x="58" y="20" width="44" height="190" rx="22" fill="#E6E8EC" stroke="#1F3A5F" strokeWidth="2" />
      {/* middle finger */}
      <rect x="118" y="6" width="44" height="204" rx="22" fill="#E6E8EC" stroke="#1F3A5F" strokeWidth="2" />
      {/* finger creases */}
      <path d="M66 82 H94 M66 140 H94 M126 72 H154 M126 134 H154" stroke="#1F3A5F" strokeOpacity="0.25" strokeWidth="1.5" />
      {/* cream lines */}
      <rect x="70" y="30" width="20" height="170" rx="10" fill="#FFFFFF" stroke="#1F3A5F" strokeWidth="1.5" />
      {covered === 2 && <rect x="130" y="16" width="20" height="184" rx="10" fill="#FFFFFF" stroke="#1F3A5F" strokeWidth="1.5" />}
    </svg>
  )
}

const STEPS = [
  { n: '1', t: 'Measure', d: 'Squeeze a line of Daily Shield along the full length of your index and middle fingers.' },
  { n: '2', t: 'Dot', d: 'Dot it over forehead, cheeks, nose, chin and neck.' },
  { n: '3', t: 'Spread', d: 'Spread evenly as the last step of your morning routine. Do not rub most of it back off.' },
]

export default function DoseGuidePage() {
  return (
    <>
      <section className="bg-navy px-6 md:px-20 pt-32 pb-16">
        <SectionLabel dark>Dose Guide · Daily Shield</SectionLabel>
        <h1 className="font-extrabold text-white text-[40px] sm:text-[56px] leading-[1.02] mb-6">
          Two finger-lengths
        </h1>
        <p className="text-bluelight text-[17px] leading-[1.7] max-w-xl">
          SPF is tested with two finger-lengths of cream. Most people use half.
        </p>
      </section>

      {/* ILLUSTRATIONS */}
      <section className="bg-white px-6 md:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <figure className="border border-cardline p-6 text-center">
            <FingerIllustration covered={1} label="Cream along one finger: the amount most people use" />
            <figcaption className="mt-5">
              <span className="block text-mgrey text-[11px] uppercase tracking-[0.15em] mb-1">What most people use</span>
              <span className="block font-bold text-navy text-[17px]">About one finger-length</span>
              <span className="block text-mgrey text-[13px] mt-1">Roughly half the tested amount</span>
            </figcaption>
          </figure>
          <figure className="border-2 border-navy p-6 text-center">
            <FingerIllustration covered={2} label="Cream along two fingers: the amount SPF is tested with" />
            <figcaption className="mt-5">
              <span className="block text-mgrey text-[11px] uppercase tracking-[0.15em] mb-1">What SPF is tested with</span>
              <span className="block font-bold text-navy text-[17px]">Two finger-lengths</span>
              <span className="block text-mgrey text-[13px] mt-1">For face and neck</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* THE TEST DOSE */}
      <section className="bg-lgrey px-6 md:px-20 py-16 md:py-20">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
          <p className="font-extrabold text-navy text-[44px] leading-none">
            2 mg<span className="text-[22px]">/cm²</span>
          </p>
          <div>
            <h2 className="font-bold text-navy text-[22px] mb-3">The test dose</h2>
            <p className="text-dgrey text-[15px] leading-[1.75] mb-3">
              The SPF and PA numbers on any pack are set in testing at 2 mg of product for every
              square centimetre of skin. For the face and neck, that is about two finger-lengths.
            </p>
            <p className="text-dgrey text-[15px] leading-[1.75]">
              Apply less and you get less protection than the number on the pack. The number only
              describes the protection at the tested amount.
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section className="bg-white px-6 md:px-20 py-16 md:py-20">
        <h2 className="text-center font-bold text-navy text-[26px] mb-12">How to apply</h2>
        <ol className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          {STEPS.map((s) => (
            <li key={s.n}>
              <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold text-[18px] mx-auto mb-4">
                {s.n}
              </div>
              <p className="font-bold text-navy text-[15px] mb-2">{s.t}</p>
              <p className="text-mgrey text-[13px] leading-[1.6]">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* TUBE LIFE + REAPPLY */}
      <section className="bg-lgrey px-6 md:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white border border-cardline p-7">
            <p className="text-mgrey text-[11px] uppercase tracking-[0.15em] mb-2">How long a tube lasts</p>
            <p className="font-extrabold text-navy text-[28px] mb-3">About six weeks</p>
            <p className="text-dgrey text-[14px] leading-[1.7] mb-4">
              Used once a day at the full two finger-length dose on face and neck, a 50 ml tube of
              Daily Shield lasts about six weeks.
            </p>
            <p className="inline-block border border-navy text-navy text-[10px] font-medium uppercase tracking-[0.12em] px-2.5 py-1">
              Indicative — pending a weigh test
            </p>
          </div>
          <div className="bg-white border border-cardline p-7">
            <p className="text-mgrey text-[11px] uppercase tracking-[0.15em] mb-2">Reapply</p>
            <p className="font-extrabold text-navy text-[28px] mb-3">Every 2 hours outdoors</p>
            <p className="text-dgrey text-[14px] leading-[1.7]">
              When you are outdoors, reapply every two hours — and again after swimming, heavy
              sweating or towel-drying.
            </p>
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <section className="bg-white px-6 md:px-20 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-bold text-navy text-[18px] mb-4">References</h2>
          <ol className="list-decimal pl-5 text-mgrey text-[13px] leading-[1.8]">
            <li>[REFERENCES TO BE ADDED]</li>
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
