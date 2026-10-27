import { DOSE_ILLUSTRATIONS } from '@/content/dose'

// Two fingers seen palm-up, with a line of cream along each one that is
// covered. `covered` is 1 (one finger-length) or 2 (two finger-lengths).
function FingerIllustration({ covered, label }: { covered: 1 | 2; label: string }) {
  return (
    <svg viewBox="0 0 220 260" role="img" aria-label={label} className="w-full mx-auto">
      {/* palm edge */}
      <path d="M30 250 Q30 205 50 195 L170 195 Q190 205 190 250 Z" fill="#E6E8EC" stroke="#1F3A5F" strokeWidth="2" />
      {/* index finger */}
      <rect x="58" y="20" width="44" height="190" rx="22" fill="#E6E8EC" stroke="#1F3A5F" strokeWidth="2" />
      {/* middle finger */}
      <rect x="118" y="6" width="44" height="204" rx="22" fill="#E6E8EC" stroke="#1F3A5F" strokeWidth="2" />
      {/* finger creases */}
      <path d="M66 82 H94 M66 140 H94 M126 72 H154 M126 134 H154" stroke="#1F3A5F" strokeOpacity="0.25" strokeWidth="1.5" />
      {/* cream lines */}
      <rect x="70" y="30" width="20" height="170" rx="10" fill="#FFFFFF" stroke="#1F3A5F" strokeWidth="1.5" />
      {covered === 2 && <rect x="130" y="16" width="20" height="184" rx="10" fill="#FFFFFF" stroke="#1F3A5F" strokeWidth="1.5" />}
    </svg>
  )
}

// What most people use vs what SPF is tested with. `size` sets the drawing width.
export default function DoseIllustrations({ size = 'large' }: { size?: 'small' | 'large' }) {
  const max = size === 'large' ? 'max-w-[220px]' : 'max-w-[140px]'
  const pad = size === 'large' ? 'p-6' : 'p-4'
  return (
    <div className={`grid grid-cols-2 gap-4 sm:gap-8 ${size === 'large' ? 'max-w-3xl' : 'max-w-xl'} mx-auto`}>
      {[
        { covered: 1 as const, copy: DOSE_ILLUSTRATIONS.usual, frame: 'border border-cardline' },
        { covered: 2 as const, copy: DOSE_ILLUSTRATIONS.tested, frame: 'border-2 border-navy' },
      ].map(({ covered, copy, frame }) => (
        <figure key={covered} className={`${frame} ${pad} text-center bg-white`}>
          <div className={`${max} mx-auto`}>
            <FingerIllustration covered={covered} label={copy.alt} />
          </div>
          <figcaption className="mt-4">
            <span className="block text-mgrey text-[10px] sm:text-[11px] uppercase tracking-[0.15em] mb-1">{copy.eyebrow}</span>
            <span className={`block font-bold text-navy ${size === 'large' ? 'text-[17px]' : 'text-[14px]'}`}>{copy.title}</span>
            <span className="block text-mgrey text-[12px] mt-1">{copy.note}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
