import Link from 'next/link'
import ProductImage from '@/components/ui/ProductImage'
import { formatPrice, type Product } from '@/lib/products'
import ComingSoonBadge from './ComingSoonBadge'

export default function ProductCard({ product }: { product: Product }) {
  const available = product.status === 'available'
  return (
    <Link
      href={`/products/${product.id}`}
      className={`group relative flex flex-col bg-white border ${
        available ? 'border-2 border-navy' : 'border-cardline'
      } p-5 transition-transform duration-200 ease-out hover:-translate-y-1`}
    >
      <div className="absolute top-3 left-3 z-10">
        {available ? (
          <span className="inline-block bg-green text-white text-[10px] font-medium tracking-[0.12em] uppercase px-2.5 py-1">
            Available Now
          </span>
        ) : (
          <ComingSoonBadge timeline={product.timeline ?? 'Coming Soon'} />
        )}
      </div>
      <ProductImage src={product.productImage} alt={`${product.name} — ${product.descriptor}`} aspect='4 / 5' sizes="(max-width: 640px) 90vw, 220px" className="mb-4 mt-8" background="bg-lgrey" />
      <p className="text-[11px] text-mgrey tracking-[0.1em] uppercase mb-1">
        {product.sku} · {product.step}
      </p>
      <h3 className={`font-bold text-navy mb-2 ${available ? 'text-[16px]' : 'text-[14px]'}`}>
        {product.name}
      </h3>
      {available && product.spf && (
        <span className="inline-block bg-gold text-navy text-[10px] font-bold tracking-[0.1em] px-2 py-1 w-fit mb-2">
          {product.spf}
        </span>
      )}
      <ul className="text-[11px] text-mgrey leading-relaxed mb-3 space-y-0.5">
        {product.actives.slice(0, 3).map((a) => (
          <li key={a.name}>{a.name}</li>
        ))}
      </ul>
      <p className={`font-extrabold text-navy mb-3 mt-auto ${available ? 'text-[20px]' : 'text-[18px]'}`}>
        {formatPrice(product.price)}
      </p>
      {available ? (
        <span className="text-center bg-navy text-white text-[11px] font-bold tracking-[0.15em] uppercase py-3">
          Order Now →
        </span>
      ) : (
        <span className="text-center border border-navy text-navy text-[11px] font-bold tracking-[0.15em] uppercase py-3">
          Join Waitlist →
        </span>
      )}
    </Link>
  )
}
