import { useRef } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { projects } from '../data/projects.js'
import { useMedia, usePrefersReducedMotion } from '../hooks/useMedia.js'
import { cn } from '../utils/cn.js'

/** Framed case-study visual with soft parallax and a gentle hover zoom. */
function ProjectVisual({ project, featured, progress }) {
  const reduce = usePrefersReducedMotion()
  const wide = useMedia('(min-width: 1024px)')
  // parallax travel stays well below the grid gap so a visual can never touch its own text
  const travel = reduce ? 0 : wide ? (featured ? 22 : 28) : 8
  const y = useTransform(progress, [0, 1], [travel, -travel])

  return (
    <Reveal variant="clip" className="min-w-0">
      <m.div style={{ y }} className="will-change-transform">
        <div
          className={cn(
            'group/visual relative overflow-hidden rounded-[14px] border border-line-strong bg-bg-2',
            'shadow-[0_40px_90px_-40px_rgba(0,0,0,0.95)] transition-[border-color,box-shadow] duration-700',
            'hover:border-accent/45 hover:shadow-[0_40px_100px_-40px_rgba(255,77,90,0.22)]',
          )}
        >
          <div className="transition-transform duration-[1200ms] ease-out-expo group-hover/visual:scale-[1.025]">
            <img
              src={project.image.src}
              srcSet={`${project.image.src960} 960w, ${project.image.src} ${project.image.width}w`}
              sizes={featured ? '(min-width: 1280px) 1200px, 100vw' : '(min-width: 1024px) 58vw, 100vw'}
              width={project.image.width}
              height={project.image.height}
              alt={project.visualAlt}
              loading="lazy"
              decoding="async"
              draggable="false"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </m.div>
    </Reveal>
  )
}

function ProjectHead({ project, index, featured }) {
  return (
    <div className="min-w-0">
      <Reveal className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="font-mono text-[0.8rem] text-accent">{String(index + 1).padStart(2, '0')}</span>
        <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
        <span className="eyebrow">{featured ? 'Featured project' : 'Project'}</span>
      </Reveal>

      <Reveal as="h3" id={`${project.id}-t`} delay={70} className={cn(featured ? 'h2 mt-5' : 'h3 mt-4')}>
        {project.title}
      </Reveal>
      <Reveal delay={110}>
        <p className="mt-3 font-mono text-[0.8rem] uppercase leading-relaxed tracking-[0.08em] text-muted">{project.category}</p>
      </Reveal>

      <Reveal delay={150}>
        <p className={cn('mt-6', featured ? 'lead !text-fg/85 max-w-[40ch]' : 'text-[1.02rem] leading-relaxed text-fg/90')}>
          {project.description}
        </p>
      </Reveal>
    </div>
  )
}

function ProjectBody({ project, bordered = true }) {
  const { links = {} } = project
  return (
    <div className="min-w-0">
      <Reveal delay={190}>
        <ul className={cn('space-y-2.5', bordered && 'border-t border-line pt-6')}>
          {project.features.map((f) => (
            <li key={f} className="flex gap-3 text-[0.94rem] leading-relaxed text-muted">
              <span className="mt-[0.72em] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
              <span className="min-w-0">{f}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={230}>
        <ul className="mt-7 flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
          {project.technologies.map((t) => (
            <li key={t} className="tag">{t}</li>
          ))}
        </ul>
      </Reveal>

      {/* Only rendered once real URLs are added to projects.js */}
      {(links.live || links.github) && (
        <Reveal delay={260} className="mt-8 flex flex-wrap gap-3">
          {links.live && (
            <a href={links.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Live Demo <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          )}
          {links.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              GitHub <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          )}
        </Reveal>
      )}
    </div>
  )
}

function ProjectBlock({ project, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const featured = project.featured
  // Featured sits full-bleed; the rest alternate image-left / image-right for editorial rhythm.
  const imageLeft = index % 2 === 1

  if (featured) {
    return (
      <article ref={ref} aria-labelledby={`${project.id}-t`} className="grid gap-10 lg:gap-14">
        <ProjectVisual project={project} featured progress={scrollYProgress} />
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-6">
            <ProjectHead project={project} index={index} featured />
          </div>
          <div className="min-w-0 lg:col-span-6 lg:pt-[3.2rem]">
            <ProjectBody project={project} />
          </div>
        </div>
      </article>
    )
  }

  return (
    <article
      ref={ref}
      aria-labelledby={`${project.id}-t`}
      className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-20"
    >
      <div className={cn('min-w-0 lg:col-span-7', imageLeft ? 'lg:order-1' : 'lg:order-2')}>
        <ProjectVisual project={project} progress={scrollYProgress} />
      </div>
      <div className={cn('min-w-0 lg:col-span-5', imageLeft ? 'lg:order-2' : 'lg:order-1')}>
        <ProjectHead project={project} index={index} />
        <div className="mt-6">
          <ProjectBody project={project} />
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section border-t border-line">
      <div className="container-x">
        <SectionHeader index="04" label="Selected Work" title="Things I’ve built." id="projects-title">
        </SectionHeader>

        <div className="flex flex-col gap-24 sm:gap-32 lg:gap-40">
          {projects.map((p, i) => (
            <ProjectBlock key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
