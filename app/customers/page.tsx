import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Ticker from '@/components/Ticker'
import VideoShowcase from '@/components/VideoShowcase'
import HeroScanner from '@/components/HeroScanner'
import OrderButton from '@/components/OrderButton'
import AnimatedSection from '@/components/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import GoldDivider from '@/components/ui/GoldDivider'
import ProductCard from '@/components/ui/ProductCard'
import StatCounter from '@/components/StatCounter'
import WaitlistForm from '@/components/WaitlistForm'
import { products, comingSoonProducts } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Science. Defined. | Pharmacy-Grade Skincare India',
  description:
    'Therazo is a pharmacy-grade unisex skincare brand formulated for Indian skin. SPF 50 PA++++ Daily Shield — 6 UV filters, Ectoin, Niacinamide, Ceramide Complex. Every claim documented.',
}

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative flex flex-col md:flex-row min-h-[420px] md:h-[100svh] md:min-h-[600px] pt-16 md:pt-0">
        <div className="flex flex-col justify-center bg-navy px-6 sm:px-10 md:px-16 py-14 md:py-0 md:w-[48%]">
          <p className="text-bluemuted text-[10px] font-medium tracking-[0.3em] uppercase mb-6">
            Pharmacy-Grade Skincare · India
          </p>
          <h1 className="font-extrabold text-white text-[44px] sm:text-[64px] lg:text-[92px] leading-[0.9] mb-7">
            SCIENCE.
            <br />
            DEFINED.
          </h1>
          <p className="text-bluelight text-[16px] leading-[1.7] max-w-[380px] mb-10">
            Formulated for Indian skin and climate. Every claim documented. Every concentration
            specific. Every ingredient chosen for a reason.
          </p>
          <div className="flex flex-col gap-3 items-start">
            <Link
              href="/science"
              className="border-[1.5px] border-white text-white text-[11px] font-medium tracking-[0.2em] uppercase px-8 py-[15px] transition-colors duration-200 hover:bg-white hover:text-navy"
            >
              Explore the Science
            </Link>
            <OrderButton className="border-[1.5px] border-white text-white text-[11px] font-medium tracking-[0.2em] uppercase px-8 py-[15px] transition-colors duration-200 hover:bg-white hover:text-navy">
              Order Daily Shield — ₹699 →
            </OrderButton>
          </div>
        </div>
        <div className="relative bg-[#E8EFF8] md:w-[52%] h-[280px] md:h-auto">
          <Image
            src="/images/hero-daily-shield-clinical.png"
            alt="Daily Shield SPF Moisturizer on a stone slab with molecular props"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 52vw"
            className="object-cover object-right"
          />
          <HeroScanner />
        </div>
      </section>

      {/* SECTION 2 — TICKER */}
      <Ticker />

      {/* SEE IT IN ACTION — AI video placeholders */}
      <VideoShowcase />

      {/* SECTION 3 — BRAND POSITIONING */}
      <AnimatedSection className="relative bg-offwhite px-6 md:px-20 py-20 md:py-[120px] overflow-hidden">
        <div className="hidden lg:block absolute -bottom-6 -right-6 h-40 w-40 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/logos/logo-mono-light.png"
            alt=""
            fill
            sizes="160px"
            className="object-contain mix-blend-multiply opacity-70"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-14">
          <div>
            <SectionLabel>Why Therazo Is Different</SectionLabel>
            <h2 className="font-bold text-navy text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.1]">
              We are not a cosmetic brand that dabbles in science.
            </h2>
            <p className="text-dgrey text-[16px] leading-[1.75] max-w-[520px] mt-6">
              We are a pharmacy-grade brand. Every ingredient in a Therazo formula has a documented
              reason to be there, at a stated concentration. We
              inform before we sell. We publish our manufacturer. We share full clinical data with
              dermatologists. And we price our products so that pharmacy-grade skincare is
              accessible to the Indian consumer who deserves it.
            </p>
            <GoldDivider className="mt-8" />
            <p className="font-normal italic text-navy text-[18px] mt-6 max-w-[480px]">
              &ldquo;Trust is earned through what is inside the product — not what is written on the
              packaging.&rdquo;
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            <StatCounter value="95" label="Out of 100 · 6-brand formulation benchmark" />
            <StatCounter value="6" label="Next-gen UV filters" duration={0.6} />
            <StatCounter value="9" label="Skin actives in one step" duration={0.7} />
            <StatCounter value="699" label="Pharmacy-grade, honest price (₹)" />
          </div>
        </div>
      </AnimatedSection>

      {/* SECTION 4 — FOUR BRAND PILLARS */}
      <AnimatedSection className="bg-lgrey px-6 md:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              n: '01',
              title: 'Evidence before trends',
              body: 'Science informs every formulation decision. Not market trend reports. Not what competitors are doing. Published clinical evidence, stated concentrations, documented reasons.',
            },
            {
              n: '02',
              title: 'Full transparency',
              body: 'We publish our manufacturer address, our formulation reference, and complete clinical data for dermatologists. Trust requires information — not trust me.',
            },
            {
              n: '03',
              title: 'Purposeful simplicity',
              body: 'The best skincare routine is the one you actually follow. Every Therazo product is designed to make the right habit frictionless and consistent.',
            },
            {
              n: '04',
              title: 'Skin health for everyone',
              body: 'Formulated for diverse Indian skin types, tones, and lifestyles. Unisex by design. Pharmacy-grade does not have a gender.',
            },
          ].map((p) => (
            <div key={p.n} className="relative bg-white border border-cardline border-t-[3px] border-t-gold p-8 overflow-hidden">
              <span className="absolute -top-2 right-3 font-extrabold text-[64px] text-lgrey leading-none select-none">
                {p.n}
              </span>
              <h3 className="relative font-bold text-navy text-[16px] mb-3">{p.title}</h3>
              <p className="relative text-dgrey text-[13px] leading-[1.7]">{p.body}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* SECTION 5 — ALL 5 PRODUCTS */}
      <AnimatedSection className="bg-white px-6 md:px-20 py-20 md:py-[100px]">
        <SectionLabel>The Therazo Range</SectionLabel>
        <h2 className="font-bold text-navy text-[32px] md:text-[44px] mb-3">
          Five products. One complete routine.
        </h2>
        <p className="text-mgrey text-[16px] max-w-2xl mb-12">
          Every Therazo formula is built to the same scientific standard, with Ectoin as the
          signature active across the range.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <p className="text-center text-mgrey text-[12px] mt-10">
          Morning: Cleanse (02) → Treat (05) → Protect (01) · Night: Cleanse (02) → Renew (03) → Repair (04)
        </p>
        <p className="text-center mt-4">
          <Link href="/products" className="text-navy text-[13px] font-medium underline underline-offset-4">
            View all products →
          </Link>
        </p>
      </AnimatedSection>

      {/* SECTION 6 — BRAND MANIFESTO */}
      <AnimatedSection className="bg-navy px-6 md:px-20 py-20 md:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-14">
          <div>
            <SectionLabel dark>The Therazo Manifesto</SectionLabel>
            <h2 className="font-extrabold text-white text-[36px] sm:text-[48px] lg:text-[56px] leading-[0.95]">
              TO HEAL AND
              <br />
              TO PRESERVE.
            </h2>
            <p className="text-bluelight text-[15px] leading-[1.7] mt-6">
              THERAZO™ is derived from two Ancient Greek words — Therapeutikos, &ldquo;to heal, to
              care for, to restore&rdquo;, and Sozo, &ldquo;to save, to preserve, to protect from
              harm&rdquo;. This is not a naming exercise. It is a commitment.
            </p>
            <p className="text-bluelight text-[15px] leading-[1.7] mt-5">
              Skincare should not require a biochemistry degree to navigate. It should be honest
              about what it contains, clear about what each ingredient does, and confident enough
              to publish the evidence rather than hide behind the packaging. Therazo is an honest
              attempt to bring skincare the science it has always deserved — formulated carefully,
              communicated plainly, and built for people who want to know what they are actually
              putting on their skin.
            </p>
            <Link href="/about" className="inline-block text-gold text-[13px] font-medium mt-6">
              Read our full story →
            </Link>
          </div>
          <div className="relative">
            <span className="absolute -top-10 -left-2 font-extrabold text-[100px] sm:text-[120px] text-gold opacity-15 select-none leading-none">
              &ldquo;
            </span>
            <p className="relative font-normal italic text-white text-[17px] sm:text-[19px] leading-[1.8] max-w-[580px]">
              We build products that work before they talk. We choose clarity over claims, evidence
              over excitement, and discipline over decoration. We are not a cosmetic brand that
              dabbles in science. We are a pharmacy-grade brand that has entered personal care —
              and we do not let anyone forget the difference.
            </p>
            <p className="text-bluemuted text-[10px] font-medium tracking-[0.35em] uppercase mt-7">
              — The Therazo Manifesto
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* SECTION 7 — ACTIVE SYSTEM */}
      <AnimatedSection className="bg-lgrey px-6 md:px-20 py-20 md:py-[100px]">
        <SectionLabel>The Therazo Active System</SectionLabel>
        <h2 className="font-bold text-navy text-[28px] md:text-[40px] mb-3">
          Three signature actives across the range.
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
              In Daily Shield, Gentle Daily Cleanser, Barrier Repair Cream &amp; Clarity Serum
            </p>
            <GoldDivider className="mb-5" />
            <p className="text-bluelight text-[14px] leading-[1.65] mb-5">
              Ectoin draws water to skin cells and forms a stabilising shell around them, which
              supports hydration retention. It works in the outer layers of the skin — UV
              protection in Daily Shield comes from its six filters, not from Ectoin.
            </p>
            <p className="text-gold font-bold text-[12px]">The science of holding water.</p>
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
            <p className="italic text-navy text-[14px] mb-3">The Soothing Active</p>
            <p className="text-mgrey text-[11px] tracking-[0.1em] uppercase mb-5">
              Present in Gentle Daily Cleanser &amp; Barrier Repair Cream
            </p>
            <GoldDivider className="mb-5" />
            <p className="text-dgrey text-[14px] leading-[1.65] mb-5">
              An oat-derived polysaccharide, added to Therazo&apos;s cleanser and barrier cream to
              help calm skin during periods of visible sensitivity.
            </p>
            <p className="text-navy font-bold text-[12px]">The science of a calmer barrier.</p>
          </div>
        </div>
        <p className="text-center italic text-mgrey text-[13px] mt-10 max-w-2xl mx-auto">
          Ectoin is the signature active of the Therazo range — the common thread in the
          formulas confirmed so far.
        </p>
      </AnimatedSection>

      {/* SECTION 8 — ORDER + WAITLIST */}
      <AnimatedSection className="bg-offwhite px-6 md:px-20 py-20 md:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-14">
          <div>
            <SectionLabel>Order Now</SectionLabel>
            <h2 className="font-bold text-navy text-[28px] md:text-[40px] mb-5">
              Daily Shield is available now.
            </h2>
            <p className="text-dgrey text-[16px] leading-[1.7] mb-7">
              Order via WhatsApp — we respond within 2 hours. Payment link shared on WhatsApp.
              Pan-India delivery via courier. Free delivery on orders above ₹499.
            </p>
            <OrderButton className="bg-navy text-gold font-bold text-[13px] tracking-[0.15em] uppercase px-8 py-4 transition-transform duration-150 hover:scale-[1.02]">
              Order via WhatsApp — ₹699
            </OrderButton>
            <p className="text-mgrey text-[12px] mt-4">
              3–6 business day delivery · Pan-India · Fragile packaging for skincare
            </p>
            <GoldDivider className="my-8" />
            <p className="text-navy text-[12px] font-medium tracking-[0.1em] uppercase mb-4">
              Upcoming products
            </p>
            <ul className="space-y-3">
              {comingSoonProducts.map((p) => (
                <li key={p.id} className="flex items-center justify-between text-[13px] border-b border-cardline pb-3">
                  <span className="text-dgrey">
                    {p.name} · <span className="text-mgrey">{p.timeline}</span>
                  </span>
                  <Link href={`/products/${p.id}`} className="text-navy font-medium underline underline-offset-4">
                    Notify me
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-navy text-[20px] mb-3">Join the Waitlist</h3>
            <p className="text-dgrey text-[14px] mb-6">
              Get early access, launch alerts, and ingredient education from the science behind
              Therazo.
            </p>
            <WaitlistForm />
            <p className="text-mgrey text-[13px] text-center max-w-[480px] mx-auto mt-4">
              Therazo is built on a decade of pharmacy expertise from Dr. Cure Pharmacy, Hyderabad
              — now expanding into a pharmacy-grade healthcare ecosystem. The same rigour that
              guides pharmaceutical dispensing guides every Therazo formula.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-mgrey text-[12px]">
              <span>Launched 2026</span>
              <span>Made in India</span>
              <span>care@therazo.co</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* SECTION 9 — DERMATOLOGIST STRIP */}
      <AnimatedSection className="bg-navy px-6 md:px-20 py-14 md:py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-0">
          <div className="lg:w-[60%]">
            <SectionLabel dark>For Dermatologists</SectionLabel>
            <p className="font-bold text-white text-[22px] md:text-[24px] mb-3">
              We are not seeking endorsements. We are seeking honest clinical dialogue.
            </p>
            <p className="text-bluelight text-[14px] max-w-xl">
              Therazo shares complete formulation data with clinicians — concentrations,
              mechanisms and manufacturer details. Register for a sample kit for independent
              evaluation.
            </p>
          </div>
          <div className="lg:w-[40%] flex flex-col sm:flex-row lg:justify-end gap-4 w-full">
            <Link
              href="/for-doctors"
              className="text-center border border-white text-white text-[11px] font-medium tracking-[0.15em] uppercase px-6 py-3 transition-colors duration-200 hover:bg-white hover:text-navy"
            >
              Access Clinical Data →
            </Link>
            <Link
              href="/for-doctors#sample-request"
              className="text-center border border-white text-white text-[11px] font-medium tracking-[0.15em] uppercase px-6 py-3 transition-colors duration-200 hover:bg-white hover:text-navy"
            >
              Request a Sample →
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
