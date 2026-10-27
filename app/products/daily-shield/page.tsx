import type { Metadata } from 'next'
import Link from 'next/link'
import ActiveCard from '@/components/ui/ActiveCard'
import ProductGallery from './ProductGallery'
import StickyLaunchBar from '@/components/StickyLaunchBar'
import WaitlistForm from '@/components/WaitlistForm'
import { waitlistWhatsAppUrl } from '@/lib/whatsapp'
import AnimatedSection from '@/components/AnimatedSection'
import UvFilterBands from '@/components/UvFilterBands'
import UsageBadge from '@/components/ui/UsageBadge'
import DoseIllustrations from '@/components/DoseIllustrations'
import DayTimeline from '@/components/DayTimeline'
import { DOSE_LINE } from '@/content/dose'
import { dailyShield, productClaims } from '@/lib/products'

// Key actives by name. Concentrations stay in the /for-doctors tier only
// (two-tier rule, CLAUDE.md) — never list percentages on customer pages.
const KEY_ACTIVES = [
  'Ectoin',
  'Niacinamide',
  'Ceramide Complex',
  'Ethyl Ascorbic Acid',
  'Sodium Hyaluronate',
  'Panthenol',
  'Tocopherol',
]

export const metadata: Metadata = {
  title: 'Daily Shield SPF 50 PA++++ SPF Moisturizer',
  description:
    'Daily Shield SPF 50 PA++++ SPF Moisturizer — six UV filters with Ectoin, Niacinamide, Ceramide Complex and Vitamin C. Made for Indian skin and climate. ₹699 / 50 ml.',
}

const OUTCOMES = [
  { name: 'Filters UV', desc: 'Six UVA + UVB filters — SPF 50 PA++++.' },
  { name: 'Hydrates', desc: 'Sodium Hyaluronate and Squalane for moisture.' },
  { name: 'Holds water', desc: 'Ectoin forms a stabilising shell around skin cells.' },
  { name: 'Supports the barrier', desc: 'Ceramide Complex and Niacinamide.' },
  { name: 'Evens the look of tone', desc: 'Niacinamide and Vitamin C.' },
]

// Mirrors the free-from claims on file for Daily Shield (lib/products.ts).
const WHAT_WE_DONT_USE = ['Parabens', 'Silicones', 'Mineral oil', 'Artificial colour', 'Synthetic fragrance']

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Daily Shield',
  description:
    'SPF 50 PA++++ SPF Moisturizer with six UV filters, Ectoin, Niacinamide, Ceramide Complex and Vitamin C.',
  image: 'https://therazo.co/images/product-daily-shield-box.png',
  brand: { '@type': 'Brand', name: 'Therazo' },
  // No Offer: Daily Shield is not on sale yet (launching soon), so we
  // publish no availability, stock or purchase data.
}

export default function DailyShieldPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <StickyLaunchBar />

      <section className="px-6 md:px-20 pt-24 md:pt-16 pb-16">
        <p className="text-mgrey text-[12px] mb-8">
          <Link href="/customers">Home</Link> › <Link href="/products">The Range</Link> › Daily Shield
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* TODO: replace with final white-matt pack photo — both images below are
              older mockups (off-white tube, earlier carton), kept as placeholders. */}
          <ProductGallery
            images={[
              { src: dailyShield.heroImage, alt: 'Daily Shield SPF Moisturizer tube' },
              { src: dailyShield.productImage, alt: 'Daily Shield carton' },
              { src: undefined, alt: 'Daily Shield texture' },
            ]}
            badge={<UsageBadge usage={dailyShield.usage} />}
          />

          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-navy" />
              <span className="text-navy text-[11px] font-medium tracking-[0.1em] uppercase">
                Launching soon · In production
              </span>
            </div>
            <h1 className="font-extrabold text-navy text-[36px] sm:text-[44px] md:text-[48px] mb-1">
              Daily Shield
            </h1>
            <p className="text-mgrey text-[18px] mb-4">SPF Moisturizer</p>
            <span className="inline-block bg-navy text-white font-bold text-[13px] px-3 py-1.5 mb-5">
              SPF 50 · BROAD SPECTRUM · PA++++
            </span>
            <p className="font-extrabold text-navy text-[36px] mb-1">
              <span className="text-mgrey font-medium text-[12px] uppercase tracking-[0.1em] mr-2">MRP incl. taxes</span>
              ₹699
            </p>
            <p className="text-mgrey text-[13px] mb-6">{dailyShield.size} · Unisex</p>

            <ul className="space-y-2 mb-8">
              {dailyShield.benefits?.map((b) => (
                <li key={b} className="flex items-start gap-2 text-[14px] text-dgrey">
                  <span className="text-green mt-0.5">✓</span>
                  {b}
                </li>
              ))}
            </ul>

            <p className="text-dgrey text-[13px] mb-6 border-l-2 border-navy pl-3">
              {DOSE_LINE}{' '}
              <Link href="/dose-guide" className="text-navy font-medium underline underline-offset-4">
                How much to use →
              </Link>
            </p>

            <div id="waitlist" className="border-[1.5px] border-navy p-5 mb-6 scroll-mt-32">
              <p className="text-navy text-[11px] font-bold tracking-[0.15em] uppercase mb-1">
                Join the Daily Shield waitlist
              </p>
              <p className="text-mgrey text-[12px] mb-4">
                Daily Shield is in production. We will let you know when it launches.
              </p>
              <WaitlistForm productId="daily-shield" />
              <a
                href={waitlistWhatsAppUrl('Daily Shield')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-navy text-[12px] font-medium underline underline-offset-4"
              >
                Prefer WhatsApp? Message us to be notified →
              </a>
              <p className="text-mgrey text-[12px] mt-2">Questions? care@therazo.co · 1800 569 4100</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {productClaims(dailyShield).map((c) => (
                <span key={c} className="border border-cardline text-mgrey text-[11px] font-medium px-3 py-1.5">
                  {c}
                </span>
              ))}
            </div>

            <div className="bg-lgrey border-l-2 border-navy p-4">
              <p className="text-dgrey text-[13px] leading-[1.6]">{dailyShield.fragranceNote}</p>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-lgrey px-6 md:px-20 py-16">
        <h2 className="text-center font-bold text-navy text-[26px] mb-10">What It Does</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {OUTCOMES.map((o) => (
            <div key={o.name} className="bg-white border border-cardline p-5 text-center">
              <p className="font-bold text-navy text-[14px] mb-2">{o.name}</p>
              <p className="text-mgrey text-[12px] leading-[1.5]">{o.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white px-6 md:px-20 py-16 md:py-20">
        <h2 className="text-center font-bold text-navy text-[28px] mb-2">What&apos;s Inside — and Why</h2>
        <p className="text-center text-mgrey text-[15px] mb-12">
          Every ingredient is listed with the reason it is here.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {dailyShield.actives.map((a) => (
            <ActiveCard key={a.name} active={a} />
          ))}
        </div>

        <div className="bg-navy p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-bluelight text-[14px] leading-[1.6] max-w-xl">
            This page lists what each active does. For full formulation data and the
            formulation reference, visit the dermatologist portal.
          </p>
          <Link href="/for-doctors" className="text-white text-[13px] font-bold whitespace-nowrap underline underline-offset-4">
            Access Full Clinical Data →
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-navy px-6 md:px-20 py-16 md:py-20">
        <h2 className="text-center font-bold text-white text-[26px] md:text-[32px] mb-3">
          Why PA++++ Matters for Indian Skin
        </h2>
        <p className="text-center text-bluelight text-[15px] max-w-2xl mx-auto mb-12">
          PA rating measures protection against UVA — the ray responsible for photoageing and
          hyperpigmentation, present year-round regardless of season or cloud cover. For Fitzpatrick
          IV–VI skin, common across India, unmanaged UVA exposure is a major driver of visible
          uneven tone.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          <div className="border border-white/20 p-6 text-center">
            <p className="text-white font-bold text-[18px] mb-1">PA++</p>
            <p className="text-bluemuted text-[11px] uppercase tracking-[0.1em] mb-3">PPD 4–8</p>
            <p className="text-bluelight text-[12px]">Moderate protection</p>
          </div>
          <div className="border border-white/20 p-6 text-center">
            <p className="text-white font-bold text-[18px] mb-1">PA+++</p>
            <p className="text-bluemuted text-[11px] uppercase tracking-[0.1em] mb-3">PPD 8–16</p>
            <p className="text-bluelight text-[12px]">High protection</p>
          </div>
          <div className="border-2 border-white p-6 text-center">
            <p className="text-white font-bold text-[18px] mb-1">PA++++</p>
            <p className="text-bluemuted text-[11px] uppercase tracking-[0.1em] mb-3">PPD 16+</p>
            <p className="text-white text-[12px] font-medium">Very high — Daily Shield&apos;s designation</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-lgrey px-6 md:px-20 py-16">
        <h2 className="text-center font-bold text-navy text-[26px] mb-3">The Six UV Filters</h2>
        <p className="text-center text-mgrey text-[14px] max-w-xl mx-auto mb-10">
          Organic and mineral filter classes, and the wavebands each one works in.
        </p>
        <div className="max-w-3xl mx-auto bg-white border border-cardline p-6">
          <UvFilterBands />
        </div>
      </AnimatedSection>

      <AnimatedSection id="how-to-use" className="bg-white px-6 md:px-20 py-16 md:py-20 scroll-mt-24">
        <h2 className="text-center font-bold text-navy text-[26px] mb-3">How to use it</h2>
        <p className="text-center text-dgrey text-[15px] max-w-xl mx-auto mb-10">{DOSE_LINE}</p>
        <DoseIllustrations size="small" />
        <div className="max-w-4xl mx-auto mt-14">
          <h3 className="font-bold text-navy text-[16px] mb-8">Your day with Daily Shield</h3>
          <DayTimeline />
        </div>
        <p className="text-center mt-12">
          <Link href="/dose-guide" className="text-navy text-[13px] font-medium underline underline-offset-4">
            Read the full dose guide →
          </Link>
        </p>
      </AnimatedSection>

      <AnimatedSection className="bg-lgrey px-6 md:px-20 py-16">
        <h2 className="text-center font-bold text-navy text-[24px] mb-3">Key Actives</h2>
        <p className="text-center text-mgrey text-[13px] mb-8 max-w-xl mx-auto">
          The actives in Daily Shield. We will publish the full ingredient list, in order, from
          the final pack artwork. Formulation detail for clinicians is on the{' '}
          <Link href="/for-doctors" className="text-navy underline underline-offset-2">doctors portal</Link>.
        </p>
        <ul className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 border-t border-l border-cardline bg-white">
          {KEY_ACTIVES.map((name) => (
            <li key={name} className="border-r border-b border-cardline p-4 text-navy text-[13px] font-medium">
              {name}
            </li>
          ))}
        </ul>
        <details className="max-w-3xl mx-auto bg-white border border-cardline p-5 mt-6">
          <summary className="cursor-pointer font-bold text-navy text-[14px]">
            Full Ingredient List (INCI)
          </summary>
          {/* TODO: paste the INCI list verbatim from the final pack artwork */}
          <p className="text-mgrey text-[12px] leading-[1.8] mt-4">[FULL INCI LIST TO BE ADDED FROM FINAL PACK ARTWORK]</p>
        </details>
      </AnimatedSection>

      <AnimatedSection className="bg-white px-6 md:px-20 py-16 pb-24 md:pb-16">
        <h2 className="text-center font-bold text-navy text-[24px] mb-10">What We Don&apos;t Use</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
          {WHAT_WE_DONT_USE.map((item) => (
            <div key={item} className="border border-cardline p-4 text-center">
              <p className="text-navy text-[12px] font-medium">{item}</p>
              <p className="text-mgrey text-[10px] mt-1">Free</p>
            </div>
          ))}
        </div>
        <div className="bg-lgrey border-l-2 border-navy p-4 max-w-2xl mx-auto">
          <p className="text-dgrey text-[13px] leading-[1.6]">{dailyShield.fragranceNote}</p>
        </div>
      </AnimatedSection>

    </>
  )
}
