import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import GoldDivider from '@/components/ui/GoldDivider'
import IngredientLibrary from './IngredientLibrary'
import SkuCoverageMatrix from '@/components/SkuCoverageMatrix'

export const metadata: Metadata = {
  title: 'The Science',
  description:
    'The clinical foundation behind Therazo — the Active System, the 6 UV filters in Daily Shield, PA rating science, and the full ingredient library across every formula.',
}

const UV_FILTERS = [
  {
    name: 'Tinosorb S',
    type: 'Chemical',
    coverage: 'Both',
    range: 92,
    note: 'A next-generation photostable filter that does not degrade under sunlight, unlike octinoxate, which breaks down within hours of UV exposure and loses effectiveness through the day.',
  },
  {
    name: 'Tinosorb M',
    type: 'Hybrid',
    coverage: 'Both',
    range: 85,
    note: 'A particulate filter combining organic and inorganic UV absorption. More stable and broader-spectrum than single-mechanism filters like avobenzone.',
  },
  {
    name: 'DHHB',
    type: 'Chemical',
    coverage: 'UVA',
    range: 70,
    note: 'One of the most photostable UVA filters available, addressing the instability that limits avobenzone — DHHB does not require a stabiliser pairing to remain effective.',
  },
  {
    name: 'Ethylhexyl Triazone',
    type: 'Chemical',
    coverage: 'UVB',
    range: 60,
    note: 'A highly photostable UVB filter with strong substantivity — it resists being rinsed or sweated off compared to older UVB-only filters.',
  },
  {
    name: 'Zinc Oxide',
    type: 'Physical',
    coverage: 'Both',
    range: 95,
    note: 'True broad-spectrum mineral protection across the full UVA and UVB range, with a lower irritation profile than chemical-only formulations for sensitive and reactive skin.',
  },
  {
    name: 'Titanium Dioxide',
    type: 'Physical',
    coverage: 'UVB',
    range: 55,
    note: 'A stable, inert mineral filter that reinforces UVB defence and is well tolerated on compromised or post-procedure skin.',
  },
]

export default function SciencePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy px-6 md:px-20 pt-32 pb-16">
        <SectionLabel dark>The Science</SectionLabel>
        <h1 className="font-extrabold text-white text-[34px] sm:text-[44px] md:text-[52px] leading-[1.05] mb-6">
          The Science of Therazo
        </h1>
        <p className="text-bluelight text-[16px] max-w-2xl">
          Every formula is built on published clinical evidence, not trend cycles. This page is
          where we show our work — the active system, the UV filter stack, and the full ingredient
          library across every Therazo product.
        </p>
      </section>

      {/* ACTIVE SYSTEM — EXPANDED */}
      <AnimatedSection className="bg-lgrey px-6 md:px-20 py-20 md:py-[100px]">
        <SectionLabel>The Therazo Active System</SectionLabel>
        <h2 className="font-bold text-navy text-[28px] md:text-[40px] mb-3">
          Three signature actives. Across every formula.
        </h2>
        <p className="text-mgrey text-[16px] max-w-2xl mb-12">
          These are not generic ingredients. Each is chosen for a specific clinical reason,
          validated by published science, and present at a concentration that works.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="bg-navy p-8">
            <p className="text-gold font-bold text-[11px] tracking-[0.3em] uppercase mb-2">Ectoin</p>
            <p className="italic text-bluemuted text-[14px] mb-3">The Extremolyte</p>
            <p className="text-bluelight text-[11px] tracking-[0.1em] uppercase mb-5">
              Present in all 5 Therazo formulas
            </p>
            <GoldDivider className="mb-5" />
            <p className="text-bluelight text-[14px] leading-[1.65] mb-5">
              Ectoin is an extremolyte — a molecule that extremophile bacteria produce to survive
              salt lakes, desert heat, and hydrothermal vents. Formulated into skin care, it forms
              a protective hydration shell around cell membranes, helping them retain structure
              under UV exposure, urban pollution, and heat stress.
            </p>
            <p className="text-bluelight text-[14px] leading-[1.65] mb-5">
              Unlike antioxidants, which neutralise damage after it occurs, Ectoin is understood to
              help prevent the structural stress response before it compounds. It is the only
              active present across all five Therazo formulas — the brand&apos;s scientific
              signature.
            </p>
            <p className="text-gold font-bold text-[12px]">The science of skin protection.</p>
          </div>
          <div className="bg-white border border-cardline p-8">
            <p className="text-navy font-bold text-[11px] tracking-[0.3em] uppercase mb-2">
              Postbiotic Lysate
            </p>
            <p className="italic text-navy text-[14px] mb-3">The Microbiome Active</p>
            <p className="text-mgrey text-[11px] tracking-[0.1em] uppercase mb-5">
              Present in Gentle Daily Cleanser, Age Renewal Night Serum &amp; Barrier Repair Cream
            </p>
            <GoldDivider className="mb-5" />
            <p className="text-dgrey text-[14px] leading-[1.65] mb-5">
              A fermentation-derived postbiotic that supports a balanced skin microbiome. A
              disrupted microbiome is associated with a weakened skin barrier.
            </p>
            <p className="text-navy font-bold text-[12px]">The science of a balanced barrier.</p>
          </div>
          <div className="bg-white border border-cardline p-8">
            <p className="text-navy font-bold text-[11px] tracking-[0.3em] uppercase mb-2">
              Beta-Glucan
            </p>
            <p className="italic text-navy text-[14px] mb-3">The Immune-Support Active</p>
            <p className="text-mgrey text-[11px] tracking-[0.1em] uppercase mb-5">
              Present in Gentle Daily Cleanser &amp; Barrier Repair Cream
            </p>
            <GoldDivider className="mb-5" />
            <p className="text-dgrey text-[14px] leading-[1.65] mb-5">
              An oat-derived polysaccharide that supports the skin&apos;s own immune function and
              calms visible stress. It is used in pharmaceutical wound-care formulations for its
              role in accelerating the skin&apos;s natural repair signalling.
            </p>
            <p className="text-dgrey text-[14px] leading-[1.65] mb-5">
              Recognised as one of the fastest-growing active ingredients in clinical skincare,
              Beta-Glucan is added to Therazo&apos;s cleanser and barrier cream for extra soothing
              and repair support during periods of visible sensitivity.
            </p>
            <p className="text-navy font-bold text-[12px]">The science of resilience.</p>
          </div>
        </div>
      </AnimatedSection>

      {/* SKU COVERAGE MATRIX */}
      <AnimatedSection className="bg-white px-6 md:px-20 py-20 md:py-[100px]">
        <SectionLabel>SKU Coverage Matrix</SectionLabel>
        <h2 className="font-bold text-navy text-[28px] md:text-[36px] mb-3">
          Which product contains which active.
        </h2>
        <p className="text-mgrey text-[15px] max-w-2xl mb-10">
          Presence and absence only — never concentrations. Concentrations are shared exclusively
          with dermatologists on the clinical portal.
        </p>
        <SkuCoverageMatrix />
      </AnimatedSection>

      {/* 6 UV FILTERS */}
      <AnimatedSection className="bg-lgrey px-6 md:px-20 py-20 md:py-[100px]">
        <SectionLabel>Daily Shield</SectionLabel>
        <h2 className="font-bold text-navy text-[28px] md:text-[40px] mb-3">
          The 6 UV Filters in Daily Shield
        </h2>
        <p className="text-mgrey text-[16px] max-w-2xl mb-12">
          A six-filter system chosen for photostability and true broad-spectrum coverage, rather
          than relying on a single-filter approach, which limits the breadth of UV coverage any
          one formula can achieve.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {UV_FILTERS.map((f) => (
            <div key={f.name} className="bg-white border border-cardline p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="border border-navy text-navy text-[10px] font-medium tracking-[0.1em] uppercase px-2.5 py-1">
                  {f.type}
                </span>
                <span className="border border-cardline text-mgrey text-[10px] font-medium tracking-[0.1em] uppercase px-2.5 py-1">
                  {f.coverage}
                </span>
              </div>
              <h3 className="font-bold text-navy text-[16px] mb-3">{f.name}</h3>
              <div className="h-2 bg-lgrey border border-cardline mb-4">
                <div className="h-full bg-gold" style={{ width: `${f.range}%` }} />
              </div>
              <p className="text-dgrey text-[13px] leading-[1.6]">{f.note}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* PA RATING EXPLAINER */}
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

      {/* INGREDIENT LIBRARY */}
      <AnimatedSection className="bg-white px-6 md:px-20 py-20 md:py-[100px]">
        <SectionLabel>Ingredient Library</SectionLabel>
        <h2 className="font-bold text-navy text-[28px] md:text-[40px] mb-3">
          Every active. Across every formula.
        </h2>
        <p className="text-mgrey text-[16px] max-w-2xl mb-12">
          Filter by function to explore the complete Therazo ingredient library — names and
          clinical functions only.
        </p>
        <IngredientLibrary />
      </AnimatedSection>
    </>
  )
}
