import { ArrowUpRight, Download } from 'lucide-react'
import { Chrome } from './MockupStage.jsx'
import { AjrakArt } from './art.jsx'

const ACC = '#ff4d5a'

/* ---- custom skill icons (hand-drawn SVG, 32×32) ---- */
const icons = [
  {
    k: 'React',
    el: (
      <g fill="none" stroke="#5ad4f0" strokeWidth="1.6">
        <ellipse cx="16" cy="16" rx="11" ry="4.4" />
        <ellipse cx="16" cy="16" rx="11" ry="4.4" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="11" ry="4.4" transform="rotate(120 16 16)" />
        <circle cx="16" cy="16" r="2" fill="#5ad4f0" stroke="none" />
      </g>
    ),
  },
  {
    k: 'Node.js',
    el: (
      <g>
        <path d="M16 3l11 6.4v13.2L16 29 5 22.6V9.4z" fill="none" stroke="#6cc24a" strokeWidth="1.7" />
        <path d="M12.5 21v-9.5l7 9.5v-9.5" fill="none" stroke="#6cc24a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    ),
  },
  {
    k: 'MongoDB',
    el: (
      <g>
        <path d="M16 3c4.6 4.4 6.6 8.4 6.6 12.6 0 5-2.8 8.2-6 9.6-3.2-1.4-6-4.6-6-9.6C10.6 11.4 12 7.4 16 3z" fill="none" stroke="#47a248" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M16 11v18" stroke="#47a248" strokeWidth="1.7" strokeLinecap="round" />
      </g>
    ),
  },
  {
    k: 'Express',
    el: (
      <text x="16" y="21.5" textAnchor="middle" fontSize="15" fontWeight="700" fill="#f3f1ee" style={{ fontFamily: 'var(--font-mono)' }}>ex</text>
    ),
  },
  {
    k: 'JavaScript',
    el: (
      <g>
        <rect x="4" y="4" width="24" height="24" rx="4" fill="#f4d03f" />
        <text x="16" y="23" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1b1814" style={{ fontFamily: 'var(--font-sans)' }}>JS</text>
      </g>
    ),
  },
  {
    k: 'HTML & CSS',
    el: (
      <g fill="none" stroke="#ff7a45" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 9l-7 7 7 7" />
        <path d="M21 9l7 7-7 7" />
        <path d="M18 7l-4 18" stroke="#f3f1ee" />
      </g>
    ),
  },
]

function Icon({ i }) {
  return (
    <span className="grid size-[48px] place-items-center rounded-[13px]" style={{ background: 'linear-gradient(160deg, rgba(255,255,255,.08), rgba(255,255,255,.02))', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.1), 0 14px 24px -14px rgba(0,0,0,.9)' }}>
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">{i.el}</svg>
    </span>
  )
}

function DarkSite() {
  return (
    <div className="relative h-full whitespace-nowrap" style={{ background: '#0b0b0d', color: '#f3f1ee', fontFamily: 'var(--font-sans)' }}>
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="pm-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="#fff" strokeOpacity=".05" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pm-grid)" />
      </svg>
      <div className="absolute -right-10 -top-10 size-[280px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,77,90,.28), transparent 65%)' }} />

      <div className="relative flex h-[42px] items-center justify-between px-6 text-[10.5px]" style={{ color: 'rgba(243,241,238,.62)' }}>
        <span className="flex items-center gap-2 font-semibold" style={{ color: '#f3f1ee' }}>
          <span className="grid size-[20px] place-items-center rounded-[6px] text-[9px] font-extrabold" style={{ background: ACC, color: '#0b0b0d' }}>HK</span>
        </span>
        <span className="flex gap-5"><span style={{ color: '#f3f1ee' }}>Home</span><span>About</span><span>Skills</span><span>Projects</span><span>Contact</span></span>
      </div>

      <div className="relative px-6 pt-5">
        <p className="text-[11px]" style={{ color: 'rgba(243,241,238,.6)' }}>Hello, I&rsquo;m</p>
        <h3 className="mt-1 text-[54px] font-bold leading-[0.95] tracking-[-0.04em]">Hamza<br />Khan</h3>
        <p className="mt-3 text-[11px] font-medium tracking-[0.16em]" style={{ color: ACC, fontFamily: 'var(--font-mono)' }}>MERN STACK DEVELOPER</p>
        <p className="mt-2.5 max-w-[250px] whitespace-normal text-[11px] leading-snug" style={{ color: 'rgba(243,241,238,.62)' }}>
          I build full-stack web applications with MongoDB, Express, React and Node.
        </p>
        <div className="mt-3.5 flex gap-2 text-[10.5px] font-semibold">
          <span className="inline-flex h-7 items-center gap-1 rounded-full px-3" style={{ background: ACC, color: '#0b0b0d' }}>View projects <ArrowUpRight size={11} /></span>
          <span className="inline-flex h-7 items-center gap-1 rounded-full px-3" style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.2)' }}><Download size={11} /> CV</span>
        </div>
      </div>

      <div className="absolute bottom-5 left-6 right-6">
        <p className="mb-2 text-[10px]" style={{ color: 'rgba(243,241,238,.45)' }}>Technologies</p>
        <div className="flex gap-2">
          {icons.map((i) => <Icon key={i.k} i={i} />)}
        </div>
      </div>
    </div>
  )
}

function Thumb({ kind }) {
  if (kind === 'a') return <AjrakArt />
  if (kind === 'b')
    return (
      <div className="h-full w-full p-2" style={{ background: 'linear-gradient(150deg,#0e1830,#071020)' }}>
        <div className="h-[5px] w-[60%] rounded-full" style={{ background: '#2ee6c8' }} />
        <div className="mt-2 space-y-1.5">
          {[90, 70, 80].map((w, i) => (
            <div key={i} className="flex items-center gap-1.5"><i className="block size-[5px] rounded-full not-italic" style={{ background: i === 0 ? '#f5b84a' : '#7392ff' }} /><i className="block h-[4px] rounded-full not-italic" style={{ width: `${w}%`, background: 'rgba(255,255,255,.2)' }} /></div>
          ))}
        </div>
      </div>
    )
  return (
    <div className="h-full w-full p-2" style={{ background: '#eef2fb' }}>
      <div className="flex gap-1.5">
        {['#2f5bff', '#c13fd8', '#0e9f8e'].map((c) => <i key={c} className="block size-[14px] rounded-full not-italic" style={{ background: c }} />)}
      </div>
      <div className="mt-2 space-y-1.5">
        {[1, 2, 3].map((i) => <i key={i} className="block h-[5px] rounded-full bg-[#c9d3ea] not-italic" />)}
      </div>
    </div>
  )
}

function LightSite() {
  const ink = '#1b1814'
  return (
    <div className="relative h-full whitespace-nowrap" style={{ background: '#f5f0e7', color: ink, fontFamily: 'var(--font-sans)' }}>
      <div className="flex h-[42px] items-center justify-between px-6 text-[10.5px]" style={{ color: 'rgba(27,24,20,.55)' }}>
        <span className="grid size-[20px] place-items-center rounded-[6px] text-[9px] font-extrabold" style={{ background: ink, color: '#f5f0e7' }}>HK</span>
        <span className="flex gap-5"><span style={{ color: ink }}>Home</span><span>About</span><span>Skills</span><span>Projects</span><span>Contact</span></span>
      </div>
      <div className="px-6 pt-3">
        <h3 className="text-[40px] font-bold leading-[0.98] tracking-[-0.04em]">Full-stack,<br />built to last.</h3>
        <p className="mt-2.5 text-[11px] font-medium tracking-[0.16em]" style={{ color: '#d6303d', fontFamily: 'var(--font-mono)' }}>HAMZA KHAN</p>
      </div>
      <div className="mt-4 px-6">
        <p className="mb-2 text-[10px] font-semibold" style={{ color: 'rgba(27,24,20,.5)' }}>Selected projects</p>
        <div className="grid grid-cols-3 gap-2.5">
          {[['She Commerce', 'a'], ['Tender System', 'b'], ['Employee Manager', 'c']].map(([t, k]) => (
            <div key={t}>
              <div className="aspect-[1.3] overflow-hidden rounded-[10px]" style={{ boxShadow: '0 12px 20px -14px rgba(27,24,20,.6), 0 0 0 1px rgba(27,24,20,.08)' }}><Thumb kind={k} /></div>
              <p className="mt-1.5 text-[10.5px] font-semibold">{t}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-1.5 text-[10px] font-medium">
          {['React', 'Node.js', 'MongoDB', 'Express'].map((t) => (
            <span key={t} className="rounded-full px-2.5 py-[4px]" style={{ boxShadow: 'inset 0 0 0 1px rgba(27,24,20,.18)' }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PortfolioMockup() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: 'linear-gradient(160deg,#17171c 0%,#0b0b0e 55%,#08080a 100%)' }}>
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="pm-bg" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="#fff" fillOpacity=".08" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pm-bg)" />
      </svg>
      <div className="absolute -bottom-40 right-10 size-[480px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,77,90,.2), transparent 65%)' }} />

      {/* dark theme (behind) */}
      <div className="absolute overflow-hidden rounded-[14px]" style={{ left: 34, top: 34, width: 610, height: 440, boxShadow: '0 40px 80px -24px rgba(0,0,0,.9), 0 0 0 1px rgba(255,255,255,.1)' }}>
        <Chrome title="Hamza Khan, Portfolio">
          <DarkSite />
        </Chrome>
      </div>

      {/* light theme (front) */}
      <div className="absolute overflow-hidden rounded-[14px]" style={{ left: 436, top: 178, width: 490, height: 460, boxShadow: '0 44px 80px -20px rgba(0,0,0,.85), 0 0 0 1px rgba(255,255,255,.14)' }}>
        <Chrome dark={false} title="Hamza Khan, Portfolio">
          <LightSite />
        </Chrome>
      </div>

      {/* theme switcher */}
      <div
        className="absolute flex items-center gap-3 whitespace-nowrap rounded-full py-1.5 pl-4 pr-1.5"
        style={{ left: 694, top: 120, background: 'rgba(24,24,28,.9)', backdropFilter: 'blur(12px)', boxShadow: '0 20px 36px -14px rgba(0,0,0,.9), 0 0 0 1px rgba(255,255,255,.14)', fontFamily: 'var(--font-sans)', color: '#f3f1ee' }}
      >
        <span className="text-[11.5px] font-medium">Theme</span>
        <span className="flex gap-1.5 rounded-full p-1" style={{ background: 'rgba(255,255,255,.07)' }}>
          {[['#0b0b0d', false], ['#f5f0e7', true], ['#1c2b57', false]].map(([c, on]) => (
            <i key={c} className="block size-[22px] rounded-full not-italic" style={{ background: c, boxShadow: on ? `0 0 0 2px #18181c, 0 0 0 3.5px ${ACC}` : 'inset 0 0 0 1px rgba(255,255,255,.25)' }} />
          ))}
        </span>
      </div>
    </div>
  )
}
