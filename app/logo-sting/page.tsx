import type { Metadata } from 'next'
import LogoSting from '@/components/LogoSting'

export const metadata: Metadata = {
  title: 'Logo Sting',
  robots: { index: false, follow: false },
}

// Full-bleed, chrome-free 4-second brand sting for screen recording at
// 1920x1080. No Navbar/Footer — see components/SiteChrome.tsx, which treats
// this route the same as the landing page.
export default function LogoStingPage() {
  return (
    <div className="h-[100svh] w-full">
      <LogoSting variant="full" />
    </div>
  )
}
