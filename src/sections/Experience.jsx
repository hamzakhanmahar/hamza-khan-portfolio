import { useRef } from 'react'
import { useScroll, useTransform, m } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { experience } from '../data/experience.js'
import { useInView } from '../hooks/useInView.js'
import { cn } from '../utils/cn.js'

function TimelineItem({ job, index }) {
  const [ref, inView] = useInView({ rootMargin: '0px 0px -25% 0px' })
  return (
    <li ref={ref} data-in={inView ? 'true' : 'false'} className="group relative grid gap-5 pb-16 pl-9 last:pb-0 sm:pl-12 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-14 lg:pl-16">
      {/* node on the line */}
      <span
        aria-hidden="true"
        className={cn(
          'absolute left-0 top-1.5 grid size-[1.1rem] -translate-x-1/2 place-items-center rounded-full border bg-bg transition-all duration-700 ease-out-expo sm:left-0 sm:top-2',
          inView ? 'scale-100 border-accent' : 'scale-75 border-line-strong',
        )}
      >
        <span className={cn('size-1.5 rounded-full transition-colors duration-700', inView ? 'bg-accent' : 'bg-line-strong')} />
      </span>

      <Reveal className="min-w-0 lg:pt-1">
        <p className="meta uppercase tracking-[0.14em] !text-accent">{String(index + 1).padStart(2, '0')}</p>
        <p className="mt-3 font-mono text-[0.9rem] text-fg">{job.period}</p>
        <p className="mt-1 text-[0.9rem] text-muted">{job.location}</p>
        <p className="tag mt-4">{job.mode}</p>
      </Reveal>

      <Reveal delay={90} className="min-w-0">
        <h3 className="h3">{job.company}</h3>
        <p className="mt-2 text-[1.05rem] text-muted">{job.role}</p>

        <ul className="mt-7 space-y-4">
          {job.points.map((p, i) => (
            <li key={p} className="flex gap-3.5 text-[0.98rem] leading-relaxed text-muted" style={{ transitionDelay: `${i * 60}ms` }}>
              <Check size={16} className="mt-1.5 shrink-0 text-accent" strokeWidth={2.2} aria-hidden="true" />
              <span className="min-w-0">{p}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-8 flex flex-wrap gap-2" aria-label={`Technologies used at ${job.company}`}>
          {job.stack.map((t, i) => (
            <li
              key={t}
              className="tag"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(8px)',
                transition: `opacity .6s ease ${300 + i * 55}ms, transform .6s var(--ease-out-expo) ${300 + i * 55}ms, border-color .3s ease, color .3s ease`,
              }}
            >
              {t}
            </li>
          ))}
        </ul>
      </Reveal>
    </li>
  )
}

export default function Experience() {
  const track = useRef(null)
  const { scrollYProgress } = useScroll({ target: track, offset: ['start 70%', 'end 55%'] })
  const grow = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" aria-labelledby="experience-title" className="section border-t border-line bg-bg-2/40">
      <div className="container-x">
        <SectionHeader index="02" label="Experience" title="Where I’ve been building." id="experience-title">
          <p className="text-muted">Two roles running side by side: a full-time position and freelance work for international clients.</p>
        </SectionHeader>

        <div ref={track} className="relative">
          {/* timeline rail + growing line */}
          <div className="absolute bottom-0 left-0 top-2 w-px bg-line-strong" aria-hidden="true" />
          <m.div
            className="absolute bottom-0 left-0 top-2 w-px origin-top bg-accent"
            style={{ scaleY: grow }}
            aria-hidden="true"
          />
          <ol className="relative">
            {experience.map((job, i) => (
              <TimelineItem key={job.id} job={job} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
