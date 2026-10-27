// Swappable video slots. To go live, drop the file in /public/videos and set
// `src` (and a `poster`) here — no component changes needed. The customer
// portal hero video is configured separately in lib/heroVideo.ts.
export type VideoSlotConfig = {
  id: string
  title: string
  meta: string
  caption: string
  src?: string
  poster?: string
}

export const VIDEO_SLOTS = {
  application: {
    id: 'application',
    title: 'Daily application — Indian skin tones',
    meta: '60 sec · AI generated',
    caption: 'How two finger-lengths of Daily Shield spread across face and neck.',
    src: undefined,
    poster: undefined,
  },
  ectoin: {
    id: 'ectoin',
    title: 'Ectoin — holding water at the skin surface',
    meta: '45 sec · Molecular animation',
    caption: 'How Ectoin draws water to skin cells and forms a stabilising shell around them.',
    src: undefined,
    poster: undefined,
  },
  uv: {
    id: 'uv',
    title: 'UV — what PA++++ means',
    meta: '30 sec · Science explainer',
    caption: 'UVB, UVA and the PA rating, explained.',
    src: undefined,
    poster: undefined,
  },
} satisfies Record<string, VideoSlotConfig>
