import Link from 'next/link'
import ProductImage from '@/components/ui/ProductImage'
import { formatPrice, statusLabel, type Product } from '@/lib/products'
import ComingSoonBadge from './ComingSoonBadge'
import UsageBadge from './UsageBadge'
import Parallax from '@/components/Parallax'

export default function ProductCard({ product }: { product: Product }) {
  const launchingSoon = product.status === 'launching-soon'
  return (
    <Link
      href={`/products/${product.id}`}
      className={`group relative flex flex-col bg-white border ${
        launchingSoon ? 'border-2 border-navy' : 'border-cardline'
      } p-5 transition-transform duration-200 ease-out hover:-translate-y-1`}
    >
      <Parallax distance={6} className="mb-4">
        <ProductImage
          src={product.productImage}
          alt={`${product.name} — ${product.descriptor}`}
          aspect="4 / 5"
          sizes="(max-width: 640px) 90vw, 220px"
          badge={<UsageBadge usage={product.usage} />}
        />
      </Parallax>
      <div className="mb-3">
        <ComingSoonBadge label={statusLabel(product)} outlined={launchingSoon} />
      </div>
      <p className="text-[11px] text-mgrey tracking-[0.1em] uppercase mb-1">
        {product.sku} · {product.step}
      </p>
      <h3 className={`font-bold text-navy mb-2 ${launchingSoon ? 'text-[16px]' : 'text-[14px]'}`}>
        {product.name}
      </h3>
      {product.spf && (
        <span className="inline-block border border-navy text-navy text-[10px] font-bold tracking-[0.1em] px-2 py-1 w-fit mb-2">
          {product.spf}
        </span>
      )}
      <ul className="text-[11px] text-mgrey leading-relaxed mb-3 space-y-0.5">
        {(product.frontOfPack ?? product.actives.slice(0, 3).map((a) => a.name)).map((name) => (
          <li key={name}>{name}</li>
        ))}
        {product.activesPending && <li>Full active profile to be confirmed</li>}
      </ul>
      <p className={`font-extrabold text-navy mb-3 mt-auto ${launchingSoon ? 'text-[20px]' : 'text-[18px]'}`}>
        <span className="text-mgrey font-medium text-[10px] uppercase tracking-[0.1em] mr-1.5">MRP</span>
        {formatPrice(product.price)}
      </p>
      <span
        className={`text-center text-[11px] font-bold tracking-[0.15em] uppercase py-3 ${
          launchingSoon ? 'bg-navy text-white' : 'border border-navy text-navy'
        }`}
      >
        Join Waitlist →
      </span>
    </Link>
  )
}
