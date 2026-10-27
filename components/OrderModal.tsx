'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { useOrderModal } from './OrderModalContext'
import { ORDER_WHATSAPP_URL } from '@/lib/whatsapp'
import { dailyShield } from '@/lib/products'

export default function OrderModal({ razorpayUrl }: { razorpayUrl?: string }) {
  const { isOpen, closeOrderModal } = useOrderModal()

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeOrderModal()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeOrderModal])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center sm:p-4"
      onClick={closeOrderModal}
    >
      <div
        className="bg-white border-2 border-navy w-full h-full sm:h-auto sm:max-w-[440px] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-navy flex items-center justify-between px-5 py-4">
          <h2 className="text-white font-bold text-[14px] tracking-[0.05em] uppercase">
            Order Daily Shield
          </h2>
          <button
            aria-label="Close"
            onClick={closeOrderModal}
            className="text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <div className="p-5 flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 bg-lgrey">
            <Image src={dailyShield.productImage!} alt="Daily Shield" fill sizes="64px" className="object-contain" />
          </div>
          <div>
            <p className="font-bold text-navy text-[14px]">Daily Shield</p>
            <p className="text-mgrey text-[12px]">SPF 50 PA++++ · 50ml</p>
          </div>
          <p className="ml-auto font-extrabold text-navy text-[18px]">₹699</p>
        </div>

        <div className="px-5 pb-5">
          {razorpayUrl && (
            <a
              href={razorpayUrl}
              className="block text-center bg-gold text-navy font-bold text-[12px] tracking-[0.2em] uppercase h-[52px] flex items-center justify-center mb-3 transition-transform duration-150 hover:scale-[1.02]"
            >
              Pay Now — ₹699
            </a>
          )}
          <a
            href={ORDER_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-navy text-gold font-bold text-[12px] tracking-[0.2em] uppercase h-[52px] flex items-center justify-center transition-transform duration-150 hover:scale-[1.02]"
          >
            Order via WhatsApp — ₹699
          </a>
          <p className="text-center text-mgrey text-[11px] mt-3">
            Payment link will be sent via WhatsApp · Pan-India delivery · Free above ₹499
          </p>
          <p className="text-center italic text-mgrey text-[11px] mt-2">
            Currently dispatching via courier. Delivery 3–6 business days.
          </p>
        </div>
      </div>
    </div>
  )
}
