// Customer-portal hero clips. The page plays `once` first, then hands over to
// `loop`. To swap in new footage, see "Hero video" in README.md.

type Rect = [x0: number, y0: number, x1: number, y1: number]

export type HeroClip = {
  src: string
  landmarksSrc: string
  poster: string
  // Normalised video rect no overlay may cover (the generator's mark on the
  // placeholder clip). Leave the mark as supplied — never crop or paint over it.
  keepClear?: Rect
}

// TODO(launch): replace watermarked placeholder — both clips carry the small
// sparkle mark (bottom right). Swap for the watermark-free Ultra exports, run
// `npm run track`, check ?debug=1 alignment, then drop `keepClear`.
const PLACEHOLDER_MARK: Rect = [0.77, 0.86, 0.9, 0.95]

export const HERO_CLIPS = {
  once: {
    src: '/videos/hero-play-once.mp4',
    landmarksSrc: '/data/hero-play-once.landmarks.json',
    poster: '/videos/hero-poster.webp',
    keepClear: PLACEHOLDER_MARK,
  },
  // TODO(launch): hero-loop.mp4 is a stand-in built from the second half of the
  // play-once clip (reversed, then forward) so it starts on the play-once end
  // frame and loops without a jump. Replace with the supplied seamless loop.
  loop: {
    src: '/videos/hero-loop.mp4',
    landmarksSrc: '/data/hero-loop.landmarks.json',
    // Last frame of the play-once clip, which is also the loop's first frame,
    // so the hand-over shows no change while the loop clip loads.
    poster: '/videos/hero-end.webp',
    keepClear: PLACEHOLDER_MARK,
  },
} satisfies Record<'once' | 'loop', HeroClip>
