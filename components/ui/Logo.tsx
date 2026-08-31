import Image from 'next/image'

export type LogoVariant = 'reversed' | 'primary' | 'mono-dark' | 'mono-light'

const SRC: Record<LogoVariant, string> = {
  reversed: '/images/logos/logo-reversed.png',
  primary: '/images/logos/logo-primary.png',
  'mono-dark': '/images/logos/logo-mono-dark.png',
  'mono-light': '/images/logos/logo-mono-light.png',
}

// `primary`, `mono-dark`, and `mono-light` are baked onto an opaque white
// square. `mix-blend-multiply` drops that white out against whatever section
// background sits behind it. `reversed` is baked onto navy that matches the
// site's navy exactly, so it's placed on navy sections with no blend needed.
const NEEDS_BLEND: LogoVariant[] = ['primary', 'mono-dark', 'mono-light']

// The wordmark + tagline occupy a thin horizontal band roughly centered in
// each square source file. Cropping to a 4:1 strip via object-fit: cover
// isolates that band without needing pre-cropped assets.
export default function Logo({
  variant,
  height = 32,
  className = '',
}: {
  variant: LogoVariant
  height?: number
  className?: string
}) {
  const width = height * 4
  return (
    <div
      style={{ height, width }}
      className={`relative shrink-0 overflow-hidden ${className}`}
    >
      <Image
        src={SRC[variant]}
        alt="Therazo — Science. Defined."
        fill
        sizes={`${width}px`}
        style={{ objectFit: 'cover', objectPosition: '50% 47.6%' }}
        className={NEEDS_BLEND.includes(variant) ? 'mix-blend-multiply' : ''}
        priority
      />
    </div>
  )
}

export function LogoIcon({
  height = 32,
  className = '',
}: {
  height?: number
  className?: string
}) {
  return (
    <div style={{ height, width: height }} className={`relative shrink-0 ${className}`}>
      <Image
        src="/images/logos/logo-icon.png"
        alt="Therazo — Science. Defined."
        fill
        sizes={`${height}px`}
        className="object-contain"
        priority
      />
    </div>
  )
}
