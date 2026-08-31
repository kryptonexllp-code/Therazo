'use client'

import { useState } from 'react'
import Image from 'next/image'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

type GalleryImage = {
  src: string
  alt: string
  label: string
}

export default function ProductGallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState(0)
  const current = images[active]

  return (
    <div>
      <div className="relative h-[380px] w-full mb-4 bg-lgrey">
        {current.src ? (
          <Image src={current.src} alt={current.alt} fill sizes="(max-width: 1024px) 90vw, 500px" className="object-contain" priority />
        ) : (
          <ImagePlaceholder label={current.label} className="h-full w-full" />
        )}
      </div>
      <div className="grid grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={img.label}
            onClick={() => setActive(i)}
            className={`relative h-24 bg-lgrey border ${
              i === active ? 'border-navy border-2' : 'border-cardline'
            }`}
            aria-label={`Show ${img.label}`}
          >
            {img.src ? (
              <Image src={img.src} alt={img.alt} fill sizes="150px" className="object-contain" />
            ) : (
              <ImagePlaceholder label={img.label} className="h-full w-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
