'use client'

import { useOrderModal } from './OrderModalContext'

export default function StickyOrderBar() {
  const { openOrderModal } = useOrderModal()
  return (
    <>
      <div className="hidden md:flex sticky top-16 z-30 bg-navy items-center justify-between px-8 py-3">
        <p className="text-white text-[13px]">
          Daily Shield · SPF 50 PA++++ · <span className="text-green">In stock</span>
        </p>
        <div className="flex items-center gap-6">
          <span className="text-white font-bold text-[16px]">₹699</span>
          <button
            onClick={openOrderModal}
            className="bg-gold text-navy text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-2.5 transition-transform duration-150 hover:scale-[1.02]"
          >
            Order Now →
          </button>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy p-3">
        <button
          onClick={openOrderModal}
          className="w-full bg-gold text-navy text-[12px] font-bold tracking-[0.15em] uppercase py-4 min-h-[44px]"
        >
          Order — ₹699
        </button>
      </div>
    </>
  )
}
