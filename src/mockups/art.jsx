import { useId } from 'react'

/** Small seeded RNG so generated art is identical on every render / build. */
export function rng(seed) {
  let s = seed >>> 0
  return () => {
    s = (s + 0x6d2b79f5) >>> 0
    let t = s
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const pick = (r, arr) => arr[Math.floor(r() * arr.length)]
const uid = (raw) => raw.replace(/:/g, '')

/* =====================================================================================
   FOOD  (top-down, viewBox 200×200)  – used by the restaurant visual
   ===================================================================================== */

function PlateBase({ id, rim = '#f4efe7', inner = '#ece5d9', r = 92 }) {
  return (
    <>
      <defs>
        <filter id={`${id}-sh`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <radialGradient id={`${id}-rim`} cx="38%" cy="32%" r="80%">
          <stop offset="0" stopColor="#fffdf8" />
          <stop offset="1" stopColor={rim} />
        </radialGradient>
      </defs>
      <circle cx="106" cy="112" r={r} fill="#000" opacity=".55" filter={`url(#${id}-sh)`} />
      <circle cx="100" cy="100" r={r} fill={`url(#${id}-rim)`} />
      <circle cx="100" cy="100" r={r - 11} fill={inner} />
      <circle cx="100" cy="100" r={r - 11} fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="1" />
    </>
  )
}

function Lemon({ x, y, rot = 0, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <path d="M-15 0a15 15 0 0 1 30 0z" fill="#f2d44b" />
      <path d="M-12 -1a12 12 0 0 1 24 0z" fill="#f8e98d" />
      {[-8, -3, 2, 7].map((x2) => (
        <path key={x2} d={`M0 -1L${x2 * 1.3} -11`} stroke="#f2d44b" strokeWidth=".9" />
      ))}
    </g>
  )
}

export function Biryani() {
  const id = uid(useId())
  const r = rng(11)
  const grains = Array.from({ length: 330 }, () => {
    const a = r() * Math.PI * 2
    const d = 60 * Math.sqrt(r())
    return { x: 100 + Math.cos(a) * d, y: 100 + Math.sin(a) * d, rot: r() * 180, c: pick(r, ['#f6df8a', '#fbefc2', '#eab84a', '#fff6d8', '#e09a2e', '#f3cf68']) }
  })
  const onions = Array.from({ length: 26 }, () => {
    const a = r() * Math.PI * 2
    const d = 52 * Math.sqrt(r())
    return { x: 100 + Math.cos(a) * d, y: 100 + Math.sin(a) * d, rot: r() * 180, w: 7 + r() * 8 }
  })
  const leaves = Array.from({ length: 16 }, () => {
    const a = r() * Math.PI * 2
    const d = 50 * Math.sqrt(r())
    return { x: 100 + Math.cos(a) * d, y: 100 + Math.sin(a) * d, rot: r() * 180 }
  })
  return (
    <svg viewBox="0 0 200 200" className="block h-full w-full" aria-hidden="true">
      <PlateBase id={id} />
      <defs>
        <radialGradient id={`${id}-mound`} cx="45%" cy="40%" r="65%">
          <stop offset="0" stopColor="#f9eab0" />
          <stop offset="1" stopColor="#d9a43f" />
        </radialGradient>
        <radialGradient id={`${id}-chk`} cx="35%" cy="30%" r="75%">
          <stop offset="0" stopColor="#d58442" />
          <stop offset="1" stopColor="#7a3411" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="64" fill={`url(#${id}-mound)`} />
      {grains.map((g, i) => (
        <ellipse key={i} cx={g.x} cy={g.y} rx="5.2" ry="1.5" fill={g.c} transform={`rotate(${g.rot} ${g.x} ${g.y})`} opacity=".95" />
      ))}
      {onions.map((o, i) => (
        <path key={i} d={`M${o.x} ${o.y}q${o.w / 2} -5 ${o.w} 0`} stroke="#6b3a12" strokeWidth="1.6" fill="none" strokeLinecap="round" transform={`rotate(${o.rot} ${o.x} ${o.y})`} opacity=".85" />
      ))}
      {[
        [78, 88, 24, 16],
        [118, 96, 26, 17],
        [96, 124, 24, 15],
      ].map(([x, y, w, h], i) => (
        <g key={i}>
          <ellipse cx={x + 2} cy={y + 3} rx={w / 2 + 1} ry={h / 2 + 1} fill="#000" opacity=".28" />
          <ellipse cx={x} cy={y} rx={w / 2} ry={h / 2} fill={`url(#${id}-chk)`} transform={`rotate(${i * 50 - 20} ${x} ${y})`} />
          <ellipse cx={x - 4} cy={y - 3} rx={w / 5} ry={h / 7} fill="#f3b27a" opacity=".5" transform={`rotate(${i * 50 - 20} ${x} ${y})`} />
        </g>
      ))}
      {/* boiled egg half */}
      <g>
        <ellipse cx="132" cy="128" rx="14" ry="10" fill="#000" opacity=".25" transform="translate(2 3)" />
        <ellipse cx="132" cy="128" rx="14" ry="10" fill="#fffdf6" transform="rotate(-24 132 128)" />
        <ellipse cx="132" cy="128" rx="6.5" ry="5" fill="#f0b323" transform="rotate(-24 132 128)" />
        <ellipse cx="130" cy="126" rx="2.4" ry="1.6" fill="#fbe08a" transform="rotate(-24 132 128)" />
      </g>
      {leaves.map((l, i) => (
        <ellipse key={i} cx={l.x} cy={l.y} rx="4.6" ry="2.2" fill={i % 3 ? '#4f9a3b' : '#7fbb55'} transform={`rotate(${l.rot} ${l.x} ${l.y})`} />
      ))}
      <Lemon x={42} y={156} rot={30} s={0.95} />
    </svg>
  )
}

export function Karahi() {
  const id = uid(useId())
  const r = rng(23)
  const ginger = Array.from({ length: 30 }, () => {
    const a = r() * Math.PI * 2
    const d = 60 * Math.sqrt(r())
    return { x: 100 + Math.cos(a) * d, y: 100 + Math.sin(a) * d, rot: r() * 180 }
  })
  const herb = Array.from({ length: 34 }, () => {
    const a = r() * Math.PI * 2
    const d = 62 * Math.sqrt(r())
    return { x: 100 + Math.cos(a) * d, y: 100 + Math.sin(a) * d }
  })
  const bubbles = Array.from({ length: 16 }, () => {
    const a = r() * Math.PI * 2
    const d = 64 * Math.sqrt(r())
    return { x: 100 + Math.cos(a) * d, y: 100 + Math.sin(a) * d, s: 1.5 + r() * 2.5 }
  })
  return (
    <svg viewBox="0 0 200 200" className="block h-full w-full" aria-hidden="true">
      <defs>
        <filter id={`${id}-sh`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <radialGradient id={`${id}-pan`} cx="35%" cy="30%" r="85%">
          <stop offset="0" stopColor="#4a4442" />
          <stop offset="1" stopColor="#14110f" />
        </radialGradient>
        <radialGradient id={`${id}-gravy`} cx="40%" cy="35%" r="75%">
          <stop offset="0" stopColor="#e8602a" />
          <stop offset="0.6" stopColor="#bb3511" />
          <stop offset="1" stopColor="#7d1f08" />
        </radialGradient>
        <radialGradient id={`${id}-chk`} cx="35%" cy="30%" r="75%">
          <stop offset="0" stopColor="#e39a56" />
          <stop offset="1" stopColor="#92440f" />
        </radialGradient>
      </defs>
      <circle cx="108" cy="114" r="88" fill="#000" opacity=".55" filter={`url(#${id}-sh)`} />
      {/* handles */}
      <rect x="2" y="92" width="24" height="16" rx="8" fill="#26211f" />
      <rect x="174" y="92" width="24" height="16" rx="8" fill="#26211f" />
      <circle cx="100" cy="100" r="86" fill={`url(#${id}-pan)`} />
      <circle cx="100" cy="100" r="86" fill="none" stroke="#6b6360" strokeWidth="1.2" opacity=".6" />
      <circle cx="100" cy="100" r="72" fill={`url(#${id}-gravy)`} />
      {bubbles.map((b, i) => (
        <circle key={i} cx={b.x} cy={b.y} r={b.s} fill="#ffb27a" opacity=".35" />
      ))}
      {[
        [70, 80], [112, 70], [132, 104], [100, 106], [74, 124], [118, 138], [96, 74],
      ].map(([x, y], i) => (
        <g key={i}>
          <ellipse cx={x + 1.5} cy={y + 2.5} rx="15" ry="11" fill="#000" opacity=".3" />
          <ellipse cx={x} cy={y} rx="15" ry="11" fill={`url(#${id}-chk)`} transform={`rotate(${i * 37} ${x} ${y})`} />
          <ellipse cx={x - 4} cy={y - 3} rx="6" ry="3" fill="#ffd2a0" opacity=".5" transform={`rotate(${i * 37} ${x} ${y})`} />
        </g>
      ))}
      {[
        'M58 108c14 -10 30 -8 42 4',
        'M104 56c14 6 22 18 24 30',
        'M84 132c14 6 30 4 42 -6',
        'M60 70c8 -8 20 -12 32 -10',
      ].map((d, i) => (
        <path key={i} d={d} stroke="#3f8a2a" strokeWidth="5" strokeLinecap="round" fill="none" />
      ))}
      {ginger.map((g, i) => (
        <line key={i} x1={g.x} y1={g.y} x2={g.x + 8} y2={g.y} stroke="#f3dca6" strokeWidth="1.4" strokeLinecap="round" transform={`rotate(${g.rot} ${g.x} ${g.y})`} />
      ))}
      {herb.map((h, i) => (
        <circle key={i} cx={h.x} cy={h.y} r="1.5" fill={i % 2 ? '#5aa341' : '#8cc866'} />
      ))}
    </svg>
  )
}

export function Kebab() {
  const id = uid(useId())
  const r = rng(5)
  const rings = [
    [48, 52, 12], [64, 40, 9], [38, 74, 8],
  ]
  return (
    <svg viewBox="0 0 200 200" className="block h-full w-full" aria-hidden="true">
      <PlateBase id={id} rim="#222" inner="#2b2b2e" />
      <defs>
        <linearGradient id={`${id}-k`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#b86a35" />
          <stop offset="0.55" stopColor="#8a431a" />
          <stop offset="1" stopColor="#5a2a0f" />
        </linearGradient>
      </defs>
      {rings.map(([x, y, rr], i) => (
        <circle key={i} cx={x + 8} cy={y + 8} r={rr} fill="none" stroke="#b86ac4" strokeWidth="2.2" opacity=".9" />
      ))}
      {[
        [100, 74, -8], [96, 100, 4], [102, 126, -3],
      ].map(([x, y, rot], i) => (
        <g key={i} transform={`rotate(${rot} ${x} ${y})`}>
          <rect x={x - 48} y={y - 11 + 2.5} width="96" height="22" rx="11" fill="#000" opacity=".35" />
          <rect x={x - 48} y={y - 11} width="96" height="22" rx="11" fill={`url(#${id}-k)`} />
          {Array.from({ length: 8 }, (_, j) => (
            <line key={j} x1={x - 38 + j * 11} y1={y - 8} x2={x - 32 + j * 11} y2={y + 8} stroke="#2a1105" strokeWidth="2.2" opacity=".55" strokeLinecap="round" />
          ))}
          <rect x={x - 42} y={y - 8} width="70" height="4" rx="2" fill="#f0b27a" opacity=".3" />
        </g>
      ))}
      <circle cx="152" cy="146" r="12" fill="#6fae3f" />
      <circle cx="149" cy="143" r="5" fill="#9bd36a" opacity=".6" />
      {Array.from({ length: 14 }, (_, i) => (
        <circle key={i} cx={46 + r() * 110} cy={44 + r() * 110} r="1.4" fill="#e9d08a" opacity=".6" />
      ))}
      <Lemon x={44} y={152} rot={-18} />
    </svg>
  )
}

export function GulabJamun() {
  const id = uid(useId())
  const r = rng(9)
  const pist = Array.from({ length: 22 }, () => {
    const a = r() * Math.PI * 2
    const d = 56 * Math.sqrt(r())
    return { x: 100 + Math.cos(a) * d, y: 100 + Math.sin(a) * d, rot: r() * 180 }
  })
  return (
    <svg viewBox="0 0 200 200" className="block h-full w-full" aria-hidden="true">
      <PlateBase id={id} rim="#efe7da" inner="#dcd2c2" />
      <defs>
        <radialGradient id={`${id}-syr`} cx="40%" cy="35%" r="80%">
          <stop offset="0" stopColor="#f0a82e" />
          <stop offset="1" stopColor="#a8590b" />
        </radialGradient>
        <radialGradient id={`${id}-gj`} cx="32%" cy="28%" r="80%">
          <stop offset="0" stopColor="#8a3d17" />
          <stop offset="0.55" stopColor="#4a1c08" />
          <stop offset="1" stopColor="#1f0a03" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="64" fill={`url(#${id}-syr)`} />
      <circle cx="100" cy="100" r="64" fill="none" stroke="#ffd98a" strokeOpacity=".5" />
      {[
        [78, 82], [122, 82], [100, 122], [102, 98],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x + 3} cy={y + 4} r="21" fill="#000" opacity=".3" />
          <circle cx={x} cy={y} r="21" fill={`url(#${id}-gj)`} />
          <ellipse cx={x - 7} cy={y - 8} rx="7" ry="3.8" fill="#fff" opacity=".35" transform={`rotate(-30 ${x - 7} ${y - 8})`} />
        </g>
      ))}
      {pist.map((p, i) => (
        <rect key={i} x={p.x} y={p.y} width="5" height="1.8" rx=".9" fill={i % 2 ? '#8cbf4f' : '#b5db7a'} transform={`rotate(${p.rot} ${p.x} ${p.y})`} />
      ))}
    </svg>
  )
}

/* =====================================================================================
   CRAFT  (viewBox 0 0 120 120)  – used by the She Commerce visual
   ===================================================================================== */

export function AjrakArt({ bg = '#16224f' }) {
  const id = uid(useId())
  return (
    <svg viewBox="0 0 120 120" className="block h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id={`${id}-p`} width="24" height="24" patternUnits="userSpaceOnUse">
          <rect width="24" height="24" fill={bg} />
          <path d="M12 2L22 12 12 22 2 12z" fill="#b3262a" />
          <path d="M12 6.5L17.5 12 12 17.5 6.5 12z" fill="#f3e7d0" />
          <path d="M12 9.5L14.5 12 12 14.5 9.5 12z" fill="#16224f" />
          <circle cx="0" cy="0" r="2.6" fill="#f3e7d0" />
          <circle cx="24" cy="0" r="2.6" fill="#f3e7d0" />
          <circle cx="0" cy="24" r="2.6" fill="#f3e7d0" />
          <circle cx="24" cy="24" r="2.6" fill="#f3e7d0" />
          <path d="M12 0v2M12 22v2M0 12h2M22 12h2" stroke="#f3e7d0" strokeWidth="1" />
        </pattern>
        <linearGradient id={`${id}-f`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".16" />
          <stop offset="0.5" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".38" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" fill={`url(#${id}-p)`} />
      <rect width="120" height="120" fill={`url(#${id}-f)`} />
      <path d="M-4 40C30 30 60 52 124 36" stroke="#000" strokeOpacity=".22" strokeWidth="5" fill="none" />
      <path d="M-4 84C34 74 70 98 124 82" stroke="#fff" strokeOpacity=".1" strokeWidth="5" fill="none" />
    </svg>
  )
}

export function RilliArt() {
  const r = rng(31)
  const cols = ['#b3262a', '#e3a02f', '#1f8a8a', '#16224f', '#d9622b', '#f3e7d0', '#7a2d6b']
  const cells = []
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const a = cols[Math.floor(r() * cols.length)]
      let b = cols[Math.floor(r() * cols.length)]
      if (b === a) b = '#f3e7d0'
      cells.push({ x: i * 24, y: j * 24, a, b, c: cols[Math.floor(r() * cols.length)] })
    }
  }
  return (
    <svg viewBox="0 0 120 120" className="block h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {cells.map((c, i) => (
        <g key={i} transform={`translate(${c.x} ${c.y})`}>
          <rect width="24" height="24" fill={c.a} />
          <path d="M12 2L22 12 12 22 2 12z" fill={c.b} />
          <circle cx="12" cy="12" r="4" fill={c.c} />
          <path d="M12 2L22 12 12 22 2 12z" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth=".8" strokeDasharray="1.8 1.6" />
        </g>
      ))}
      <rect width="120" height="120" fill="none" stroke="#fff" strokeOpacity=".5" strokeWidth="1" strokeDasharray="3 2" />
    </svg>
  )
}

export function PotteryArt({ tint = '#e7d9bd' }) {
  const id = uid(useId())
  const body = 'M44 18h32c0 8-3 12 5 21 11 12 18 24 15 38-3 14-18 22-36 22S27 91 24 77c-3-14 4-26 15-38 8-9 5-13 5-21z'
  return (
    <svg viewBox="0 0 120 120" className="block h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={tint} />
          <stop offset="1" stopColor="#c9b48c" />
        </linearGradient>
        <linearGradient id={`${id}-v`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0b5d6b" />
          <stop offset="0.42" stopColor="#1fa3a8" />
          <stop offset="1" stopColor="#0a4a58" />
        </linearGradient>
        <clipPath id={`${id}-c`}>
          <path d={body} />
        </clipPath>
      </defs>
      <rect width="120" height="120" fill={`url(#${id}-bg)`} />
      <ellipse cx="60" cy="104" rx="34" ry="5" fill="#000" opacity=".25" />
      <path d={body} fill={`url(#${id}-v)`} />
      <g clipPath={`url(#${id}-c)`}>
        <rect x="0" y="52" width="120" height="3" fill="#f3e7d0" />
        <rect x="0" y="58" width="120" height="1.4" fill="#e3a02f" />
        <rect x="0" y="88" width="120" height="3" fill="#f3e7d0" />
        <rect x="0" y="94" width="120" height="1.4" fill="#e3a02f" />
        {[34, 47, 60, 73, 86].map((x, i) => (
          <g key={x} transform={`translate(${x} 72)`}>
            <circle r="4" fill="#f3e7d0" />
            <circle r="1.6" fill="#b3262a" />
            {[0, 72, 144, 216, 288].map((a) => (
              <ellipse key={a} cx="0" cy="-6.6" rx="1.7" ry="2.6" fill={i % 2 ? '#e3a02f' : '#f3e7d0'} transform={`rotate(${a})`} />
            ))}
          </g>
        ))}
        <path d="M40 22h8c-1 12-6 22-14 34" stroke="#fff" strokeOpacity=".28" strokeWidth="5" strokeLinecap="round" fill="none" />
      </g>
      <rect x="42" y="14" width="36" height="6" rx="3" fill="#0b4c59" />
    </svg>
  )
}

export function TopiArt() {
  const id = uid(useId())
  const dome = 'M14 90C8 30 34 14 60 14s52 16 46 76c-8 0-18 0-24 0-4-16-40-16-44 0-6 0-16 0-24 0z'
  const mirrors = [
    [60, 38, 7], [38, 54, 5], [82, 54, 5], [24, 72, 3.8], [96, 72, 3.8], [60, 60, 3.6],
  ]
  return (
    <svg viewBox="0 0 120 120" className="block h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f0dcc0" />
          <stop offset="1" stopColor="#d8b98e" />
        </linearGradient>
        <linearGradient id={`${id}-c`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8f1f2b" />
          <stop offset="1" stopColor="#5a0f1b" />
        </linearGradient>
        <radialGradient id={`${id}-m`}>
          <stop offset="0" stopColor="#fdfdff" />
          <stop offset="1" stopColor="#8ec7e6" />
        </radialGradient>
      </defs>
      <rect width="120" height="120" fill={`url(#${id}-bg)`} />
      <ellipse cx="60" cy="97" rx="42" ry="4" fill="#000" opacity=".22" />
      <path d={dome} fill={`url(#${id}-c)`} />
      <path d="M17 80C21 28 99 28 103 80" stroke="#e3b04a" strokeWidth="2" fill="none" strokeDasharray="4 2.4" />
      <path d="M24 84C28 40 92 40 96 84" stroke="#e3b04a" strokeWidth="1.2" fill="none" />
      {mirrors.map(([x, y, rr], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={rr + 2.4} fill="none" stroke="#e3b04a" strokeWidth="1.1" strokeDasharray="1.6 1.2" />
          <circle cx={x} cy={y} r={rr} fill={`url(#${id}-m)`} stroke="#e3b04a" strokeWidth="1" />
        </g>
      ))}
      <path d="M14 90h22c6-14 42-14 48 0h22" stroke="#e3b04a" strokeWidth="2.4" fill="none" />
      <path d="M42 22c6-5 30-5 36 0" stroke="#fff" strokeOpacity=".22" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function JewelryArt() {
  const id = uid(useId())
  const beads = Array.from({ length: 19 }, (_, i) => {
    const t = i / 18
    const x = 14 + t * 92
    const y = 24 + 52 * Math.sin(t * Math.PI) ** 1.6
    return { x, y, c: i % 3 === 1 ? '#b3262a' : i % 3 === 2 ? '#1fa3a8' : null }
  })
  return (
    <svg viewBox="0 0 120 120" className="block h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2a1b3d" />
          <stop offset="1" stopColor="#120b1d" />
        </linearGradient>
        <radialGradient id={`${id}-g`} cx="35%" cy="30%" r="80%">
          <stop offset="0" stopColor="#fff2bf" />
          <stop offset="0.45" stopColor="#e3a02f" />
          <stop offset="1" stopColor="#8a5a10" />
        </radialGradient>
      </defs>
      <rect width="120" height="120" fill={`url(#${id}-bg)`} />
      <path d="M14 24C30 94 90 94 106 24" stroke="#e3a02f" strokeWidth="1.2" fill="none" opacity=".7" />
      {beads.map((b, i) => (
        <g key={i}>
          <circle cx={b.x} cy={b.y} r={i % 3 === 0 ? 4.2 : 3.2} fill={b.c || `url(#${id}-g)`} />
          <circle cx={b.x - 1.1} cy={b.y - 1.2} r="1" fill="#fff" opacity=".6" />
        </g>
      ))}
      <path d="M60 80l-11 16c0 8 5 12 11 12s11-4 11-12z" fill={`url(#${id}-g)`} />
      <path d="M60 88l-6 8c0 4 3 7 6 7s6-3 6-7z" fill="#b3262a" />
      <circle cx="60" cy="80" r="4.2" fill={`url(#${id}-g)`} />
      <circle cx="58.4" cy="95" r="1.5" fill="#fff" opacity=".55" />
    </svg>
  )
}

export function CushionArt() {
  const id = uid(useId())
  return (
    <svg viewBox="0 0 120 120" className="block h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#dce8e6" />
          <stop offset="1" stopColor="#a9c4bf" />
        </linearGradient>
        <linearGradient id={`${id}-c`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c4382f" />
          <stop offset="1" stopColor="#7e1a1c" />
        </linearGradient>
        <radialGradient id={`${id}-m`}>
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#a9d3e6" />
        </radialGradient>
      </defs>
      <rect width="120" height="120" fill={`url(#${id}-bg)`} />
      <ellipse cx="60" cy="100" rx="40" ry="5" fill="#000" opacity=".2" />
      <path d="M22 22q38 -8 76 0q8 38 0 76q-38 8 -76 0q-8 -38 0 -76z" fill={`url(#${id}-c)`} />
      <g transform="translate(60 60)">
        {Array.from({ length: 12 }, (_, i) => (
          <g key={i} transform={`rotate(${i * 30})`}>
            <path d="M0 -17L4 -27 0 -33 -4 -27z" fill={i % 2 ? '#e3a02f' : '#f3e7d0'} />
          </g>
        ))}
        <circle r="13" fill="none" stroke="#e3a02f" strokeWidth="1.4" strokeDasharray="2 1.6" />
        <circle r="9" fill={`url(#${id}-m)`} stroke="#e3a02f" strokeWidth="1.2" />
      </g>
      {[[34, 34], [86, 34], [34, 86], [86, 86]].map(([x, y]) => (
        <g key={x + '-' + y}>
          <circle cx={x} cy={y} r="5.5" fill="#e3a02f" opacity=".9" />
          <circle cx={x} cy={y} r="2.8" fill={`url(#${id}-m)`} />
        </g>
      ))}
      <path d="M26 24q34 -6 68 0" stroke="#fff" strokeOpacity=".25" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </svg>
  )
}
