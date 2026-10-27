import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ProductImage from '@/components/ui/ProductImage'
import AnimatedSection from '@/components/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import Rule from '@/components/ui/Rule'
import ComingSoonBadge from '@/components/ui/ComingSoonBadge'
import { products, statusLabel } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Our Story — To Heal and To Preserve',
  description:
    'Why Therazo exists — an evidence-first, pharmacy-grade alternative to trend-driven skincare, built in public for the Indian market.',
}

const PILLARS = [
  {
    n: '01',
    title: 'Evidence before trends',
    body: [
      'Science informs every formulation decision. Not market trend reports. Not what competitors are doing. Published research, stated concentrations, documented reasons.',
      'Before an active earns a place in a Therazo formula, it has to answer one question: what does the published research say it does, and at what concentration does it actually work. If the answer is unclear, the ingredient does not make it in.',
    ],
  },
  {
    n: '02',
    title: 'Full transparency',
    body: [
      'We publish our manufacturer, our formulation reference, and complete formulation data for dermatologists. Trust requires information — not trust me.',
      'Most D2C skincare brands treat their supply chain and formulation as a competitive secret. We treat it as a credibility asset. If we would not want a dermatologist to see it, we would not put it in the bottle.',
    ],
  },
  {
    n: '03',
    title: 'Purposeful simplicity',
    body: [
      'The best skincare routine is the one you actually follow. Every Therazo product is designed to make the right habit frictionless and consistent.',
      'Five clearly defined steps, not fifteen serums with overlapping claims. Every product exists because it does a specific job the others do not — nothing is added for the sake of a longer ingredient list.',
    ],
  },
  {
    n: '04',
    title: 'Skin health for everyone',
    body: [
      'Formulated for diverse Indian skin types, tones, and lifestyles. Unisex by design. Pharmacy-grade does not have a gender.',
      'India is not one climate or one skin type — it is dozens. Every Therazo formula is built to hold up across humidity, pollution, and sun exposure that vary by region, without segmenting the range by gender or skin tone.',
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy px-6 md:px-20 pt-32 pb-16">
        <div className="relative h-16 w-16 mb-8">
          <Image
            src="/images/logos/logo-icon-tagline.png"
            alt="Therazo — Science. Defined."
            fill
            sizes="64px"
            className="object-contain mix-blend-multiply"
          />
        </div>
        <SectionLabel dark>Our Story</SectionLabel>
        <h1 className="font-extrabold text-white text-[36px] sm:text-[52px] md:text-[64px] leading-[0.95] mb-8">
          TO HEAL AND
          <br />
          TO PRESERVE.
        </h1>
        <p className="text-bluelight text-[16px] leading-[1.8] max-w-2xl">
          THERAZO™ is derived from two Ancient Greek words — Therapeutikos, &ldquo;to heal, to care
          for, to restore&rdquo;, and Sozo, &ldquo;to save, to preserve, to protect from harm&rdquo;.
        </p>
        <p className="text-bluelight text-[16px] leading-[1.8] max-w-2xl mt-5">
          Skincare should not require a biochemistry degree to navigate. It should be honest about
          what it contains, clear about what each ingredient does, and confident enough to publish
          the evidence rather than hide behind the packaging. Therazo is an honest attempt to bring
          skincare the science it has always deserved — formulated carefully, communicated plainly,
          and built for people who want to know what they are actually putting on their skin.
        </p>
      </section>

      {/* THE PROBLEM */}
      <AnimatedSection className="bg-offwhite px-6 md:px-20 py-20 md:py-[100px]">
        <SectionLabel>Why We Exist</SectionLabel>
        <h2 className="font-bold text-navy text-[28px] md:text-[40px] leading-[1.15] mb-8 max-w-3xl">
          Skincare has never been more accessible — yet it has never been more confusing.
        </h2>
        <div className="max-w-2xl space-y-6">
          <p className="text-dgrey text-[16px] leading-[1.8]">
            The Indian skincare market has exploded in the last decade — hundreds of D2C brands,
            thousands of SKUs, and an endless stream of trend cycles: snail mucin one year, rice
            water the next, whatever a creator is promoting this week. Somewhere in that noise, the
            actual science of what makes skincare work got buried under packaging design and
            marketing copy.
          </p>
          <p className="text-dgrey text-[16px] leading-[1.8]">
            A large share of that market is built on what we call ingredient-washing — a headline
            active printed in bold on the front of the box, present at a concentration too low to
            do anything clinically meaningful, surrounded by filler ingredients chosen for texture
            and cost, not efficacy. Consumers are asked to trust the label. Rarely are they given
            the information to verify it.
          </p>
          <p className="text-dgrey text-[16px] leading-[1.8]">
            Therazo was built as the alternative: a pharmacy-grade brand that treats skincare the
            way a formulation chemist would, not the way a trend forecaster would. Evidence first.
            Concentrations that are actually stated. A manufacturer we are willing to name. For a
            market that has been sold packaging dressed up as science, we chose to build the
            science first and let the packaging follow.
          </p>
        </div>
      </AnimatedSection>

      {/* 4 PRINCIPLES */}
      <AnimatedSection className="bg-lgrey px-6 md:px-20 py-20 md:py-[100px]">
        <SectionLabel>The Four Principles</SectionLabel>
        <h2 className="font-bold text-navy text-[28px] md:text-[40px] mb-12">
          What Therazo will never compromise on.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PILLARS.map((p) => (
            <div key={p.n} className="relative bg-white border border-cardline border-t-[3px] border-t-navy p-8 overflow-hidden">
              <span className="absolute -top-2 right-3 font-extrabold text-[80px] text-lgrey leading-none select-none">
                {p.n}
              </span>
              <h3 className="relative font-bold text-navy text-[18px] mb-4">{p.title}</h3>
              {p.body.map((b, i) => (
                <p key={i} className="relative text-dgrey text-[14px] leading-[1.7] mb-3 last:mb-0">
                  {b}
                </p>
              ))}
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* DR. CURE PHARMACY — FOUNDING STORY */}
      <AnimatedSection
        className="px-6 md:px-20 py-20"
        style={{ backgroundColor: '#F8F9FF', borderTop: '2px solid #1F3A5F' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-start">
          <div>
            <div
              className="flex h-[60px] w-[120px] items-center justify-center border"
              style={{ backgroundColor: '#E8EFF8', borderColor: '#E6E8EC' }}
            >
              <span className="text-[12px] font-medium text-navy">Dr. Cure Pharmacy</span>
            </div>
            <a
              href="https://drcurepharmacy.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-[12px] font-medium text-navy hover:underline"
            >
              drcurepharmacy.co.in →
            </a>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="border border-navy px-2.5 py-[3px] text-[10px] font-medium tracking-[0.1em] text-navy">
                10+ years pharmacy
              </span>
              <span className="border border-navy px-2.5 py-[3px] text-[10px] font-medium tracking-[0.1em] text-navy">
                Hyderabad
              </span>
              <span
                className="border px-2.5 py-[3px] text-[10px] font-medium tracking-[0.1em]"
                style={{ backgroundColor: '#EBF8F1', borderColor: '#1D6F42', color: '#1D6F42' }}
              >
                Healthcare ecosystem
              </span>
            </div>
          </div>

          <div>
            <SectionLabel>Our Foundation</SectionLabel>
            <h2 className="font-bold text-navy text-[28px] md:text-[32px] mb-5">
              Born from pharmacy. Built on science.
            </h2>
            <p className="text-dgrey text-[16px] leading-[1.75]">
              Therazo grows from the experience and knowledge of R&amp;D scientists with 15+ years
              of formulation expertise, and Dr. Cure Pharmacy — a decade of trusted pharmacy
              presence in Hyderabad, now expanding into a healthcare ecosystem brand covering
              nutraceuticals, skincare, haircare, and kids wellness products.
            </p>
            <p className="text-dgrey text-[16px] leading-[1.75] mt-4">
              The same rigour that guides pharmaceutical dispensing now guides every Therazo
              formula. Informed, meticulous, and pharmacy-grade — this is the standard that Dr.
              Cure Pharmacy has built over ten years, and the standard Therazo is built to match.
            </p>
            <p className="text-dgrey text-[16px] leading-[1.75] mt-4">
              Dr. Cure Pharmacy&apos;s decade of clinical relationships with dermatologists and
              patients across Hyderabad is the foundation on which Therazo&apos;s approach to
              honest clinical dialogue is built.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* MANUFACTURING TRANSPARENCY */}
      <AnimatedSection className="bg-white px-6 md:px-20 py-20 md:py-[100px]">
        <SectionLabel>Manufacturing Transparency</SectionLabel>
        <h2 className="font-bold text-navy text-[28px] md:text-[36px] mb-3 max-w-2xl">
          We publish our manufacturer. Because trust requires information.
        </h2>
        <p className="text-mgrey text-[15px] max-w-2xl mb-12">
          Most brands treat their supply chain as a secret. We treat it as a credibility check
          anyone is free to make.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="border border-cardline p-7">
            <p className="text-navy font-bold text-[14px] mb-3">Contract Manufacturer</p>
            <Rule className="mb-4" />
            <p className="text-dgrey text-[13px] leading-[1.7]">
              BO International
              <br />
              Jhajjar, Haryana
            </p>
          </div>
          <div className="border border-cardline p-7">
            <p className="text-navy font-bold text-[14px] mb-3">Formulation Reference</p>
            <Rule className="mb-4" />
            <p className="text-dgrey text-[13px] leading-[1.7]">
              Every Therazo formula carries a documented reference code. Dermatologists can request
              full access, including mechanisms and concentrations, on the{' '}
              <Link href="/for-doctors" className="text-navy underline underline-offset-4 font-medium">
                clinical portal
              </Link>
              .
            </p>
          </div>
          <div className="border border-cardline p-7">
            <p className="text-navy font-bold text-[14px] mb-3">Marketed By</p>
            <Rule className="mb-4" />
            <p className="text-dgrey text-[13px] leading-[1.7]">
              Kryptonex LLP
              <br />
              Hyderabad, Telangana
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* THE FULL RANGE */}
      <AnimatedSection className="bg-lgrey px-6 md:px-20 py-20 md:py-[100px]">
        <SectionLabel>The Full Range</SectionLabel>
        <h2 className="font-bold text-navy text-[28px] md:text-[40px] mb-3">
          Five products. One complete routine.
        </h2>
        <p className="text-mgrey text-[16px] max-w-2xl mb-12">
          Therazo is being built one clinically justified product at a time — not launched all at
          once for the sake of a bigger catalogue. Each step earns its place in the complete
          routine.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {products.map((p) => (
            <div key={p.id} className="bg-white border border-cardline p-5 flex flex-col">
              <ProductImage src={p.productImage} alt={`${p.name} — ${p.descriptor}`} aspect='4 / 5' sizes="(max-width: 640px) 90vw, 220px" className="mb-4" background="bg-lgrey" />
              <p className="text-mgrey text-[10px] font-medium tracking-[0.15em] uppercase mb-1">
                {p.step} · {p.sku}
              </p>
              <h3 className="font-bold text-navy text-[15px] mb-3">{p.name}</h3>
              <div className="mt-auto">
                <ComingSoonBadge label={statusLabel(p)} outlined={p.status === 'launching-soon'} />
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* CLOSING MANIFESTO */}
      <AnimatedSection className="bg-navy px-6 md:px-20 py-20 md:py-[120px]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-extrabold text-[90px] sm:text-[110px] text-navy opacity-10 select-none leading-none block">
            &ldquo;
          </span>
          <p className="font-normal italic text-white text-[18px] sm:text-[22px] leading-[1.8] -mt-10 mb-8">
            We build products that work before they talk. We choose clarity over claims, evidence
            over excitement, and discipline over decoration. We are not a cosmetic brand that
            dabbles in science. We are a pharmacy-grade brand that has entered personal care — and
            we do not let anyone forget the difference.
          </p>
          <p className="text-bluelight text-[15px] leading-[1.8] mb-8">
            Therazo is a brand being built in public. Every formula is open to scrutiny. Every
            decision is documented. Every price is honest. We believe the brands that earn trust
            are the ones that deserve it.
          </p>
          <Link href="/for-doctors" className="text-white text-[13px] font-medium tracking-[0.1em] uppercase underline underline-offset-4">
            For dermatologists →
          </Link>
        </div>
      </AnimatedSection>
    </>
  )
}
