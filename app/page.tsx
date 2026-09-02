'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Logo from '@/components/ui/Logo'

const PARTICLES = [
  { top: '8%', left: '12%', size: 140, delay: 0 },
  { top: '18%', left: '78%', size: 90, delay: 1.2 },
  { top: '62%', left: '6%', size: 200, delay: 2.1 },
  { top: '72%', left: '85%', size: 110, delay: 0.6 },
  { top: '30%', left: '45%', size: 60, delay: 1.8 },
  { top: '85%', left: '35%', size: 130, delay: 2.6 },
  { top: '5%', left: '55%', size: 80, delay: 0.9 },
  { top: '48%', left: '92%', size: 150, delay: 1.5 },
]

function UserIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </svg>
  )
}

function StethoscopeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full border animate-therazo-float"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            borderColor: 'rgba(255,255,255,0.08)',
            opacity: 0.05,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto flex max-w-[560px] flex-col items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <Logo variant="reversed" height={44} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          className="mt-6 max-w-[340px] text-center text-[13px] leading-relaxed text-[#B0C8DC]"
        >
          Pharmacy-grade skincare formulated for Indian skin and climate.
        </motion.p>

        <div className="mt-12 grid w-full max-w-[480px] grid-cols-2 gap-4">
          <motion.button
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
            onClick={() => router.push('/customers')}
            className="group flex flex-col items-center px-5 py-7 text-center transition-transform duration-200 ease-out hover:-translate-y-[3px]"
            style={{
              border: '1.5px solid rgba(245,196,0,0.45)',
              background: 'rgba(31,58,95,0.55)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(245,196,0,0.8)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(245,196,0,0.45)')}
          >
            <span className="text-gold"><UserIcon /></span>
            <span className="mt-2.5 font-bold text-[15px] text-white">For Customers</span>
            <span className="mt-1.5 text-[12px] leading-relaxed text-[#8BAFD4]">
              Explore the Therazo range and order Daily Shield.
            </span>
            <span className="mt-3.5 block font-bold text-[11px] tracking-[0.15em] text-gold">Enter →</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.57 }}
            onClick={() => router.push('/for-doctors')}
            className="group flex flex-col items-center px-5 py-7 text-center transition-transform duration-200 ease-out hover:-translate-y-[3px]"
            style={{
              border: '1.5px solid rgba(176,200,220,0.25)',
              background: 'rgba(13,31,53,0.75)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(176,200,220,0.55)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(176,200,220,0.25)')}
          >
            <span className="text-bluelight"><StethoscopeIcon /></span>
            <span className="mt-2.5 font-bold text-[15px] text-white">For Doctors</span>
            <span className="mt-1.5 text-[12px] leading-relaxed text-[#8BAFD4]">
              Access full clinical data and request a sample.
            </span>
            <span className="mt-3.5 block font-bold text-[11px] tracking-[0.15em] text-bluelight">Enter →</span>
          </motion.button>
        </div>

        <p className="mt-14 text-center text-[11px]" style={{ color: 'rgba(255,255,255,0.18)' }}>
          therazo.co · care@therazo.co
        </p>
      </div>

      <style>{`
        @keyframes therazo-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .animate-therazo-float {
          animation: therazo-float 9s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
