'use client'

import { motion } from 'framer-motion'

export default function AnimatedSection({
  children,
  className = '',
  style,
  id,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  id?: string
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  )
}
