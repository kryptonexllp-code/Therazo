import Image from 'next/image'
import ImagePlaceholder from './ImagePlaceholder'
import { IMAGE_DIMENSIONS } from '@/lib/images'

// Fixed-aspect wrapper + object-fit: contain, so product photos are never
// cropped. Falls back to a labelled placeholder when a SKU has no photo yet.
// A `badge` sits in its own row at the top-left of the tile, above the photo,
// so it can never cover the product however many lines it wraps to.
export default function ProductImage({
  src,
  alt,
  aspect = '4 / 3',
  sizes = '(max-width: 768px) 90vw, 400px',
  priority = false,
  className = '',
  background = 'bg-lgrey',
  badge,
}: {
  src?: string
  alt: string
  aspect?: string
  sizes?: string
  priority?: boolean
  className?: string
  background?: string
  badge?: React.ReactNode
}) {
  const dims = src ? IMAGE_DIMENSIONS[src] : undefined
  const media =
    src && dims ? (
      <Image
        src={src}
        alt={alt}
        width={dims.width}
        height={dims.height}
        sizes={sizes}
        priority={priority}
        className={badge ? 'absolute inset-0 h-full w-full object-contain' : 'h-full w-full object-contain'}
      />
    ) : (
      <ImagePlaceholder label={`${alt} — photo coming soon`} className="absolute inset-0 h-full w-full" />
    )
  return (
    // Full width unless the caller sets its own width (e.g. a thumbnail).
    <div
      className={`relative overflow-hidden ${/(^|\s)(\w+:)?w-/.test(className) ? '' : 'w-full'} ${background} ${badge ? 'flex flex-col' : ''} ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {badge ? (
        <>
          <div className="px-2.5 pt-2.5 pb-1">{badge}</div>
          <div className="relative flex-1 min-h-0">{media}</div>
        </>
      ) : (
        media
      )}
    </div>
  )
}
