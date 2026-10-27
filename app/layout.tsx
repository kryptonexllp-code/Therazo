import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import SiteChrome from '@/components/SiteChrome'
import { WaitlistModalProvider } from '@/components/WaitlistModalContext'
import WaitlistModal from '@/components/WaitlistModal'
import { COMPANY } from '@/lib/company'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Therazo',
  url: COMPANY.url,
  logo: `${COMPANY.url}/images/logos/logo-primary.png`,
  email: COMPANY.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: COMPANY.city,
    addressRegion: COMPANY.region,
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: COMPANY.phoneIntl,
    email: COMPANY.email,
    areaServed: 'IN',
  },
}

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <WaitlistModalProvider>
          <SiteChrome>{children}</SiteChrome>
          <WaitlistModal />
        </WaitlistModalProvider>
      </body>
    </html>
  )
}
