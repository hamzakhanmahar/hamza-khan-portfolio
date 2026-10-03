import { Code, KeyRound, Layers, Network, ShieldCheck, Smartphone } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import TechIcon, { brandColor } from '../components/TechIcon.jsx'
import { skillGroups } from '../data/skills.js'
import { cn } from '../utils/cn.js'

const lucide = { Code, KeyRound, Layers, Network, ShieldCheck, Smartphone }

/** One technology: official brand colour (swapped for off-white where the brand is too dark for this background). */
function Tile({ item }) {
  const Icon = item.icon ? lucide[item.icon] : null
  const brand = item.si ? brandColor(item.si) : '#ff4d5a'
  return (
    <li
      className="group/tile flex min-w-0 items-center gap-3.5 rounded-xl border border-line bg-white/[0.02] p-3 transition-[transform,border-color,background-color] duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-line-strong hover:bg-white/[0.04]"
      style={{ '--brand': brand }}
    >
      <span
        className="grid size-12 shrink-0 place-items-center rounded-[0.85rem] text-[var(--brand)] transition-transform duration-500 ease-out-expo group-hover/tile:scale-105"
        style={{
          background: 'color-mix(in srgb, var(--brand) 13%, transparent)',
          boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--brand) 30%, transparent)',
        }}
        aria-hidden="true"
      >
        {item.si ? <TechIcon name={item.si} size={26} /> : Icon ? <Icon size={22} strokeWidth={1.7} /> : item.mark}
      </span>
      <span className="min-w-0">
        <span className="block text-[0.95rem] font-medium leading-tight tracking-tight">{item.name}</span>
        <span className="mt-0.5 block text-[0.78rem] leading-snug text-dim">{item.note}</span>
      </span>
    </li>
  )
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section border-t border-line bg-bg-2/40">
      <div className="container-x">
        <SectionHeader index="05" label="Technologies" title="The toolkit." id="skills-title">
          <p className="text-muted">Everything listed here is on my CV. No percentages, just the tools I actually work with.</p>
        </SectionHeader>

        <div className="grid gap-4 lg:grid-cols-6 lg:items-start lg:gap-5">
          {skillGroups.map((g, gi) => (
            <Reveal
              as="section"
              key={g.id}
              delay={(gi % 3) * 80}
              aria-labelledby={`skill-${g.id}`}
              className={cn('min-w-0 rounded-2xl border border-line bg-bg p-5 transition-colors duration-500 hover:border-line-strong sm:p-6', g.span)}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 id={`skill-${g.id}`} className="text-[1.05rem] font-semibold tracking-tight">{g.title}</h3>
                <span className="meta">{String(g.items.length).padStart(2, '0')}</span>
              </div>
              <ul className={cn('grid gap-2.5', g.wide ? 'sm:grid-cols-2 lg:grid-cols-3' : g.span === 'lg:col-span-3' ? 'sm:grid-cols-2' : 'grid-cols-1')}>
                {g.items.map((it) => (
                  <Tile key={it.name} item={it} />
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
