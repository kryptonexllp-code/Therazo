import type { Metadata } from 'next'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import ActiveCard from '@/components/ui/ActiveCard'
import StickyOrderBar from '@/components/StickyOrderBar'
import OrderButton from '@/components/OrderButton'
import AnimatedSection from '@/components/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { dailyShield } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Daily Shield SPF 50 PA++++ SPF Moisturizer',
  description:
    '6 UV filters including Tinosorb S+M. Ectoin, Niacinamide, Ceramide Complex. Pharmacy-grade SPF moisturizer for Indian skin. ₹699 / 50ml. Order via WhatsApp.',
}

const OUTCOMES = [
  { name: 'Protects', desc: 'Broad-spectrum UVA + UVB defence from 6 UV filters.' },
  { name: 'Hydrates', desc: 'Sodium Hyaluronate and Squalane for lasting moisture.' },
  { name: 'Brightens', desc: 'Niacinamide and Ethyl Ascorbic Acid even out tone.' },
  { name: 'Repairs', desc: 'Ceramide Complex restores the skin barrier.' },
  { name: 'Shields', desc: 'Ectoin protects against pollution and heat stress.' },
]

const WHAT_WE_DONT_USE = ['Parabens', 'Silicones', 'Mineral Oil', 'Artificial Colour', 'Sulphates']

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Daily Shield',
  description:
    'SPF 50 PA++++ SPF Moisturizer with 6 UV filters, Ectoin, Niacinamide, and Ceramide Complex.',
  image: 'https://therazo.co/images/product-daily-shield-box.png',
  brand: { '@type': 'Brand', name: 'Therazo' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    price: '699',
    availability: 'https://schema.org/InStock',
  },
}

export default function DailyShieldPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <StickyOrderBar />

      <section className="px-6 md:px-20 pt-24 md:pt-16 pb-16">
        <p className="text-mgrey text-[12px] mb-8">
          <Link href="/">Home</Link> › <Link href="/products">The Range</Link> › Daily Shield
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <ImagePlaceholder label="Daily Shield — main image" className="h-[380px] w-full mb-4" />
            <div className="grid grid-cols-3 gap-3">
              <ImagePlaceholder label="Box detail" className="h-24" />
              <ImagePlaceholder label="On stone slab" className="h-24" />
              <ImagePlaceholder label="Texture shot — coming soon" className="h-24" />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green" />
              <span className="text-green text-[11px] font-medium tracking-[0.1em] uppercase">
                Available Now · In Stock
              </span>
            </div>
            <h1 className="font-extrabold text-navy text-[36px] sm:text-[44px] md:text-[48px] mb-1">
              Daily Shield
            </h1>
            <p className="text-mgrey text-[18px] mb-4">SPF Moisturizer</p>
            <span className="inline-block bg-gold text-navy font-bold text-[13px] px-3 py-1.5 mb-5">
              SPF 50 · BROAD SPECTRUM · PA++++
            </span>
            <p className="font-extrabold text-navy text-[36px] mb-1">₹699</p>
            <p className="text-mgrey text-[13px] mb-6">50 ml / 50 g · Dermatologically tested · Unisex</p>

            <ul className="space-y-2 mb-8">
              {dailyShield.benefits?.map((b) => (
                <li key={b} className="flex items-start gap-2 text-[14px] text-dgrey">
                  <span className="text-green mt-0.5">✓</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="border-[1.5px] border-navy p-4 mb-6">
              <p className="text-navy text-[11px] font-bold tracking-[0.15em] uppercase mb-3">
                Order Daily Shield
              </p>
              <OrderButton className="w-full h-[52px] bg-navy text-gold font-bold text-[12px] tracking-[0.2em] uppercase transition-transform duration-150 hover:scale-[1.02]">
                Order via WhatsApp — ₹699
              </OrderButton>
              <p className="text-mgrey text-[12px] mt-3">
                Payment link shared on WhatsApp · Pan-India delivery · Free above ₹499
              </p>
              <p className="text-mgrey text-[12px] mt-1">Need help? care@therazo.co</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {dailyShield.claims?.map((c) => (
                <span key={c} className="border border-cardline text-mgrey text-[11px] font-medium px-3 py-1.5">
                  {c}
                </span>
              ))}
            </div>

            <div className="bg-[#FBF3D9] border border-gold/40 p-4">
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
          Every ingredient has a documented clinical reason to be here.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {dailyShield.actives.map((a) => (
            <ActiveCard key={a.name} active={a} />
          ))}
        </div>

        <div className="bg-navy p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-bluelight text-[14px] leading-[1.6] max-w-xl">
            This page shows the clinical function of each active. For complete data —
            concentrations, mechanisms, formulation reference, and ISO 24444:2019 SPF test
            certificate — visit the dermatologist portal.
          </p>
          <Link href="/for-doctors" className="text-gold text-[13px] font-bold whitespace-nowrap">
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
          IV–VI skin, common across India, unmanaged UVA exposure is the leading driver of visible
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
            <p className="text-bluelight text-[12px]">Most pharmacy SPF</p>
          </div>
          <div className="border-2 border-gold p-6 text-center">
            <p className="text-gold font-bold text-[18px] mb-1">PA++++</p>
            <p className="text-bluemuted text-[11px] uppercase tracking-[0.1em] mb-3">PPD 16+</p>
            <p className="text-white text-[12px] font-medium">Daily Shield</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-lgrey px-6 md:px-20 py-16">
        <h2 className="text-center font-bold text-navy text-[26px] mb-10">The 6 UV Filters</h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {[
            { name: 'Tinosorb S', range: 92 },
            { name: 'Tinosorb M', range: 85 },
            { name: 'DHHB', range: 70 },
            { name: 'Ethylhexyl Triazone', range: 60 },
            { name: 'Zinc Oxide', range: 95 },
            { name: 'Titanium Dioxide', range: 55 },
          ].map((f) => (
            <div key={f.name} className="flex items-center gap-4">
              <span className="w-40 shrink-0 text-navy text-[13px] font-medium">{f.name}</span>
              <div className="flex-1 h-2 bg-white border border-cardline">
                <div className="h-full bg-gold" style={{ width: `${f.range}%` }} />
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white px-6 md:px-20 py-16">
        <h2 className="text-center font-bold text-navy text-[26px] mb-12">How to Use</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          {[
            { n: '1', t: 'Cleanse', d: 'Start with a clean, dry face.' },
            { n: '2', t: 'Apply', d: 'A generous, even layer as the last step each morning.' },
            { n: '3', t: 'Reapply', d: 'Every 3–4 hours with prolonged sun exposure.' },
          ].map((s) => (
            <div key={s.n}>
              <div className="w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center font-bold text-[20px] mx-auto mb-4">
                {s.n}
              </div>
              <p className="font-bold text-navy text-[15px] mb-2">{s.t}</p>
              <p className="text-mgrey text-[13px]">{s.d}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-lgrey px-6 md:px-20 py-16">
        <p className="text-center text-navy text-[13px] font-medium mb-2 max-w-xl mx-auto">
          We publish our full ingredient list. Every ingredient. In order. Because transparency is
          not optional.
        </p>
        <details className="max-w-2xl mx-auto bg-white border border-cardline p-5 mt-6">
          <summary className="cursor-pointer font-bold text-navy text-[14px]">
            Full Ingredient List (INCI) — expand to view
          </summary>
          <p className="text-mgrey text-[12px] leading-[1.8] mt-4">
            Aqua, Ethylhexyl Triazone, Zinc Oxide, Titanium Dioxide, Bemotrizinol, Bisoctrizole,
            Diethylamino Hydroxybenzoyl Hexyl Benzoate, Glycerin, Squalane, Niacinamide, Ectoin,
            Sodium Hyaluronate, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine,
            Cholesterol, 3-O-Ethyl Ascorbic Acid, Panthenol, Tocopherol, Rosa Damascena Flower
            Extract, Xanthan Gum, Carbomer, Sodium Hydroxide, Disodium EDTA.
          </p>
        </details>
      </AnimatedSection>

      <AnimatedSection className="bg-white px-6 md:px-20 py-16">
        <h2 className="text-center font-bold text-navy text-[24px] mb-10">What We Don&apos;t Use</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
          {WHAT_WE_DONT_USE.map((item) => (
            <div key={item} className="border border-cardline p-4 text-center">
              <p className="text-navy text-[12px] font-medium">{item}</p>
              <p className="text-mgrey text-[10px] mt-1">Free</p>
            </div>
          ))}
        </div>
        <div className="bg-[#FBF3D9] border border-gold/40 p-4 max-w-2xl mx-auto">
          <p className="text-dgrey text-[13px] leading-[1.6]">{dailyShield.fragranceNote}</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-lgrey px-6 md:px-20 py-16 pb-24 md:pb-16">
        <div className="max-w-md mx-auto border-2 border-navy p-8 text-center">
          <SectionLabel>SPF Certificate</SectionLabel>
          <p className="font-bold text-navy text-[16px] mb-2">ISO 24444:2019 In-Vivo SPF Test</p>
          <p className="text-mgrey text-[13px]">Certificate in Progress</p>
          <p className="text-mgrey text-[12px] mt-3">Published on receipt from testing laboratory.</p>
        </div>
      </AnimatedSection>
    </>
  )
}
