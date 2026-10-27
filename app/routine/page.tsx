import type { Metadata } from 'next'
import Link from 'next/link'
import ProductImage from '@/components/ui/ProductImage'
import AnimatedSection from '@/components/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import ComingSoonBadge from '@/components/ui/ComingSoonBadge'
import WaitlistButton from '@/components/WaitlistButton'
import WaitlistForm from '@/components/WaitlistForm'
import { formatPrice, getProduct, statusLabel } from '@/lib/products'

export const metadata: Metadata = {
  title: 'The Routine',
  description:
    'The Therazo routine — morning: Cleanse, Treat, Protect. Night: Cleanse, Renew, Repair. Daily Shield is the starting point.',
}

const MORNING = [
  { id: 'gentle-cleanser', step: 'Cleanse' },
  { id: 'clarity-serum', step: 'Treat' },
  { id: 'daily-shield', step: 'Protect' },
]
const NIGHT = [
  { id: 'gentle-cleanser', step: 'Cleanse' },
  { id: 'age-renewal', step: 'Renew' },
  { id: 'barrier-repair', step: 'Repair' },
]
// Each product appears once below, in the order it first appears in the day.
const ROUTINE_ORDER = ['gentle-cleanser', 'clarity-serum', 'daily-shield', 'age-renewal', 'barrier-repair']

export default function RoutinePage() {
  const steps = ROUTINE_ORDER.map((id) => getProduct(id)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p)
  )

  return (
    <>
      {/* HERO */}
      <section className="bg-navy px-6 md:px-20 pt-32 pb-16">
        <SectionLabel dark>The Routine</SectionLabel>
        <h1 className="font-extrabold text-white text-[34px] sm:text-[48px] md:text-[56px] leading-[1.05] mb-6">
          Five products. A morning and a night routine.
        </h1>
        <p className="text-bluelight text-[16px] max-w-2xl">
          The complete Therazo routine is being built. Daily Shield is your starting point — the
          most important step in any skincare routine.
        </p>
      </section>

      {/* MORNING / NIGHT OVERVIEW */}
      <section className="bg-white px-6 md:px-20 py-14 border-b border-cardline">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
          {[
            { label: 'Morning', steps: MORNING },
            { label: 'Night', steps: NIGHT },
          ].map((r) => (
            <div key={r.label}>
              <p className="text-navy text-[11px] font-bold tracking-[0.2em] uppercase mb-4">{r.label}</p>
              <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] text-dgrey">
                {r.steps.map((st, i) => (
                  <li key={st.step} className="flex items-center gap-3">
                    <Link href={`/products/${st.id}`} className="underline-offset-4 hover:underline">
                      <span className="font-bold text-navy">{st.step}</span>{' '}
                      <span className="text-mgrey">({getProduct(st.id)?.sku})</span>
                    </Link>
                    {i < r.steps.length - 1 && <span className="text-mgrey">→</span>}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* THE FIVE PRODUCTS */}
      <AnimatedSection className="bg-offwhite px-6 md:px-20 py-20 md:py-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((p) => (
            <div key={p.id} className="bg-white border border-cardline flex flex-col sm:flex-row overflow-hidden">
              <ProductImage src={p.productImage} alt={`${p.name} — ${p.descriptor}`} aspect='1 / 1' sizes="(max-width: 640px) 100vw, 300px" className="w-full sm:w-[42%] shrink-0" background="bg-lgrey" />
              <div className="p-7 flex flex-col flex-1">
                <p className="text-mgrey text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                  Step {p.sku} · {p.step}
                </p>
                <h2 className="font-bold text-navy text-[22px] mb-2">{p.name}</h2>
                <p className="text-dgrey text-[13px] leading-[1.65] mb-4">{p.tagline}</p>
                {p.about?.map((a, i) => (
                  <p key={i} className="text-mgrey text-[12px] leading-[1.6] mb-3 last:mb-0">
                    {a}
                  </p>
                ))}
                <p className="font-bold text-navy text-[18px] mt-5 mb-4">
                  <span className="text-mgrey font-medium text-[10px] uppercase tracking-[0.1em] mr-1.5">MRP</span>
                  {formatPrice(p.price)}
                </p>
                <div className="mt-auto">
                  <div className="flex items-center justify-between gap-3">
                    <ComingSoonBadge label={statusLabel(p)} outlined={p.status === 'launching-soon'} />
                    <WaitlistButton
                      productId={p.id}
                      className="text-navy text-[12px] font-medium underline underline-offset-4 whitespace-nowrap"
                    >
                      Join Waitlist →
                    </WaitlistButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* WAITLIST */}
      <AnimatedSection className="bg-navy px-6 md:px-20 py-20 md:py-[100px]">
        <div className="max-w-xl mx-auto text-center">
          <SectionLabel dark>Stay Updated</SectionLabel>
          <h2 className="font-bold text-white text-[26px] md:text-[32px] mb-3">
            Be first when each step is complete.
          </h2>
          <p className="text-bluelight text-[14px] mb-8">
            Get launch alerts as Cleanse, Treat, Renew and Repair arrive — plus ingredient
            education from the science behind Therazo.
          </p>
          <WaitlistForm dark />
        </div>
      </AnimatedSection>
    </>
  )
}
