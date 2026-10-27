'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useWaitlistModal } from './WaitlistModalContext'
import Logo, { LogoIcon } from './ui/Logo'

export type NavVariant = 'default' | 'customer' | 'doctor'

const NAV_LINKS: Record<NavVariant, { label: string; href: string }[]> = {
  default: [
    { label: 'The Science', href: '/science' },
    { label: 'The Range', href: '/products' },
    { label: 'The Routine', href: '/routine' },
    { label: 'Our Story', href: '/about' },
    { label: 'For Doctors', href: '/for-doctors' },
  ],
  customer: [
    { label: 'The Range', href: '/products' },
    { label: 'The Science', href: '/science' },
    { label: 'The Routine', href: '/routine' },
    { label: 'Our Story', href: '/about' },
  ],
  doctor: [
    { label: 'Clinical Data', href: '/for-doctors#clinical-data' },
    { label: 'Formulation', href: '/for-doctors#formulation' },
    { label: 'Sample Request', href: '/for-doctors#sample-request' },
  ],
}

export default function Navbar({ variant = 'default' }: { variant?: NavVariant }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openWaitlist } = useWaitlistModal()
  const router = useRouter()
  const links = NAV_LINKS[variant]
  const showWaitlist = variant !== 'doctor'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-navy">
      <div className="h-full flex items-center justify-between px-5 md:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center">
            <Logo variant="reversed" height={32} className="hidden sm:block" />
            <LogoIcon height={32} className="sm:hidden" />
          </Link>
          {variant === 'customer' && (
            <button
              onClick={() => router.push('/')}
              className="hidden md:inline-block text-[11px] text-bluemuted"
            >
              ← Home
            </button>
          )}
          {variant === 'doctor' && (
            <button
              onClick={() => router.push('/customers')}
              className="hidden md:inline-block text-[11px] text-bluemuted"
            >
              ← Customer portal
            </button>
          )}
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-white text-[11px] font-medium tracking-[0.14em] uppercase group py-2"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-white transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {showWaitlist && (
            <button
              onClick={() => openWaitlist('daily-shield')}
              className="hidden sm:inline-block border border-white text-white text-[11px] font-bold tracking-[0.1em] uppercase px-[18px] py-[7px] transition-colors duration-200 hover:bg-white hover:text-navy"
            >
              Launching Soon
            </button>
          )}
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
          {variant === 'customer' && (
            <button
              onClick={() => {
                setMobileOpen(false)
                router.push('/')
              }}
              className="text-bluemuted text-[13px]"
            >
              ← Home
            </button>
          )}
          {variant === 'doctor' && (
            <button
              onClick={() => {
                setMobileOpen(false)
                router.push('/customers')
              }}
              className="text-bluemuted text-[13px]"
            >
              ← Customer portal
            </button>
          )}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white font-bold text-[22px]"
            >
              {link.label}
            </Link>
          ))}
          {showWaitlist && (
            <button
              onClick={() => {
                setMobileOpen(false)
                openWaitlist('daily-shield')
              }}
              className="mt-4 border border-white text-white font-bold text-[14px] tracking-[0.1em] uppercase px-8 py-3"
            >
              Launching Soon
            </button>
          )}
        </div>
      )}
    </header>
  )
}
