import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import ComingSoonBadge from '@/components/ui/ComingSoonBadge'
import OrderButton from '@/components/OrderButton'
import WaitlistForm from '@/components/WaitlistForm'
import { getProduct } from '@/lib/products'

export const metadata: Metadata = {
  title: 'The Routine',
  description:
    'The complete 5-step Therazo routine — Cleanse, Treat, Moisturise, Repair, Protect. Daily Shield is available now.',
}

const ROUTINE_ORDER = ['gentle-cleanser', 'clarity-serum', 'oil-balance', 'barrier-repair', 'daily-shield']

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
          Five steps. One complete routine.
        </h1>
        <p className="text-bluelight text-[16px] max-w-2xl">
          The complete Therazo routine is being built. Daily Shield is your starting point — the
          most important step in any skincare routine.
        </p>
      </section>

      {/* 5 STEPS */}
      <AnimatedSection className="bg-offwhite px-6 md:px-20 py-20 md:py-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((p) => (
            <div key={p.id} className="bg-white border border-cardline flex flex-col sm:flex-row overflow-hidden">
              <div className="relative h-48 sm:h-auto sm:w-[42%] shrink-0 bg-lgrey">
                <Image
                  src={p.productImage}
                  alt={`${p.name} — ${p.descriptor}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-contain"
                />
              </div>
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
                <p className="font-bold text-navy text-[18px] mt-5 mb-4">₹{p.price}</p>
                <div className="mt-auto">
                  {p.status === 'available' ? (
                    <OrderButton className="w-full h-[48px] bg-navy text-gold font-bold text-[11px] tracking-[0.2em] uppercase transition-transform duration-150 hover:scale-[1.02]">
                      Order Daily Shield →
                    </OrderButton>
                  ) : (
                    <div className="flex items-center justify-between gap-3">
                      <ComingSoonBadge timeline={p.timeline ?? 'Coming Soon'} />
                      <Link
                        href={`/products/${p.id}`}
                        className="text-navy text-[12px] font-medium underline underline-offset-4 whitespace-nowrap"
                      >
                        Join Waitlist →
                      </Link>
                    </div>
                  )}
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
            Get launch alerts as Cleanse, Treat, Moisturise, and Repair arrive — plus ingredient
            education from the science behind Therazo.
          </p>
          <WaitlistForm dark />
        </div>
      </AnimatedSection>
    </>
  )
}
