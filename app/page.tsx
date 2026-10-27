'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'

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

type Particle = {
  type: 'dot' | 'ring'
  top: string
  left: string
  size: number
  opacity: number
  duration: number
  delay: number
  rotate: number
  drift: number
}

const PARTICLES: Particle[] = [
  { type: 'ring', top: '10%', left: '8%', size: 96, opacity: 0.09, duration: 11, delay: 0, rotate: 8, drift: -28 },
  { type: 'dot', top: '16%', left: '32%', size: 4, opacity: 0.12, duration: 9, delay: 0.6, rotate: 0, drift: -22 },
  { type: 'ring', top: '6%', left: '62%', size: 120, opacity: 0.07, duration: 15, delay: 1.1, rotate: -10, drift: -34 },
  { type: 'dot', top: '22%', left: '80%', size: 4, opacity: 0.1, duration: 8, delay: 0.3, rotate: 0, drift: -20 },
  { type: 'ring', top: '38%', left: '90%', size: 60, opacity: 0.1, duration: 13, delay: 1.8, rotate: 14, drift: -30 },
  { type: 'dot', top: '48%', left: '5%', size: 4, opacity: 0.08, duration: 10, delay: 0.9, rotate: 0, drift: -24 },
  { type: 'ring', top: '58%', left: '20%', size: 40, opacity: 0.12, duration: 16, delay: 2.2, rotate: -6, drift: -40 },
  { type: 'dot', top: '68%', left: '48%', size: 4, opacity: 0.09, duration: 12, delay: 0.4, rotate: 0, drift: -26 },
  { type: 'ring', top: '78%', left: '70%', size: 88, opacity: 0.06, duration: 14, delay: 1.4, rotate: 12, drift: -32 },
  { type: 'dot', top: '85%', left: '15%', size: 4, opacity: 0.11, duration: 9, delay: 1.6, rotate: 0, drift: -18 },
  { type: 'ring', top: '90%', left: '55%', size: 110, opacity: 0.08, duration: 12, delay: 0.7, rotate: -14, drift: -36 },
  { type: 'dot', top: '30%', left: '50%', size: 4, opacity: 0.1, duration: 11, delay: 2.0, rotate: 0, drift: -22 },
]

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
      {/* GRADIENT MESH */}
      <div
        className="absolute -top-1/4 -left-1/4 h-[70vw] w-[70vw] rounded-full animate-therazo-mesh-a"
        style={{
          background: 'radial-gradient(circle, #26466F 0%, #0D1F35 70%)',
          opacity: 0.4,
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 h-[70vw] w-[70vw] rounded-full animate-therazo-mesh-b"
        style={{
          background: 'radial-gradient(circle, #26466F 0%, #0D1F35 70%)',
          opacity: 0.4,
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full animate-therazo-mesh-c"
        style={{
          background: 'radial-gradient(circle, #1F3A5F 0%, #0D1F35 70%)',
          opacity: 0.4,
          filter: 'blur(40px)',
        }}
      />

      {/* PARTICLE FIELD */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.type === 'dot' ? `rgba(255,255,255,${p.opacity})` : 'transparent',
            border: p.type === 'ring' ? `1px solid rgba(255,255,255,${p.opacity})` : 'none',
            animation: `therazo-particle-${i} ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}

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
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
          className="mt-5 h-px bg-gold"
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
              borderLeft: '2px solid #FFC107',
              background: 'rgba(31,58,95,0.7)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <span className="text-gold"><UserIcon /></span>
            <span className="mt-2.5 font-bold text-[15px] text-white">For Customers</span>
            <span className="mt-1.5 text-[12px] leading-relaxed text-[#8BAFD4]">
              Explore the Therazo range and join the Daily Shield waitlist.
            </span>
            <span className="mt-3.5 block font-bold text-[11px] tracking-[0.15em] text-gold">Enter →</span>
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
        @keyframes therazo-mesh-a {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(4%, 6%); }
        }
        @keyframes therazo-mesh-b {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-5%, -4%); }
        }
        @keyframes therazo-mesh-c {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.08); }
        }
        .animate-therazo-mesh-a { animation: therazo-mesh-a 22s ease-in-out infinite; }
        .animate-therazo-mesh-b { animation: therazo-mesh-b 26s ease-in-out infinite; }
        .animate-therazo-mesh-c { animation: therazo-mesh-c 30s ease-in-out infinite; }

        ${PARTICLES.map(
          (p, i) => `
        @keyframes therazo-particle-${i} {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(${p.drift}px) rotate(${p.rotate}deg); }
        }`
        ).join('\n')}
      `}</style>
    </div>
  )
}
