'use client'

import { useOrderModal } from './OrderModalContext'

export default function OrderButton({
  className = '',
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const { openOrderModal } = useOrderModal()
  return (
    <button onClick={openOrderModal} className={className}>
      {children}
    </button>
  )
}
