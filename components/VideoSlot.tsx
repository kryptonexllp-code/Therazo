'use client'

import { useState, useSyncExternalStore } from 'react'
import Image from 'next/image'
import { useReducedMotion } from 'framer-motion'
import { IMAGE_DIMENSIONS } from '@/lib/images'
import type { VideoSlotConfig } from '@/lib/videos'

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
    () => false
  )
}

// A swappable video slot.
// - `loop` slots autoplay muted on desktop only; mobile and reduced-motion
//   visitors get the poster, never autoplay.
// - Other slots show the poster and play (with controls) on tap.
// - With no `src` yet, tapping play shows a "coming soon" note.
// - aspect="fill" fills a sized parent instead of using a fixed ratio.
export default function VideoSlot({
  slot,
  loop = false,
  aspect = '16 / 9',
  priority = false,
  showCaption = true,
  className = '',
  background = 'bg-[#0D1F35]',
}: {
  slot: VideoSlotConfig
  loop?: boolean
  aspect?: string
  priority?: boolean
  showCaption?: boolean
  className?: string
  background?: string
}) {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const reduce = useReducedMotion()
  const [playing, setPlaying] = useState(false)
  const [comingSoon, setComingSoon] = useState(false)
  const autoLoop = loop && Boolean(slot.src) && isDesktop && !reduce
  const posterDims = slot.poster ? IMAGE_DIMENSIONS[slot.poster] : undefined

  return (
    <figure className={className}>
      <div
        className={`relative w-full overflow-hidden ${background} ${aspect === 'fill' ? 'h-full' : ''}`}
        style={aspect === 'fill' ? undefined : { aspectRatio: aspect }}
      >
        {autoLoop ? (
          <video
            className="absolute inset-0 h-full w-full object-contain"
            src={slot.src}
            poster={slot.poster}
            autoPlay
            muted
            loop
            playsInline
            aria-label={slot.caption}
          />
        ) : playing && slot.src ? (
          <video
            className="absolute inset-0 h-full w-full object-contain"
            src={slot.src}
            poster={slot.poster}
            controls
            autoPlay
            playsInline
            aria-label={slot.caption}
          />
        ) : (
          <>
            {slot.poster && posterDims && (
              <Image
                src={slot.poster}
                alt={slot.caption}
                width={posterDims.width}
                height={posterDims.height}
                priority={priority}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="absolute inset-0 h-full w-full object-contain"
              />
            )}
            {!loop && (
              <button
                aria-label={`Play: ${slot.title}`}
                onClick={() => (slot.src ? setPlaying(true) : setComingSoon(true))}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90">
                  <span className="ml-0.5 text-[14px] text-navy">▶</span>
                </span>
              </button>
            )}
            {comingSoon && (
              <button
                onClick={() => setComingSoon(false)}
                className="absolute inset-0 flex items-center justify-center bg-black/85 text-center px-4"
              >
                <span className="text-white text-[13px]">Video coming soon · care@therazo.co</span>
              </button>
            )}
          </>
        )}
      </div>
      {showCaption && (
        <figcaption className="p-4">
          <span className="block font-bold text-white text-[13px]">{slot.title}</span>
          <span className="block text-bluemuted text-[11px] mt-1">{slot.meta}</span>
          <span className="block text-bluelight text-[12px] mt-2 leading-[1.5]">{slot.caption}</span>
        </figcaption>
      )}
    </figure>
  )
}
