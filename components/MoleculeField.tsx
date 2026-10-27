// Calm background for the landing page: a few line-drawn molecules (a ring
// with substituent bonds) drifting very slowly. Pure SVG + CSS — no
// gradients, no JS. The drift stops entirely under prefers-reduced-motion
// (see the media query in app/globals.css).

type Molecule = {
  x: number
  y: number
  r: number
  rotate: number
  opacity: number
  duration: number
  delay: number
  dx: number
  dy: number
}

const MOLECULES: Molecule[] = [
  { x: 170, y: 150, r: 34, rotate: 10, opacity: 0.14, duration: 58, delay: 0, dx: 18, dy: 12 },
  { x: 1240, y: 130, r: 26, rotate: -18, opacity: 0.11, duration: 64, delay: -12, dx: -14, dy: 16 },
  { x: 1310, y: 640, r: 40, rotate: 24, opacity: 0.12, duration: 70, delay: -30, dx: -20, dy: -10 },
  { x: 140, y: 700, r: 30, rotate: -6, opacity: 0.1, duration: 62, delay: -20, dx: 16, dy: -14 },
  { x: 760, y: 820, r: 22, rotate: 32, opacity: 0.09, duration: 54, delay: -8, dx: 12, dy: -8 },
  { x: 980, y: 70, r: 20, rotate: -28, opacity: 0.08, duration: 60, delay: -40, dx: -10, dy: 10 },
]

function ring(r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2
    return [Math.cos(a) * r, Math.sin(a) * r] as const
  })
}

function MoleculeShape({ r }: { r: number }) {
  const pts = ring(r)
  const sub1 = [pts[0][0], pts[0][1] - r * 0.9] as const
  const sub2 = [pts[2][0] + r * 0.78, pts[2][1] + r * 0.45] as const
  const sub3 = [pts[4][0] - r * 0.78, pts[4][1] + r * 0.45] as const
  return (
    <>
      <polygon points={pts.map((p) => p.join(',')).join(' ')} fill="none" stroke="#FFFFFF" strokeWidth="1" />
      {[[pts[0], sub1], [pts[2], sub2], [pts[4], sub3]].map(([a, b], i) => (
        <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#FFFFFF" strokeWidth="1" />
      ))}
      {[...pts, sub1, sub2, sub3].map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={i < 6 ? 2 : 3} fill="#FFFFFF" />
      ))}
    </>
  )
}

export default function MoleculeField() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full pointer-events-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      {MOLECULES.map((m, i) => (
        <g
          key={i}
          className="therazo-drift"
          style={{
            opacity: m.opacity,
            animation: `therazo-drift-${i} ${m.duration}s ease-in-out ${m.delay}s infinite alternate`,
          }}
        >
          <g transform={`translate(${m.x} ${m.y}) rotate(${m.rotate})`}>
            <MoleculeShape r={m.r} />
          </g>
        </g>
      ))}
      <style>{MOLECULES.map(
        (m, i) => `@keyframes therazo-drift-${i} { from { transform: translate(0, 0); } to { transform: translate(${m.dx}px, ${m.dy}px); } }`
      ).join('\n')}</style>
    </svg>
  )
}
