'use client'

import { MotionConfig } from 'framer-motion'

// Framer Motion honours the OS "reduce motion" setting site-wide: transform
// and layout animations are skipped; simple opacity fades still run.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
