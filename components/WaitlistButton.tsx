'use client'

import { useWaitlistModal } from './WaitlistModalContext'

export default function WaitlistButton({
  productId = 'daily-shield',
  className = '',
  children,
}: {
  productId?: string
  className?: string
  children: React.ReactNode
}) {
  const { openWaitlist } = useWaitlistModal()
  return (
    <button type="button" onClick={() => openWaitlist(productId)} className={className}>
      {children}
    </button>
  )
}
