'use client'

import { motion } from 'framer-motion'

// The source file (/public/images/logos/logo-icon.png) is an opaque RGB
// PNG — a navy ring on a solid white square, no alpha channel. CSS filter
// tricks (brightness/invert) can't selectively turn "ring" white and
// "background" transparent on a flat, non-transparent raster — every pixel
// gets the same transform, so the ring and its background always end up
// the same color. A raster would also visibly blur when scaled from 8x
// down to 1x. So the ring mark here is redrawn as an inline SVG matching
// the icon's silhouette (a circle with a small gap, rounded ends) — it
// renders crisp white at any scale and animates cleanly.
function RingMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path
        d="M52 9 A41 41 0 1 1 21 82"
        stroke="#FFFFFF"
        strokeWidth="15"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

const LETTERS = ['T', 'H', 'E', 'R', 'A', 'Z']

const SIZES = {
  full: { letter: 48, ring: 40, gap: '0.02em', tagline: 13, taglineGap: 22 },
  embed: { letter: 22, ring: 18, gap: '0.02em', tagline: 7, taglineGap: 12 },
} as const

export function LogoSting({
  variant = 'full',
  className = '',
}: {
  variant?: keyof typeof SIZES
  className?: string
}) {
  const s = SIZES[variant]

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0D1F35] ${className}`}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 3.6, ease: 'easeInOut' }}
        className="flex flex-col items-center"
      >
        {/* WORDMARK + RING */}
        <div className="flex items-center" style={{ gap: s.gap }}>
          {LETTERS.map((letter, i) => (
            <motion.span
              key={letter + i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.08, ease: 'easeOut' }}
              style={{
                fontSize: s.letter,
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '0.06em',
                lineHeight: 1,
              }}
            >
              {letter}
            </motion.span>
          ))}

          {/* RING MARK — flies in from top-right (0–0.6s), settles as the "O",
              then pulses gently through the hold (2.2–3.6s). x/y/filter finish
              at 0.6s; scale runs its own timeline across the full 4s so the
              same element can cover both the arrival and the later pulse. */}
          <motion.div
            initial={{ x: 300, y: -200, scale: 8, filter: 'blur(2px)' }}
            animate={{
              x: 0,
              y: 0,
              filter: 'blur(0px)',
              scale: [8, 1, 1, 1.04, 1, 1],
            }}
            transition={{
              x: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              y: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              filter: { duration: 0.6, ease: 'easeInOut' },
              scale: {
                duration: 4,
                times: [0, 0.15, 0.55, 0.7, 0.85, 1],
                ease: ['easeOut', 'linear', 'easeInOut', 'easeInOut', 'linear'],
              },
            }}
            style={{ width: s.ring, height: s.ring, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <RingMark size={s.ring} />
          </motion.div>
        </div>

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4, ease: 'easeOut' }}
          style={{
            marginTop: s.taglineGap,
            fontSize: s.tagline,
            fontWeight: 400,
            color: '#8BAFD4',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
          }}
        >
          Science. Defined.
        </motion.p>
      </motion.div>
    </div>
  )
}

export default LogoSting
