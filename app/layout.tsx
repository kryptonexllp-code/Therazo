import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import SiteChrome from '@/components/SiteChrome'
import { OrderModalProvider } from '@/components/OrderModalContext'
import OrderModal from '@/components/OrderModal'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://therazo.co'),
  title: {
    template: '%s | Therazo',
    default: 'Therazo — Science. Defined. | Pharmacy-Grade Skincare India',
  },
  description:
    'Therazo is a pharmacy-grade unisex skincare brand formulated for Indian skin. SPF 50 PA++++ Daily Shield — 6 UV filters, Ectoin, Niacinamide, Ceramide Complex. Every claim documented.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Therazo',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={poppins.variable}>
      <body className="font-sans antialiased">
        <OrderModalProvider>
          <SiteChrome>{children}</SiteChrome>
          <OrderModal />
        </OrderModalProvider>
      </body>
    </html>
  )
}
