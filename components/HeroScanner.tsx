'use client'

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'
import Image from 'next/image'
import {
  FADE_SECONDS,
  HERO_TIMELINES,
  mobileTimeline,
  type Anchor,
  type ScannerCue,
} from '@/lib/heroScannerTimeline'

type Pt = [number, number]
type Box = [number, number, number, number]
type LandmarkFrame = {
  t: number
  anchors: Record<Anchor, Pt>
  faceBox: Box
  yaw: number
  visible: boolean
}
type Landmarks = { fps: number; width: number; height: number; frames: LandmarkFrame[] }
type Face = Omit<LandmarkFrame, 't'>

const ARC_TURN_SECONDS = 6
const EDGE = 12 // labels stay this far inside the container
const BRACKET_INSET = 8
const MIRROR: Partial<Record<Anchor, Anchor>> = {
  cheek_l: 'cheek_r',
  cheek_r: 'cheek_l',
  eye_l: 'eye_r',
  eye_r: 'eye_l',
}
const STROKE = 'rgba(255,255,255,0.85)'

// Label box size, estimated from Poppins' average glyph width so layout can be
// decided before the text renders.
const labelHeight = (fontSize: number) => fontSize + 6
const labelWidth = (text: string, fontSize: number) => Math.ceil(text.length * fontSize * 0.62 + 4)

function subscribeMedia(query: string) {
  return (onChange: () => void) => {
    const mql = window.matchMedia(query)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }
}
const noopSubscribe = () => () => {}

function useMedia(query: string) {
  return useSyncExternalStore(
    subscribeMedia(query),
    () => window.matchMedia(query).matches,
    () => false
  )
}

const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi)
const lerp = (a: number, b: number, k: number) => a + (b - a) * k
const lerpPt = (a: Pt, b: Pt, k: number): Pt => [lerp(a[0], b[0], k), lerp(a[1], b[1], k)]

// Landmarks at clip time t, interpolated between the two nearest frames.
function faceAt(lm: Landmarks, t: number): Face {
  const n = lm.frames.length
  const f = clamp(t * lm.fps, 0, n - 1)
  const i = Math.floor(f)
  const a = lm.frames[i]
  const b = lm.frames[Math.min(i + 1, n - 1)]
  const k = f - i
  const anchors = {} as Record<Anchor, Pt>
  for (const key of Object.keys(a.anchors) as Anchor[]) {
    anchors[key] = lerpPt(a.anchors[key], b.anchors[key], k)
  }
  return {
    anchors,
    faceBox: a.faceBox.map((v, j) => lerp(v, b.faceBox[j], k)) as Box,
    yaw: lerp(a.yaw, b.yaw, k),
    visible: a.visible && b.visible,
  }
}

// Same maths as object-fit: cover. The object-position is chosen so the
// average face centre sits in the middle of the container where the crop
// allows (falls back to a centre crop when there is nothing to crop).
function coverMapping(cw: number, ch: number, lm: Landmarks) {
  const s = Math.max(cw / lm.width, ch / lm.height)
  const rw = lm.width * s
  const rh = lm.height * s
  let fx = 0
  let fy = 0
  for (const fr of lm.frames) {
    fx += (fr.faceBox[0] + fr.faceBox[2]) / 2
    fy += (fr.faceBox[1] + fr.faceBox[3]) / 2
  }
  fx /= lm.frames.length
  fy /= lm.frames.length
  const px = rw > cw ? clamp((cw / 2 - fx * rw) / (cw - rw), 0, 1) : 0.5
  const py = rh > ch ? clamp((ch / 2 - fy * rh) / (ch - rh), 0, 1) : 0.5
  const ox = (cw - rw) * px
  const oy = (ch - rh) * py
  return {
    position: `${(px * 100).toFixed(2)}% ${(py * 100).toFixed(2)}%`,
    map: ([x, y]: Pt): Pt => [ox + x * rw, oy + y * rh],
    scaleX: rw,
  }
}

function cueOpacity(cue: ScannerCue, t: number) {
  return clamp(Math.min((t - cue.start) / FADE_SECONDS, (cue.end - t) / FADE_SECONDS), 0, 1)
}

// The cheek turned towards camera: positive yaw turns the face towards screen
// right, which brings the screen-left cheek forward.
function cheekFor(yaw: number): Anchor {
  return yaw > 0 ? 'cheek_l' : 'cheek_r'
}

type Mapped = { face: Face; pt: (a: Anchor) => Pt; box: Box; fw: number }

type LabelLayout = { dot: Pt; end: Pt; side: 'left' | 'right'; x: number; y: number; width: number }

function layoutLabel(
  cue: Extract<ScannerCue, { kind: 'label' }>,
  side: 'left' | 'right',
  anchor: Anchor,
  m: Mapped,
  text: string,
  fontSize: number,
  size: { w: number; h: number }
): LabelLayout & { clipped: boolean } {
  const width = labelWidth(text, fontSize)
  const height = labelHeight(fontSize)
  const dot = m.pt(anchor)
  const gap = 0.05 * m.fw
  const ux = side === 'right' ? m.box[2] + gap : m.box[0] - gap
  const uy = dot[1] + cue.dy * m.fw
  const x0 = side === 'right' ? ux : ux - width
  const x1 = x0 + width
  const y0 = uy - height
  const clipped = x0 < EDGE || x1 > size.w - EDGE || y0 < EDGE || uy > size.h - EDGE
  // Final safety: keep the whole label inside the container.
  const cx = clamp(x0, EDGE, size.w - EDGE - width)
  const cy = clamp(uy, EDGE + height, size.h - EDGE)
  const end: Pt = [side === 'right' ? cx : cx + width, cy]
  return { dot, end, side, x: cx, y: cy, width, clipped }
}

function intersects(a: Box, b: Box) {
  return a[0] < b[2] && a[2] > b[0] && a[1] < b[3] && a[3] > b[1]
}

export default function HeroScanner({
  src,
  landmarksSrc,
  mode,
  poster,
  labels,
  keepClear,
  className = '',
}: {
  src: string
  landmarksSrc: string
  mode: 'once' | 'loop'
  poster: string
  labels: string[]
  keepClear?: Box
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false)
  const reduce = useMedia('(prefers-reduced-motion: reduce)')
  const mobile = useMedia('(max-width: 767px)')
  const debug = useSyncExternalStore(
    noopSubscribe,
    () => new URLSearchParams(window.location.search).get('debug') === '1',
    () => false
  )
  const [lm, setLm] = useState<Landmarks | null>(null)
  const [size, setSize] = useState<{ w: number; h: number } | null>(null)
  const [t, setT] = useState(0)
  const playVideo = mounted && !reduce

  // Landmarks (skipped for reduced motion — no overlay is drawn).
  useEffect(() => {
    if (!playVideo) return
    let live = true
    fetch(landmarksSrc)
      .then((r) => r.json())
      .then((data: Landmarks) => live && setLm(data))
      .catch(() => {})
    return () => {
      live = false
    }
  }, [landmarksSrc, playVideo])

  // Container size, kept current on resize.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ w: width, h: height })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Overlay clock: one update per presented video frame where supported.
  useEffect(() => {
    const video = videoRef.current
    if (!video || !playVideo) return
    let handle = 0
    let stopped = false
    const read = () => {
      const d = video.duration
      setT(mode === 'loop' && d > 0 ? video.currentTime % d : video.currentTime)
    }
    if ('requestVideoFrameCallback' in video) {
      const tick = () => {
        if (stopped) return
        read()
        handle = video.requestVideoFrameCallback(tick)
      }
      handle = video.requestVideoFrameCallback(tick)
      return () => {
        stopped = true
        video.cancelVideoFrameCallback(handle)
      }
    }
    const tick = () => {
      if (stopped) return
      read()
      handle = requestAnimationFrame(tick)
    }
    handle = requestAnimationFrame(tick)
    return () => {
      stopped = true
      cancelAnimationFrame(handle)
    }
  }, [mode, playVideo])

  // Playback is forwards only — never reversed or rewound frame by frame.
  // 'once': plays through once and holds on the final frame; it never
  // restarts by itself. If the hero leaves the viewport and comes back, it
  // replays once from the start. Hiding the tab pauses and resumes in place.
  // 'loop': the native loop attribute, for a seamless loop clip.
  useEffect(() => {
    const video = videoRef.current
    const el = containerRef.current
    if (!video || !el || !playVideo) return
    video.muted = true
    let inView = true
    let leftView = false
    const sync = () => {
      if (!inView || document.hidden) {
        video.pause()
        return
      }
      if (mode === 'once' && leftView) {
        leftView = false
        video.currentTime = 0
      }
      if (!video.ended) video.play().catch(() => {})
    }
    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      if (!inView) leftView = true
      sync()
    })
    io.observe(el)
    document.addEventListener('visibilitychange', sync)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', sync)
    }
  }, [mode, playVideo])

  const mapping = useMemo(() => (size && lm ? coverMapping(size.w, size.h, lm) : null), [size, lm])
  const cues = useMemo(
    () => (mobile ? mobileTimeline(HERO_TIMELINES[mode]) : HERO_TIMELINES[mode]),
    [mobile, mode]
  )
  const fontSize = mobile ? 10 : 12

  // Per-cue decisions that must not change mid-cue (or the label would jump):
  // which cheek a 'cheek' anchor uses, and which side a label sits on.
  const resolved = useMemo(() => {
    if (!lm || !mapping || !size) return null
    const clearRect: Box | null = keepClear
      ? ([...mapping.map([keepClear[0], keepClear[1]]), ...mapping.map([keepClear[2], keepClear[3]])] as Box)
      : null
    return cues.map((cue) => {
      const samples: Face[] = []
      for (let s = cue.start; s <= cue.end; s += 0.25) samples.push(faceAt(lm, s))
      const meanYaw = samples.reduce((acc, f) => acc + f.yaw, 0) / samples.length
      const cheek = cheekFor(meanYaw)
      const anchor: Anchor = 'anchor' in cue ? (cue.anchor === 'cheek' ? cheek : cue.anchor) : 'nose'
      if (cue.kind !== 'label') return { anchor, side: 'right' as const }
      const preferred: 'left' | 'right' =
        cue.side === 'cheek' ? (cheek === 'cheek_r' ? 'right' : 'left') : cue.side
      const fails = (side: 'left' | 'right', a: Anchor) =>
        samples.some((face) => {
          const l = layoutLabel(cue, side, a, mapped(face, mapping), labels[cue.label] ?? '', fontSize, size)
          const rect: Box = [l.x, l.y - labelHeight(fontSize), l.x + l.width, l.y]
          return l.clipped || (clearRect !== null && intersects(rect, clearRect))
        })
      // Flip to the other side of the face (with the mirrored anchor, so the
      // leader never crosses the face). Without a mirror, stay and clamp.
      const other: 'left' | 'right' = preferred === 'right' ? 'left' : 'right'
      const mirror = MIRROR[anchor]
      if (mirror && fails(preferred, anchor) && !fails(other, mirror)) return { anchor: mirror, side: other }
      return { anchor, side: preferred }
    })
  }, [cues, lm, mapping, size, keepClear, labels, fontSize])

  const showOverlay = playVideo && lm && mapping && size && resolved
  const face = showOverlay ? faceAt(lm, t) : null
  const m = face && mapping ? mapped(face, mapping) : null

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {playVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: mapping?.position ?? '50% 30%' }}
          src={src}
          poster={poster}
          muted
          playsInline
          autoPlay
          preload="auto"
          loop={mode === 'loop'}
          aria-hidden="true"
        />
      ) : (
        <Image
          src={poster}
          alt=""
          fill
          priority
          sizes="(max-width: 767px) 100vw, 52vw"
          className="object-cover"
          style={{ objectPosition: mapping?.position ?? '50% 30%' }}
        />
      )}

      {showOverlay && m && m.face.visible && (
        <>
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none"
            width={size.w}
            height={size.h}
            aria-hidden="true"
          >
            {cues.map((cue, i) => {
              const op = cueOpacity(cue, t)
              if (op <= 0) return null
              return (
                <g key={i} opacity={op} fill="none" stroke={STROKE} strokeWidth={1.25}>
                  {renderElement(cue, resolved[i], m, t, labels, fontSize, size)}
                </g>
              )
            })}
            {debug && <DebugLayer m={m} mapping={mapping} keepClear={keepClear} t={t} />}
          </svg>
          {cues.map((cue, i) => {
            if (cue.kind !== 'label') return null
            const op = cueOpacity(cue, t)
            if (op <= 0) return null
            const text = labels[cue.label] ?? ''
            const l = layoutLabel(cue, resolved[i].side, resolved[i].anchor, m, text, fontSize, size)
            return (
              <span
                key={`label-${i}`}
                aria-hidden="true"
                className="absolute pointer-events-none whitespace-nowrap text-white font-normal leading-none"
                style={{
                  left: l.x,
                  top: l.y - labelHeight(fontSize),
                  width: l.width,
                  textAlign: l.side === 'right' ? 'left' : 'right',
                  fontSize,
                  letterSpacing: '0.04em',
                  textShadow: '0 1px 1px rgba(0,0,0,0.25)',
                  opacity: op,
                }}
              >
                {text}
              </span>
            )
          })}
        </>
      )}
    </div>
  )
}

function mapped(face: Face, mapping: NonNullable<ReturnType<typeof coverMapping>>): Mapped {
  const [x0, y0] = mapping.map([face.faceBox[0], face.faceBox[1]])
  const [x1, y1] = mapping.map([face.faceBox[2], face.faceBox[3]])
  return { face, pt: (a) => mapping.map(face.anchors[a]), box: [x0, y0, x1, y1], fw: x1 - x0 }
}

function renderElement(
  cue: ScannerCue,
  res: { anchor: Anchor; side: 'left' | 'right' },
  m: Mapped,
  t: number,
  labels: string[],
  fontSize: number,
  size: { w: number; h: number }
) {
  const ns = { vectorEffect: 'non-scaling-stroke' as const }
  switch (cue.kind) {
    case 'brackets': {
      // Four L-shaped corners around the face box, padded 8%, turning
      // slightly with yaw. Each corner is rotated first, then clamped inside
      // the container, so no corner is cut at the video edge.
      const [x0, y0, x1, y1] = m.box
      const pw = (x1 - x0) * 0.08
      const ph = (y1 - y0) * 0.08
      const bx0 = x0 - pw
      const by0 = y0 - ph
      const bx1 = x1 + pw
      const by1 = y1 + ph
      const arm = Math.min(bx1 - bx0, by1 - by0) * 0.12
      const cx = (bx0 + bx1) / 2
      const cy = (by0 + by1) / 2
      const a = (m.face.yaw * 0.12 * Math.PI) / 180
      const cos = Math.cos(a)
      const sin = Math.sin(a)
      const rot = (dx: number, dy: number): Pt => [dx * cos - dy * sin, dx * sin + dy * cos]
      // Corner offsets from centre, with the inward directions of its two arms.
      const corners: [number, number, number, number][] = [
        [bx0 - cx, by0 - cy, 1, 1],
        [bx1 - cx, by0 - cy, -1, 1],
        [bx1 - cx, by1 - cy, -1, -1],
        [bx0 - cx, by1 - cy, 1, -1],
      ]
      const d = corners
        .map(([dx, dy, sx, sy]) => {
          const [rx, ry] = rot(dx, dy)
          const vx = clamp(cx + rx, BRACKET_INSET, size.w - BRACKET_INSET)
          const vy = clamp(cy + ry, BRACKET_INSET, size.h - BRACKET_INSET)
          const [hx, hy] = rot(sx * arm, 0)
          const [ux, uy] = rot(0, sy * arm)
          return `M${vx + ux},${vy + uy} L${vx},${vy} L${vx + hx},${vy + hy}`
        })
        .join(' ')
      return <path d={d} {...ns} />
    }
    case 'reticle': {
      const [x, y] = m.pt(res.anchor)
      const r = 0.09 * m.fw
      const ri = r * 0.68
      const turn = ((t / ARC_TURN_SECONDS) * 360) % 360
      const a0 = (-40 * Math.PI) / 180
      const a1 = (40 * Math.PI) / 180
      return (
        <>
          <circle cx={x} cy={y} r={r} {...ns} />
          <path
            d={`M${x + ri * Math.cos(a0)},${y + ri * Math.sin(a0)} A${ri},${ri} 0 0 1 ${x + ri * Math.cos(a1)},${y + ri * Math.sin(a1)}`}
            transform={`rotate(${turn.toFixed(1)} ${x} ${y})`}
            {...ns}
          />
        </>
      )
    }
    case 'ring': {
      const [x, y] = m.pt(res.anchor)
      if (cue.size === 'large') return <circle cx={x} cy={y} r={0.07 * m.fw} {...ns} />
      return (
        <>
          <circle cx={x} cy={y} r={0.03 * m.fw} {...ns} />
          <circle cx={x} cy={y} r={Math.max(1.5, 0.008 * m.fw)} fill={STROKE} stroke="none" />
        </>
      )
    }
    case 'label': {
      const l = layoutLabel(cue, res.side, res.anchor, m, labels[cue.label] ?? '', fontSize, size)
      const ux1 = l.side === 'right' ? l.x + l.width : l.x
      return (
        <>
          <circle cx={l.dot[0]} cy={l.dot[1]} r={1.5} fill={STROKE} stroke="none" />
          <path d={`M${l.dot[0]},${l.dot[1]} L${l.end[0]},${l.end[1]} L${ux1},${l.end[1]}`} {...ns} />
        </>
      )
    }
  }
}

// ?debug=1 — landmark anchors as red dots, face box and the keep-clear zone.
function DebugLayer({
  m,
  mapping,
  keepClear,
  t,
}: {
  m: Mapped
  mapping: NonNullable<ReturnType<typeof coverMapping>>
  keepClear?: Box
  t: number
}) {
  const clear = keepClear
    ? [mapping.map([keepClear[0], keepClear[1]]), mapping.map([keepClear[2], keepClear[3]])]
    : null
  return (
    <g>
      <rect
        x={m.box[0]}
        y={m.box[1]}
        width={m.box[2] - m.box[0]}
        height={m.box[3] - m.box[1]}
        fill="none"
        stroke="red"
        strokeDasharray="4 4"
      />
      {(Object.keys(m.face.anchors) as Anchor[]).map((a) => {
        const [x, y] = m.pt(a)
        return (
          <g key={a}>
            <circle cx={x} cy={y} r={4} fill="red" />
            <text x={x + 6} y={y + 3} fill="red" fontSize={9}>
              {a}
            </text>
          </g>
        )
      })}
      {clear && (
        <rect
          x={clear[0][0]}
          y={clear[0][1]}
          width={clear[1][0] - clear[0][0]}
          height={clear[1][1] - clear[0][1]}
          fill="none"
          stroke="red"
        />
      )}
      <text x={8} y={16} fill="red" fontSize={11}>
        t={t.toFixed(2)} yaw={m.face.yaw.toFixed(1)}
      </text>
    </g>
  )
}

