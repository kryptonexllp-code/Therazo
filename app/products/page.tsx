import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ComingSoonBadge from '@/components/ui/ComingSoonBadge'
import { ORDER_WHATSAPP_URL } from '@/lib/whatsapp'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'The Range',
  description: 'Five products. One complete Therazo routine — Daily Shield is available now, four more arrive on the same scientific standard.',
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
            <div className="relative h-[260px] w-full bg-offwhite">
              <Image
                src={p.productImage}
                alt={`${p.name} — ${p.descriptor}`}
                fill
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-mgrey text-[11px] tracking-[0.15em] uppercase mb-2">
                {p.sku} · {p.step}
              </p>
              {p.status === 'available' ? (
                <span className="inline-block bg-green text-white text-[10px] font-medium tracking-[0.12em] uppercase px-2.5 py-1 mb-3">
                  Available Now
                </span>
              ) : (
                <div className="mb-3">
                  <ComingSoonBadge timeline={p.timeline ?? 'Coming Soon'} />
                </div>
              )}
              <h2 className="font-extrabold text-navy text-[28px] md:text-[34px] mb-2">{p.name}</h2>
              <p className="text-mgrey text-[15px] mb-4">{p.descriptor} · {p.size}</p>
              <p className="text-dgrey text-[15px] leading-[1.7] mb-5">{p.tagline}</p>
              <p className="font-extrabold text-navy text-[24px] mb-6">₹{p.price}</p>
              {p.status === 'available' ? (
                <a
                  href={ORDER_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-navy text-white text-[11px] font-bold tracking-[0.15em] uppercase px-8 py-4 transition-transform duration-150 hover:scale-[1.02]"
                >
                  Order Now →
                </a>
              ) : (
                <Link
                  href={`/products/${p.id}`}
                  className="inline-block border border-navy text-navy text-[11px] font-bold tracking-[0.15em] uppercase px-8 py-4"
                >
                  Notify Me →
                </Link>
              )}
              <Link href={`/products/${p.id}`} className="block mt-4 text-navy text-[13px] underline underline-offset-4">
                View full details →
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-navy px-6 md:px-20 py-14 text-center">
        <p className="text-bluelight text-[14px] max-w-2xl mx-auto">
          Complete routine: Cleanse → Treat → Moisturise → Repair → Protect. All products in the
          Therazo range are formulated on the same scientific standard — with Ectoin as the common
          thread.
        </p>
      </section>
    </>
  )
}
