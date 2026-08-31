'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function StatCounter({
  value,
  label,
  duration = 1.2,
}: {
  value: string
  label: string
  duration?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(value.match(/^\d+$/) ? '0' : value)

  useEffect(() => {
    if (!isInView) return
    const numeric = value.match(/^\d+$/)
    if (!numeric) return
    const target = parseInt(value, 10)
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      setDisplay(Math.round(progress * target).toString())
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isInView, value, duration])

  return (
    <div ref={ref}>
      <p className="font-extrabold text-navy text-[44px] sm:text-[52px] leading-none">{display}</p>
      <p className="text-mgrey text-[11px] font-medium tracking-[0.15em] uppercase mt-2">{label}</p>
    </div>
  )
}
