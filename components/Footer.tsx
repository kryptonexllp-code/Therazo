import Link from 'next/link'
import BrandLogo from './BrandLogo'
import { COMPANY } from '@/lib/company'
import { AI_IMAGERY_DISCLOSURE } from '@/content/disclosure'

export default function Footer() {
  return (
    <footer className="bg-navy border-t-2 border-[#2A4A6F] pt-10 pb-8 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <div>
          <BrandLogo variant="reversed" size="header" />
          <ul className="space-y-1 text-bluelight text-[13px] mb-5">
            <li>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-white">{COMPANY.email}</a>
            </li>
            <li>
              <a href={COMPANY.phoneHref} className="hover:text-white">{COMPANY.phone}</a>
              <span className="text-bluemuted"> · customer care</span>
            </li>
            <li>{COMPANY.city}, India</li>
          </ul>
          <div className="flex gap-4">
            {['Instagram', 'LinkedIn', 'YouTube', 'Facebook'].map((s) => (
              <span key={s} className="text-bluemuted text-[11px] tracking-[0.05em]">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white text-[12px] font-bold tracking-[0.15em] uppercase mb-5">
            Navigate
          </h3>
          <ul className="space-y-3 text-bluelight text-[13px]">
            <li><Link href="/start-here">Start Here</Link></li>
            <li><Link href="/science">The Science</Link></li>
            <li><Link href="/products">The Range</Link></li>
            <li><Link href="/routine">The Routine</Link></li>
            <li><Link href="/find-your-routine">Find Your Routine</Link></li>
            <li><Link href="/dose-guide">Dose Guide</Link></li>
            <li><Link href="/about">Our Story</Link></li>
            <li><Link href="/for-doctors">For Doctors</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/customers#waitlist">Join the Waitlist</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-[12px] font-bold tracking-[0.15em] uppercase mb-5">
            Company
          </h3>
          <p className="text-bluelight text-[13px] mb-3">Pharmacy-grade skincare for India · Made in India</p>
          <p className="text-bluelight text-[13px] mb-1">Marketed by {COMPANY.marketer}</p>
          <p className="text-bluelight text-[13px] mb-3">Manufactured by {COMPANY.manufacturer}</p>
          <p className="text-bluemuted text-[12px]">Cosmetic product — not for medicinal use</p>
        </div>
      </div>

      <div className="border-t border-[#2A4A6F] mt-12 pt-6 text-center">
        <p className="text-[12px] text-[#4A6A8A]">
          © 2026 Therazo · {COMPANY.domain} · {COMPANY.email} · {COMPANY.phone}
        </p>
        <p className="text-[12px] text-bluemuted mt-2">{AI_IMAGERY_DISCLOSURE}</p>
      </div>
    </footer>
  )
}
