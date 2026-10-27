'use client'

import { useEffect } from 'react'
import { useWaitlistModal } from './WaitlistModalContext'
import WaitlistForm from './WaitlistForm'
import ProductImage from './ui/ProductImage'
import { formatPrice, getProduct, statusLabel } from '@/lib/products'
import { waitlistWhatsAppUrl } from '@/lib/whatsapp'

export default function WaitlistModal() {
  const { isOpen, productId, closeWaitlist } = useWaitlistModal()
  const product = getProduct(productId)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeWaitlist()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeWaitlist])

  if (!isOpen || !product) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center sm:p-4"
      onClick={closeWaitlist}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
        className="bg-white border-2 border-navy w-full h-full sm:h-auto sm:max-h-[92vh] sm:max-w-[480px] flex flex-col overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-navy flex items-center justify-between px-5 py-4">
          <h2 id="waitlist-title" className="text-white font-bold text-[14px] tracking-[0.05em] uppercase">
            {product.name} — {statusLabel(product)}
          </h2>
          <button
            aria-label="Close"
            onClick={closeWaitlist}
            className="text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <div className="p-5 flex items-center gap-4 border-b border-cardline">
          <ProductImage src={product.productImage} alt={product.name} aspect="1 / 1" sizes="64px" className="w-16 shrink-0" />
          <div>
            <p className="font-bold text-navy text-[14px]">{product.name}</p>
            <p className="text-mgrey text-[12px]">
              {product.spf ? `${product.spf} · ` : ''}
              {product.size}
            </p>
          </div>
          <p className="ml-auto text-right">
            <span className="block text-mgrey text-[10px] uppercase tracking-[0.1em]">MRP</span>
            <span className="font-extrabold text-navy text-[18px]">{formatPrice(product.price)}</span>
          </p>
        </div>

        <div className="p-5">
          <p className="text-dgrey text-[13px] leading-[1.6] mb-5">
            {product.status === 'launching-soon'
              ? `${product.name} is in production. Join the waitlist and we will let you know when it launches.`
              : `${product.name} is coming soon. Join the waitlist and we will let you know when it launches.`}
          </p>
          <WaitlistForm productId={product.id} />
          <a
            href={waitlistWhatsAppUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-navy text-[12px] font-medium underline underline-offset-4"
          >
            Prefer WhatsApp? Message us to be notified →
          </a>
        </div>
      </div>
    </div>
  )
}
