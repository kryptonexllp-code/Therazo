'use client'

import { createContext, useCallback, useContext, useState } from 'react'

type WaitlistModalContextValue = {
  isOpen: boolean
  productId: string
  openWaitlist: (productId?: string) => void
  closeWaitlist: () => void
}

const WaitlistModalContext = createContext<WaitlistModalContextValue | null>(null)

export function WaitlistModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [productId, setProductId] = useState('daily-shield')
  const openWaitlist = useCallback((id = 'daily-shield') => {
    setProductId(id)
    setIsOpen(true)
  }, [])
  const closeWaitlist = useCallback(() => setIsOpen(false), [])
  return (
    <WaitlistModalContext.Provider value={{ isOpen, productId, openWaitlist, closeWaitlist }}>
      {children}
    </WaitlistModalContext.Provider>
  )
}

export function useWaitlistModal() {
  const ctx = useContext(WaitlistModalContext)
  if (!ctx) throw new Error('useWaitlistModal must be used within WaitlistModalProvider')
  return ctx
}
