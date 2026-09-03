'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'

// The portal-selector landing page ('/') is a standalone full-viewport
// experience with no site chrome — every other route keeps the global nav/footer.
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isChromeless = pathname === '/' || pathname === '/logo-sting'

  if (isChromeless) {
    return <>{children}</>
  }

  const variant = pathname?.startsWith('/customers')
    ? 'customer'
    : pathname?.startsWith('/for-doctors')
      ? 'doctor'
      : 'default'

  return (
    <>
      <Navbar variant={variant} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
