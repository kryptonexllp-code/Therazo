import Image from 'next/image'

// The only way the THERAZO wordmark appears on the site. Never type the
// brand name in a font, and never use the black version on a dark background.
//
// Files: wordmark-only crops of the official logo PNGs, on transparent
// backgrounds (scripts/crop_logo.py). When the SVGs from the trademark package
// are added to /public/images/logos/, point SRC at them — they are preferred.
const SRC = {
  primary: '/images/logos/therazo-wordmark-navy.png', // navy, for light backgrounds
  reversed: '/images/logos/therazo-wordmark-white.png', // white, for navy / dark backgrounds
}
const INTRINSIC = { width: 2517, height: 384 } // aspect ≈ 6.55 : 1

// Sized by height (--logo-h); width follows the aspect ratio. `sizes` matches
// the rendered width so the optimiser serves a small file, not the source.
const SIZE = {
  header: {
    height: '[--logo-h:22px] md:[--logo-h:28px]',
    sizes: '(min-width: 768px) 184px, 145px',
  },
  hero: {
    height: '[--logo-h:clamp(44px,9vw,88px)]',
    sizes: '(min-width: 978px) 577px, (min-width: 489px) 59vw, 289px',
  },
}

// Clear space: the wordmark is all capitals, so the height of its "T" is the
// logo height. That clear space is built in above and below (padding-block);
// anything placed beside the logo must sit at least one logo-height away.
//
// `tagline` renders the lockup: the logo, with SCIENCE. DEFINED. below it in
// Poppins Medium at 0.28 × the logo height, centred, in the logo's colour.
export default function BrandLogo({
  variant,
  size,
  tagline = false,
}: {
  variant: 'primary' | 'reversed'
  size: 'header' | 'hero'
  tagline?: boolean
}) {
  return (
    <span
      className={`inline-flex max-w-full flex-col items-center py-[var(--logo-h)] ${SIZE[size].height} ${
        variant === 'reversed' ? 'text-white' : 'text-navy'
      }`}
    >
      <Image
        src={SRC[variant]}
        alt="Therazo"
        width={INTRINSIC.width}
        height={INTRINSIC.height}
        sizes={SIZE[size].sizes}
        priority
        className="block"
        style={{ height: 'var(--logo-h)', width: 'auto', maxWidth: '100%', minWidth: 120, objectFit: 'contain' }}
      />
      {tagline && (
        <span
          className="block whitespace-nowrap font-medium uppercase leading-none"
          style={{
            fontSize: 'calc(var(--logo-h) * 0.28)',
            letterSpacing: '0.3em',
            // Balances the trailing letter-space so the line centres under the logo.
            paddingLeft: '0.3em',
            marginTop: 'calc(var(--logo-h) * 0.28)',
          }}
        >
          Science. Defined.
        </span>
      )}
    </span>
  )
}
