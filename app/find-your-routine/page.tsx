import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import RoutineFinder from './RoutineFinder'
import { FINDER_COPY } from '@/content/routineFinder'

export const metadata: Metadata = {
  title: 'Find your routine',
  description: 'Choose your skin type and what matters most, and get a simple morning and evening routine from the Therazo range.',
}

export default function FindYourRoutinePage() {
  return (
    <>
      <section className="bg-navy px-6 md:px-20 pt-32 pb-14">
        <SectionLabel dark>Routine Finder</SectionLabel>
        <h1 className="font-extrabold text-white text-[36px] sm:text-[48px] leading-[1.05] mb-4">{FINDER_COPY.title}</h1>
        <p className="text-bluelight text-[16px] max-w-xl">{FINDER_COPY.intro}</p>
      </section>
      <section className="bg-offwhite px-6 md:px-20 py-14 md:py-20">
        <div className="max-w-4xl">
          <RoutineFinder />
        </div>
      </section>
    </>
  )
}
