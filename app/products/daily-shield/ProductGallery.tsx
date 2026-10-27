'use client'

import { useState } from 'react'
import ProductImage from '@/components/ui/ProductImage'

type GalleryImage = {
  src?: string
  alt: string
}

// Main image + thumbnails, all inside fixed aspect wrappers with
// object-fit: contain so the pack is never cropped. The main image loads
// eagerly (above the fold); thumbnails lazy-load.
export default function ProductGallery({ images, badge }: { images: GalleryImage[]; badge?: React.ReactNode }) {
  const [active, setActive] = useState(0)
  const current = images[active]

  return (
    <div>
      <ProductImage
        src={current.src}
        alt={current.alt}
        aspect="4 / 5"
        sizes="(max-width: 1024px) 90vw, 520px"
        priority
        className="mb-4 max-h-[560px]"
        badge={badge}
      />
      <div className="grid grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={img.alt}
            onClick={() => setActive(i)}
            className={`bg-lgrey border ${i === active ? 'border-navy border-2' : 'border-cardline'}`}
            aria-label={`Show ${img.alt}`}
            aria-pressed={i === active}
          >
            <ProductImage src={img.src} alt={img.alt} aspect="1 / 1" sizes="150px" />
          </button>
        ))}
      </div>
    </div>
  )
}
