import Image from 'next/image'
import ImagePlaceholder from './ImagePlaceholder'
import { IMAGE_DIMENSIONS } from '@/lib/images'

// Fixed-aspect wrapper + object-fit: contain, so product photos are never
// cropped. Falls back to a labelled placeholder when a SKU has no photo yet.
export default function ProductImage({
  src,
  alt,
  aspect = '4 / 3',
  sizes = '(max-width: 768px) 90vw, 400px',
  priority = false,
  className = '',
  background = 'bg-lgrey',
}: {
  src?: string
  alt: string
  aspect?: string
  sizes?: string
  priority?: boolean
  className?: string
  background?: string
}) {
  const dims = src ? IMAGE_DIMENSIONS[src] : undefined
  return (
    // Full width unless the caller sets its own width (e.g. a thumbnail).
    <div
      className={`relative overflow-hidden ${/(^|\s)(\w+:)?w-/.test(className) ? '' : 'w-full'} ${background} ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {src && dims ? (
        <Image
          src={src}
          alt={alt}
          width={dims.width}
          height={dims.height}
          sizes={sizes}
          priority={priority}
          className="h-full w-full object-contain"
        />
      ) : (
        <ImagePlaceholder label={`${alt} — photo coming soon`} className="absolute inset-0 h-full w-full" />
      )}
    </div>
  )
}
