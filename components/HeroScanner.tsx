'use client'

import { motion } from 'framer-motion'

const ANNOTATIONS = [
  { label: 'Ectoin', top: '28%', left: '48%', delay: 1.8 },
  { label: 'PA++++', top: '38%', left: '72%', delay: 2.2 },
  { label: 'Niacinamide', top: '62%', left: '55%', delay: 2.6 },
  { label: 'Ceramide Complex', top: '80%', left: '45%', delay: 3.0 },
]

const CORNERS = [
  { top: '6%', left: '6%', rotate: 0 },
  { top: '6%', right: '6%', rotate: 90 },
  { bottom: '6%', right: '6%', rotate: 180 },
  { bottom: '6%', left: '6%', rotate: 270 },
]

export default function HeroScanner() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {CORNERS.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="absolute w-9 h-9"
          style={{ top: c.top, left: c.left, right: c.right, bottom: c.bottom }}
        >
          <svg width="36" height="36" style={{ transform: `rotate(${c.rotate}deg)` }}>
            <path d="M2 14 V2 H14" stroke="white" strokeWidth="1.5" fill="none" />
          </svg>
        </motion.div>
      ))}

      {ANNOTATIONS.map((a) => (
        <motion.div
          key={a.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: a.delay }}
          className="absolute flex items-center gap-2"
          style={{ top: a.top, left: a.left }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
          <span className="h-px w-[30px] bg-white/80 shrink-0" />
          <span className="text-[11px] font-medium text-white bg-navy/70 px-2 py-1 whitespace-nowrap">
            {a.label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
