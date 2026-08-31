import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import WaitlistForm from '@/components/WaitlistForm'
import AnimatedSection from '@/components/AnimatedSection'
import SectionLabel from './SectionLabel'
import GoldDivider from './GoldDivider'
import { dailyShield, type Product } from '@/lib/products'
import { ORDER_WHATSAPP_URL } from '@/lib/whatsapp'

export function buildComingSoonMetadata(product: Product): Metadata {
  return {
    title: `${product.name} — ${product.descriptor} | Therazo`,
    description: `${product.tagline} Arriving ${product.timeline}. ₹${product.price} estimated launch price. Join the waitlist.`,
  }
}

export default function ProductComingSoonPage({ product }: { product: Product }) {
  return (
    <>
      <section className="bg-navy px-6 md:px-20 pt-32 pb-16 text-center">
        <span className="inline-block border border-white/40 text-white text-[10px] font-medium tracking-[0.2em] uppercase px-4 py-2 mb-6">
          Arriving {product.timeline}
        </span>
        <h1 className="font-extrabold text-white text-[32px] sm:text-[40px] md:text-[44px] mb-2">
          {product.name}
        </h1>
        <p className="text-mgrey text-[16px] mb-1">
          {product.descriptor} · {product.size}
        </p>
        <p className="text-gold font-bold text-[20px] mb-8">₹{product.price} · Estimated launch price</p>
        <div className="max-w-md mx-auto">
          <WaitlistForm dark productId={product.id} />
        </div>
        <p className="text-bluemuted text-[11px] mt-4">One email when this product launches. No spam.</p>
      </section>

      <AnimatedSection className="bg-white px-6 md:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div className="relative h-[240px] w-full bg-lgrey">
            <Image
              src={product.productImage}
              alt={`${product.name} — ${product.descriptor}`}
              fill
              sizes="(max-width: 1024px) 90vw, 500px"
              className="object-contain"
            />
          </div>
          <div>
            <SectionLabel>About This Product</SectionLabel>
            {product.about?.map((para, i) => (
              <p key={i} className="text-dgrey text-[15px] leading-[1.75] mb-4">
                {para}
              </p>
            ))}

            <h3 className="font-bold text-navy text-[16px] mt-8 mb-4">Key Actives</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {product.actives.map((a) => (
                <div key={a.name} className="border-l-2 border-gold pl-3">
                  <p className="font-bold text-navy text-[13px]">{a.name}</p>
                  <p className="text-mgrey text-[12px]">{a.function}</p>
                </div>
              ))}
            </div>

            <div className="bg-navy p-6 mb-8">
              <p className="text-bluelight text-[13px] leading-[1.6] mb-3">
                This page shows the clinical function of each active. For complete data — full
                concentrations and mechanisms — visit the dermatologist portal.
              </p>
              <Link href="/for-doctors" className="text-gold text-[12px] font-bold">
                Access Full Clinical Data →
              </Link>
            </div>

            <div className="bg-lgrey border border-cardline p-6">
              <p className="text-navy text-[12px] font-medium tracking-[0.1em] uppercase mb-4">
                Available now in the Therazo range
              </p>
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 bg-white">
                  <Image
                    src={dailyShield.productImage}
                    alt="Daily Shield"
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-bold text-navy text-[14px]">{dailyShield.name}</p>
                  <p className="text-mgrey text-[12px]">{dailyShield.spf} · ₹{dailyShield.price}</p>
                </div>
              </div>
              <a
                href={ORDER_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-navy text-white text-[11px] font-bold tracking-[0.15em] uppercase py-3 mt-4"
              >
                Order Daily Shield →
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-lgrey px-6 md:px-20 py-16">
        <SectionLabel>What To Expect</SectionLabel>
        <h2 className="font-bold text-navy text-[26px] md:text-[32px] mb-10">
          When {product.name} launches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p className="text-navy font-bold text-[13px] tracking-[0.1em] uppercase mb-2">Skin Concern</p>
            <GoldDivider className="mb-3" />
            <p className="text-dgrey text-[14px] leading-[1.6]">{product.concern}</p>
          </div>
          <div>
            <p className="text-navy font-bold text-[13px] tracking-[0.1em] uppercase mb-2">Routine Fit</p>
            <GoldDivider className="mb-3" />
            <p className="text-dgrey text-[14px] leading-[1.6]">{product.routineFit}</p>
          </div>
          <div>
            <p className="text-navy font-bold text-[13px] tracking-[0.1em] uppercase mb-2">Shared Actives</p>
            <GoldDivider className="mb-3" />
            <p className="text-dgrey text-[14px] leading-[1.6]">{product.sharedActives}</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white px-6 md:px-20 py-16 text-center">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {product.claims?.map((c) => (
            <span key={c} className="border border-cardline text-mgrey text-[11px] font-medium tracking-[0.05em] px-4 py-2">
              {c}
            </span>
          ))}
        </div>
        <h2 className="font-bold text-navy text-[24px] mb-6">Be first when {product.name} launches.</h2>
        <div className="max-w-md mx-auto">
          <WaitlistForm productId={product.id} />
        </div>
      </AnimatedSection>
    </>
  )
}
