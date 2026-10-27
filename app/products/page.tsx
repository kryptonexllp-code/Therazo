import type { Metadata } from 'next'
import Link from 'next/link'
import ProductImage from '@/components/ui/ProductImage'
import ComingSoonBadge from '@/components/ui/ComingSoonBadge'
import WaitlistButton from '@/components/WaitlistButton'
import UsageBadge from '@/components/ui/UsageBadge'
import { ROUTINE_SUMMARY } from '@/content/routine'
import { formatPrice, products, statusLabel } from '@/lib/products'

export const metadata: Metadata = {
  title: 'The Range',
  description: 'Five products, one scientific standard. Daily Shield SPF 50 PA++++ is launching soon; four more are coming.',
}

export default function ProductsPage() {
  return (
    <>
      <section className="bg-navy px-6 md:px-20 pt-32 pb-16 text-center min-h-[200px] flex flex-col justify-center">
        <h1 className="font-extrabold text-white text-[32px] md:text-[40px] mb-2">The Therazo Range</h1>
        <p className="text-bluelight text-[15px]">Five products. One scientific standard.</p>
      </section>

      <nav className="sticky top-16 z-30 bg-white border-b border-cardline overflow-x-auto">
        <div className="flex px-6 md:px-20 gap-8 py-4 whitespace-nowrap">
          {products.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="text-navy text-[11px] font-medium tracking-[0.1em] uppercase">
              {p.sku} {p.name}
            </a>
          ))}
        </div>
      </nav>

      {products.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`px-6 md:px-20 py-16 ${i % 2 === 0 ? 'bg-white' : 'bg-lgrey'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ProductImage src={p.productImage} alt={`${p.name} — ${p.descriptor}`} aspect='1 / 1' sizes="(max-width: 1024px) 90vw, 500px" className="max-h-[420px]" background="bg-lgrey" badge={<UsageBadge usage={p.usage} />} />
            <div>
              <p className="text-mgrey text-[11px] tracking-[0.15em] uppercase mb-2">
                {p.sku} · {p.step}
              </p>
              <div className="mb-3">
                <ComingSoonBadge label={statusLabel(p)} outlined={p.status === 'launching-soon'} />
              </div>
              <h2 className="font-extrabold text-navy text-[28px] md:text-[34px] mb-2">{p.name}</h2>
              <p className="text-mgrey text-[15px] mb-4">{p.descriptor} · {p.size}</p>
              <p className="text-dgrey text-[15px] leading-[1.7] mb-5">{p.tagline}</p>
              <p className="font-extrabold text-navy text-[24px] mb-6">
                <span className="text-mgrey font-medium text-[11px] uppercase tracking-[0.1em] mr-2">MRP</span>
                {formatPrice(p.price)}
              </p>
              <WaitlistButton
                productId={p.id}
                className={`inline-block text-[11px] font-bold tracking-[0.15em] uppercase px-8 py-4 transition-transform duration-150 hover:scale-[1.02] ${
                  p.status === 'launching-soon' ? 'bg-navy text-white' : 'border border-navy text-navy'
                }`}
              >
                Join the Waitlist →
              </WaitlistButton>
              <Link href={`/products/${p.id}`} className="block mt-4 text-navy text-[13px] underline underline-offset-4">
                View full details →
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-navy px-6 md:px-20 py-14 text-center">
        <p className="text-bluelight text-[14px] max-w-2xl mx-auto">
          {ROUTINE_SUMMARY} All products in the Therazo range are formulated to the same
          scientific standard.
        </p>
      </section>
    </>
  )
}
