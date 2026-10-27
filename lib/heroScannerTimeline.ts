// When each scanner overlay element shows on the customer-portal hero video.
// Times are in seconds of clip time. `start` is when an element begins to
// fade in; `end` is when it has fully faded out (FADE_SECONDS each way).
// Retime here after new footage lands — the component reads this as data.

export type Anchor =
  | 'forehead'
  | 'temple_r'
  | 'cheek_r'
  | 'cheek_l'
  | 'eye_r'
  | 'eye_l'
  | 'nose'
  | 'jaw_r'
  | 'chin'

// `_r` / `_l` are screen right / left. 'cheek' means whichever cheek faces the
// camera more during the cue (the other side turns away with yaw).
export type CueAnchor = Anchor | 'cheek'

export type ScannerElement =
  | { kind: 'brackets' }
  | { kind: 'reticle'; anchor: CueAnchor }
  | { kind: 'ring'; anchor: CueAnchor; size: 'large' | 'small' }
  // `label` indexes HERO_LABELS (content/heroLabels.ts). `side` is the
  // preferred side of the face; the component flips it if it would clip.
  // `dy` is the label's vertical offset from the anchor, in face widths.
  | { kind: 'label'; label: number; anchor: CueAnchor; side: 'left' | 'right' | 'cheek'; dy: number }

export type ScannerCue = ScannerElement & {
  start: number
  end: number
  desktopOnly?: boolean
}

export const FADE_SECONDS = 0.4
export const MOBILE_MAX_LABELS = 2

const HYDRATION = 0
const SKIN_TEXTURE = 1
const GLOW = 2
const FINE_LINES = 3

// Play-once clip (8 s):
// 0.5–3.0  brackets, forehead reticle, cheek ring, Hydration, Skin texture
// 3.0–5.5  Skin texture fades; eye and jaw rings, Glow, Fine lines join
// 5.5–5.9  everything fades out
// 5.9–8.0  clean face
const ONCE: ScannerCue[] = [
  { kind: 'brackets', start: 0.5, end: 5.9 },
  { kind: 'reticle', anchor: 'forehead', start: 0.5, end: 5.9 },
  { kind: 'ring', anchor: 'cheek', size: 'large', start: 0.5, end: 3.2 },
  { kind: 'label', label: HYDRATION, anchor: 'temple_r', side: 'right', dy: -0.2, start: 0.5, end: 5.9 },
  { kind: 'label', label: SKIN_TEXTURE, anchor: 'cheek', side: 'cheek', dy: 0.16, start: 0.5, end: 3.2 },
  { kind: 'ring', anchor: 'eye_r', size: 'small', start: 3.0, end: 5.9, desktopOnly: true },
  { kind: 'ring', anchor: 'jaw_r', size: 'small', start: 3.0, end: 5.9, desktopOnly: true },
  { kind: 'label', label: GLOW, anchor: 'cheek_l', side: 'left', dy: -0.08, start: 3.0, end: 5.9 },
  { kind: 'label', label: FINE_LINES, anchor: 'jaw_r', side: 'right', dy: 0.12, start: 3.0, end: 5.9 },
]

// Loop clip: overlays only in 0.8–3.2 s and 4.0–6.4 s, fully gone before the
// seam (6.4 s to the end and 0–0.8 s stay empty) so the loop point is clean.
const LOOP: ScannerCue[] = [
  { kind: 'brackets', start: 0.8, end: 3.2 },
  { kind: 'reticle', anchor: 'forehead', start: 0.8, end: 3.2 },
  { kind: 'ring', anchor: 'cheek', size: 'large', start: 0.8, end: 3.2 },
  { kind: 'label', label: HYDRATION, anchor: 'temple_r', side: 'right', dy: -0.2, start: 0.8, end: 3.2 },
  { kind: 'label', label: SKIN_TEXTURE, anchor: 'cheek', side: 'cheek', dy: 0.16, start: 0.8, end: 3.2 },
  { kind: 'brackets', start: 4.0, end: 6.4 },
  { kind: 'ring', anchor: 'eye_r', size: 'small', start: 4.0, end: 6.4, desktopOnly: true },
  { kind: 'ring', anchor: 'jaw_r', size: 'small', start: 4.0, end: 6.4, desktopOnly: true },
  { kind: 'label', label: GLOW, anchor: 'cheek_l', side: 'left', dy: -0.08, start: 4.0, end: 6.4 },
  { kind: 'label', label: FINE_LINES, anchor: 'jaw_r', side: 'right', dy: 0.12, start: 4.0, end: 6.4 },
]

export const HERO_TIMELINES: Record<'once' | 'loop', ScannerCue[]> = { once: ONCE, loop: LOOP }

// Mobile: drop desktop-only elements and cap labels on screen at once. When a
// label would exceed the cap, the longest-showing labels end as it starts.
export function mobileTimeline(cues: ScannerCue[], maxLabels = MOBILE_MAX_LABELS): ScannerCue[] {
  const out = cues.filter((c) => !c.desktopOnly).map((c) => ({ ...c }))
  const labels = out.filter((c) => c.kind === 'label').sort((a, b) => a.start - b.start)
  for (const cue of labels) {
    const showing = labels.filter((o) => o !== cue && o.start <= cue.start && o.end > cue.start)
    showing.sort((a, b) => a.start - b.start)
    while (showing.length >= maxLabels) showing.shift()!.end = cue.start
  }
  return out
}
