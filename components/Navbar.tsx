'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useOrderModal } from './OrderModalContext'

const NAV_LINKS = [
  { label: 'The Science', href: '/science' },
  { label: 'The Range', href: '/products' },
  { label: 'The Routine', href: '/routine' },
  { label: 'Our Story', href: '/about' },
  { label: 'For Doctors', href: '/for-doctors' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openOrderModal } = useOrderModal()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-navy">
      <div className="h-full flex items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-extrabold text-white text-[18px] tracking-[0.06em]">
            THERAZO<sup className="text-[9px]">™</sup>
          </span>
          <span className="text-bluemuted text-[8px] tracking-[0.28em] mt-1 hidden sm:block">
            S C I E N C E . D E F I N E D .
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-white text-[11px] font-medium tracking-[0.14em] uppercase group py-2"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-gold transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={openOrderModal}
            className="hidden sm:inline-block border border-gold text-gold text-[11px] font-bold tracking-[0.1em] uppercase px-[18px] py-[7px] transition-colors duration-200 hover:bg-gold hover:text-navy"
          >
            Order Now
          </button>
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden flex flex-col gap-[5px] w-5 min-h-[44px] min-w-[44px] items-center justify-center"
          >
            <span className="block h-[1.5px] w-5 bg-white" />
            <span className="block h-[1.5px] w-5 bg-white" />
            <span className="block h-[1.5px] w-5 bg-white" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 bg-navy z-[60] flex flex-col items-center justify-center gap-9">
          <button
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-5 text-white text-2xl min-h-[44px] min-w-[44px]"
          >
            ✕
          </button>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white font-bold text-[22px]"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false)
              openOrderModal()
            }}
            className="mt-4 border border-gold text-gold font-bold text-[14px] tracking-[0.1em] uppercase px-8 py-3"
          >
            Order Now
          </button>
        </div>
      )}
    </header>
  )
}
