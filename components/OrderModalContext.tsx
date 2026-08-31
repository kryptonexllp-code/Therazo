'use client'

import { createContext, useContext, useState, useCallback } from 'react'

type OrderModalContextValue = {
  isOpen: boolean
  openOrderModal: () => void
  closeOrderModal: () => void
}

const OrderModalContext = createContext<OrderModalContextValue | null>(null)

export function OrderModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const openOrderModal = useCallback(() => setIsOpen(true), [])
  const closeOrderModal = useCallback(() => setIsOpen(false), [])
  return (
    <OrderModalContext.Provider value={{ isOpen, openOrderModal, closeOrderModal }}>
      {children}
    </OrderModalContext.Provider>
  )
}

export function useOrderModal() {
  const ctx = useContext(OrderModalContext)
  if (!ctx) throw new Error('useOrderModal must be used within OrderModalProvider')
  return ctx
}
