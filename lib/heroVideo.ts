// Customer-portal hero clip. It plays once, forwards, and holds on its final
// frame (HeroScanner mode="once"). To swap in new footage, see "Hero video"
// in README.md.
//
// A seamless loop clip can use mode="loop" (native loop attribute, forwards
// only) — add it here with its own landmarks file when one is supplied.

type Rect = [x0: number, y0: number, x1: number, y1: number]

export type HeroClip = {
  src: string
  landmarksSrc: string
  poster: string
  // Normalised video rect no overlay may cover (the generator's mark on the
  // placeholder clip). Leave the mark as supplied — never crop or paint over it.
  keepClear?: Rect
}

// TODO(launch): replace watermarked placeholder — the clip carries the small
// sparkle mark (bottom right). Swap for the watermark-free Ultra export, run
// `npm run track`, check ?debug=1 alignment, then drop `keepClear`.
export const HERO_CLIP: HeroClip = {
  src: '/videos/hero-play-once.mp4',
  landmarksSrc: '/data/hero-play-once.landmarks.json',
  poster: '/videos/hero-poster.webp',
  keepClear: [0.77, 0.86, 0.9, 0.95],
}
