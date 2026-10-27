import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import Rule from '@/components/ui/Rule'
import IngredientLibrary from './IngredientLibrary'
import SkuCoverageMatrix from '@/components/SkuCoverageMatrix'
import UvFilterBands from '@/components/UvFilterBands'

export const metadata: Metadata = {
  title: 'The Science',
  description:
    'The science behind Therazo — the active system, the six UV filter classes in Daily Shield, PA rating basics, and the ingredient library across the range.',
}


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
          Every active is chosen from published research, not trend cycles. This page is where we
          show our work — the active system, the UV filter classes, and the ingredient library
          across the Therazo range.
        </p>
      </section>

      {/* ACTIVE SYSTEM — EXPANDED */}
      <AnimatedSection className="bg-lgrey px-6 md:px-20 py-20 md:py-[100px]">
        <SectionLabel>The Therazo Active System</SectionLabel>
        <h2 className="font-bold text-navy text-[28px] md:text-[40px] mb-3">
          Three signature actives across the range.
        </h2>
        <p className="text-mgrey text-[16px] max-w-2xl mb-12">
          Each is chosen for a specific reason and listed with what it does in the formula —
          nothing more.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="bg-navy p-8">
            <p className="text-white font-bold text-[11px] tracking-[0.3em] uppercase mb-2">Ectoin</p>
            <p className="italic text-bluemuted text-[14px] mb-3">The Extremolyte</p>
            <p className="text-bluelight text-[11px] tracking-[0.1em] uppercase mb-5">
              In Daily Shield, Gentle Daily Cleanser, Barrier Repair Cream &amp; Clarity Serum
            </p>
            <Rule dark className="mb-5" />
            <p className="text-bluelight text-[14px] leading-[1.65] mb-5">
              Ectoin is an extremolyte — a molecule that extremophile bacteria produce to survive
              salt lakes, desert heat and hydrothermal vents. In skin care, Ectoin draws water to
              skin cells and forms a stabilising shell around them, which supports hydration
              retention.
            </p>
            <p className="text-bluelight text-[14px] leading-[1.65] mb-5">
              It works in the outer layers of the skin. It does not absorb UV — in Daily Shield,
              UV protection comes from the six filters — and it does not reach the dermis.
            </p>
            <p className="text-white font-bold text-[12px]">The science of holding water.</p>
            <Link href="/science/ectoin" className="inline-block mt-4 text-white text-[12px] font-medium underline underline-offset-4">
              More on Ectoin →
            </Link>
          </div>
          <div className="bg-white border border-cardline p-8">
            <p className="text-navy font-bold text-[11px] tracking-[0.3em] uppercase mb-2">
              Postbiotic Lysate
            </p>
            <p className="italic text-navy text-[14px] mb-3">The Microbiome Active</p>
            <p className="text-mgrey text-[11px] tracking-[0.1em] uppercase mb-5">
              Present in Gentle Daily Cleanser, Age Renewal Night Serum &amp; Barrier Repair Cream
            </p>
            <Rule className="mb-5" />
            <p className="text-dgrey text-[14px] leading-[1.65] mb-5">
              A fermentation-derived postbiotic that supports a balanced skin microbiome. A
              disrupted microbiome is associated with a weakened skin barrier.
            </p>
            <p className="text-navy font-bold text-[12px]">The science of a balanced barrier.</p>
            <Link href="/science/postbiotic-lysate" className="inline-block mt-4 text-navy text-[12px] font-medium underline underline-offset-4">
              Postbiotic Lysate page →
            </Link>
          </div>
          <div className="bg-white border border-cardline p-8">
            <p className="text-navy font-bold text-[11px] tracking-[0.3em] uppercase mb-2">
              Beta-Glucan
            </p>
            <p className="italic text-navy text-[14px] mb-3">The Soothing Active</p>
            <p className="text-mgrey text-[11px] tracking-[0.1em] uppercase mb-5">
              Present in Gentle Daily Cleanser &amp; Barrier Repair Cream
            </p>
            <Rule className="mb-5" />
            <p className="text-dgrey text-[14px] leading-[1.65] mb-5">
              An oat-derived polysaccharide, added to Therazo&apos;s cleanser and barrier cream to
              help calm skin during periods of visible sensitivity.
            </p>
            <p className="text-navy font-bold text-[12px]">The science of a calmer barrier.</p>
            <Link href="/science/beta-glucan" className="inline-block mt-4 text-navy text-[12px] font-medium underline underline-offset-4">
              Beta-Glucan page →
            </Link>
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
          Presence and absence only. Concentrations and full formulation data are shared with
          clinicians on the doctors portal.
        </p>
        <SkuCoverageMatrix />
      </AnimatedSection>

      {/* 6 UV FILTERS */}
      <AnimatedSection className="bg-lgrey px-6 md:px-20 py-20 md:py-[100px]">
        <SectionLabel>Daily Shield</SectionLabel>
        <h2 className="font-bold text-navy text-[28px] md:text-[40px] mb-3">
          The six UV filter classes in Daily Shield
        </h2>
        <p className="text-mgrey text-[16px] max-w-2xl mb-12">
          Six filters from organic and mineral classes, chosen for stability in sunlight and
          for coverage across UVB and both parts of UVA. The chart shows which wavebands each
          class works in — it is not a measured result for the finished product.
        </p>
        <div className="bg-white border border-cardline p-6 max-w-5xl">
          <UvFilterBands detailed />
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
          <div className="border-2 border-gold p-6 text-center">
            <p className="text-gold font-bold text-[18px] mb-1">PA++++</p>
            <p className="text-bluemuted text-[11px] uppercase tracking-[0.1em] mb-3">PPD 16+</p>
            <p className="text-white text-[12px] font-medium">Very high — Daily Shield&apos;s designation</p>
          </div>
        </div>
      </AnimatedSection>

      {/* INGREDIENT LIBRARY */}
      <AnimatedSection className="bg-white px-6 md:px-20 py-20 md:py-[100px]">
        <SectionLabel>Ingredient Library</SectionLabel>
        <h2 className="font-bold text-navy text-[28px] md:text-[40px] mb-3">
          Every active across the range.
        </h2>
        <p className="text-mgrey text-[16px] max-w-2xl mb-12">
          Filter by function to explore the complete Therazo ingredient library — names and
          what each one does.
        </p>
        <IngredientLibrary />
      </AnimatedSection>
    </>
  )
}
