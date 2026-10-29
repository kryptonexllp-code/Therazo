'use client'

import { useWaitlistModal } from './WaitlistModalContext'

export default function StickyLaunchBar() {
  const { openWaitlist } = useWaitlistModal()
  return (
    <>
      <div className="hidden md:flex sticky top-[var(--header-h)] z-30 bg-navy items-center justify-between px-8 py-3">
        <p className="text-white text-[13px]">Daily Shield · SPF 50 PA++++ · Launching soon</p>
        <div className="flex items-center gap-6">
          <span className="text-white text-[13px]">
            MRP <span className="font-bold text-[16px]">₹699</span>
          </span>
          <button
            onClick={() => openWaitlist('daily-shield')}
            className="bg-white text-navy text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-2.5 transition-transform duration-150 hover:scale-[1.02]"
          >
            Join the waitlist →
          </button>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy p-3">
        <button
          onClick={() => openWaitlist('daily-shield')}
          className="w-full bg-white text-navy text-[12px] font-bold tracking-[0.15em] uppercase py-4 min-h-[44px]"
        >
          Launching soon — join the waitlist
        </button>
      </div>
    </>
  )
}
