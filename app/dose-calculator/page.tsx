import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import DoseCalculator from './DoseCalculator'
import { calculatorEnabled } from '@/lib/claims'

export const metadata: Metadata = {
  title: 'Dose calculator',
  description: 'How much Daily Shield to use for the area you are covering.',
  robots: calculatorEnabled ? undefined : { index: false },
}

// Built but switched off: returns 404 until calculatorEnabled is true (lib/claims.ts).
export default function DoseCalculatorPage() {
  if (!calculatorEnabled) notFound()
  return (
    <>
      <section className="bg-navy px-6 md:px-20 pt-32 pb-14">
        <SectionLabel dark>Dose Calculator · Daily Shield</SectionLabel>
        <h1 className="font-extrabold text-white text-[36px] sm:text-[48px] leading-[1.05]">How much to use</h1>
      </section>
      <section className="bg-offwhite px-6 md:px-20 py-14 md:py-20">
        <DoseCalculator />
        <p className="mt-10">
          <Link href="/dose-guide" className="text-navy text-[13px] font-medium underline underline-offset-4">
            Read the dose guide →
          </Link>
        </p>
      </section>
    </>
  )
}
