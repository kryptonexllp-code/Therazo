'use client'

import { useState } from 'react'
import HeroScanner from './HeroScanner'
import { HERO_CLIPS } from '@/lib/heroVideo'
import { HERO_LABELS } from '@/content/heroLabels'

// Plays the play-once clip, then hands over to the loop. Only the active clip
// is mounted, so only it preloads; the loop's poster is the play-once end
// frame, which covers the hand-over while the loop loads.
export default function CustomerHeroVideo() {
  const [mode, setMode] = useState<'once' | 'loop'>('once')
  const clip = HERO_CLIPS[mode]
  return (
    <HeroScanner
      key={mode}
      mode={mode}
      src={clip.src}
      landmarksSrc={clip.landmarksSrc}
      poster={clip.poster}
      keepClear={clip.keepClear}
      labels={HERO_LABELS}
      onEnded={mode === 'once' ? () => setMode('loop') : undefined}
    />
  )
}
