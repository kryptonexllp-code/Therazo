'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import MoleculeField from '@/components/MoleculeField'

// Wordmark-only crop: the source square logo file has "THERAZO" sitting above a
// smaller "SCIENCE. DEFINED." caption within one thin content band. This crop
// isolates just the wordmark line so the caption can be its own animated element.
function WordmarkOnly({ height }: { height: number }) {
  const width = height * 6.4
  return (
    <div style={{ height, width }} className="relative shrink-0 overflow-hidden">
      <Image
        src="/images/logos/logo-reversed.png"
        alt="Therazo"
        fill
        sizes={`${width}px`}
        style={{ objectFit: 'cover', objectPosition: '50% 44.8%' }}
        priority
      />
    </div>
  )
}


function UserIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </svg>
  )
}

function StethoscopeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 3v6a4 4 0 0 0 8 0V3" />
      <path d="M10 13v2a5 5 0 0 0 10 0v-2.5" />
      <circle cx="20" cy="9" r="1.5" />
    </svg>
  )
}

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="relative h-[100svh] w-full overflow-hidden bg-[#0D1F35] flex items-center justify-center">
      {/* MOLECULE FIELD — slow, calm, no gradients */}
      <MoleculeField />

      {/* CENTRE CONTENT */}
      <div className="relative z-10 mx-auto flex max-w-[560px] flex-col items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <WordmarkOnly height={56} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
          className="mt-4 text-[11px] font-medium tracking-[0.32em] text-white uppercase"
        >
          Science. Defined.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
          className="mt-5 h-px w-10 origin-center bg-gold"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 1.0 }}
          className="mt-6 max-w-[340px] text-center text-[13px] leading-relaxed text-[#B0C8DC]"
        >
          Pharmacy-grade skincare for Indian skin and climate.
        </motion.p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <motion.button
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 1.3 }}
            onClick={() => router.push('/customers')}
            className="group flex w-[220px] flex-col items-center px-5 py-7 text-center transition-transform duration-[250ms] ease-out hover:scale-[1.03]"
            style={{
              borderLeft: '2px solid rgba(255,255,255,0.7)',
              background: 'rgba(31,58,95,0.7)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <span className="text-white"><UserIcon /></span>
            <span className="mt-2.5 font-bold text-[15px] text-white">For Customers</span>
            <span className="mt-1.5 text-[12px] leading-relaxed text-[#8BAFD4]">
              Explore the Therazo range and join the Daily Shield waitlist.
            </span>
            <span className="mt-3.5 block font-bold text-[11px] tracking-[0.15em] text-white">Enter →</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 1.5 }}
            onClick={() => router.push('/for-doctors')}
            className="group flex w-[220px] flex-col items-center px-5 py-7 text-center transition-transform duration-[250ms] ease-out hover:scale-[1.03]"
            style={{
              borderLeft: '2px solid rgba(176,200,220,0.4)',
              background: 'rgba(13,31,53,0.8)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <span className="text-bluelight"><StethoscopeIcon /></span>
            <span className="mt-2.5 font-bold text-[15px] text-white">For Doctors</span>
            <span className="mt-1.5 text-[12px] leading-relaxed text-[#8BAFD4]">
              Formulation data, and a sample kit for clinics.
            </span>
            <span className="mt-3.5 block font-bold text-[11px] tracking-[0.15em] text-bluelight">Enter →</span>
          </motion.button>
        </div>

        <p className="mt-14 text-center text-[11px]" style={{ color: 'rgba(255,255,255,0.18)' }}>
          therazo.co · care@therazo.co
        </p>
      </div>

    </div>
  )
}
