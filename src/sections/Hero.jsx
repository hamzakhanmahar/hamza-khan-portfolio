import { useEffect, useRef } from 'react'
import { m } from 'framer-motion'
import { ArrowDown, ArrowRight, Download, MapPin } from 'lucide-react'
import { profile } from '../data/profile.js'
import { anchorClick } from '../utils/scroll.js'

const EASE = [0.16, 1, 0.3, 1]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}
const mask = {
  hidden: { y: '108%' },
  show: { y: '0%', transition: { duration: 0.95, ease: EASE } },
}

function NameLine({ children }) {
  // overflow-hidden wrapper gives the "rise from a line" text reveal; padding keeps descenders / tight leading intact
  return (
    <span className="block overflow-hidden pb-[0.06em] pr-[0.04em]">
      <m.span variants={mask} className="block will-change-transform">
        {children}
      </m.span>
    </span>
  )
}

export default function Hero({ ready }) {
  const stage = useRef(null)

  // very subtle pointer parallax for the portrait (fine pointers only)
  useEffect(() => {
    const el = stage.current
    if (!el) return
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || rm.matches) return
    let raf = 0
    const onMove = (e) => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const r = el.getBoundingClientRect()
        const nx = (e.clientX - (r.left + r.width / 2)) / window.innerWidth
        const ny = (e.clientY - (r.top + r.height / 2)) / window.innerHeight
        el.style.setProperty('--px', `${(nx * -14).toFixed(2)}px`)
        el.style.setProperty('--py', `${(ny * -10).toFixed(2)}px`)
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const state = ready ? 'show' : 'hidden'

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pb-14 pt-[calc(var(--nav-h)+1.25rem)] sm:pb-16 lg:pt-[calc(var(--nav-h)+2rem)]"
    >
      {/* ambient background: grid + two slow-drifting accent glows */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-grid absolute inset-0" />
        <div className="glow-a absolute -right-[12%] top-[8%] h-[34rem] w-[34rem] rounded-full bg-accent/[0.12] blur-[120px]" />
        <div className="glow-b absolute -left-[16%] bottom-[-12%] h-[30rem] w-[30rem] rounded-full bg-accent/[0.06] blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="container-x grid items-center gap-10 sm:gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-14 xl:gap-20">
        {/* ------------------------------ copy ------------------------------ */}
        <m.div
          className="order-2 min-w-0 md:order-1"
          variants={container}
          initial="hidden"
          animate={state}
        >
          <m.p variants={fadeUp} className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Hello, I&rsquo;m
          </m.p>

          <h1 className="mt-5 sm:mt-6">
            <span className="sr-only">{profile.name} — </span>
            <span className="display hero-name block uppercase" aria-hidden="true">
              <NameLine>Hamza</NameLine>
              <NameLine>Khan</NameLine>
            </span>
            <m.span
              variants={fadeUp}
              className="mt-5 block font-mono text-[clamp(0.8rem,0.7rem+0.55vw,1.05rem)] font-medium uppercase tracking-[0.18em] text-accent sm:mt-7"
            >
              {profile.title}
            </m.span>
          </h1>

          <m.p variants={fadeUp} className="lead mt-6 max-w-[34ch] sm:mt-7 sm:max-w-[38ch]">
            {profile.statement}
          </m.p>

          <m.div variants={fadeUp} className="mt-9 flex flex-col gap-3 xs:flex-row xs:flex-wrap sm:mt-10">
            <a href="#projects" onClick={anchorClick('projects')} className="btn btn-primary">
              View My Work
              <ArrowRight size={18} className="i-arrow-right" aria-hidden="true" />
            </a>
            <a href="#contact" onClick={anchorClick('contact')} className="btn btn-ghost">
              Let&rsquo;s Work Together
            </a>
          </m.div>

          <m.div variants={fadeUp} className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={profile.resume.href}
              download={profile.resume.fileName}
              className="group inline-flex min-h-11 items-center gap-2.5 border-b border-line-strong pb-0.5 text-[0.95rem] font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={17} className="i-arrow-down" aria-hidden="true" />
              Download CV
              <span className="meta !text-[0.7rem]" aria-hidden="true">PDF</span>
            </a>
            <a
              href={profile.resume.href}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-11 items-center text-[0.9rem] text-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-fg"
            >
              View in browser
              <span className="sr-only"> (opens PDF in a new tab)</span>
            </a>
          </m.div>
        </m.div>

        {/* ----------------------------- portrait ----------------------------- */}
        <m.div
          className="order-1 min-w-0 md:order-2"
          // transform-only entrance: an opacity-0 start would stop the browser counting the
          // portrait as the page's Largest Contentful Paint element
          initial={{ scale: 0.95, y: 18 }}
          animate={ready ? { scale: 1, y: 0 } : { scale: 0.95, y: 18 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.05 }}
        >
          <div
            ref={stage}
            className="relative mx-auto w-full max-w-[min(20rem,78vw)] sm:max-w-[25rem] lg:max-w-[27.5rem] md:ml-auto xl:max-w-[29rem]"
            style={{ '--px': '0px', '--py': '0px' }}
          >
            {/* offset outline frame */}
            <div
              className="portrait-shape pointer-events-none absolute inset-0 translate-x-3 translate-y-3 border border-accent/35 transition-transform duration-700 ease-out-expo sm:translate-x-4 sm:translate-y-4"
              aria-hidden="true"
            />

            <div
              className="portrait-shape relative aspect-[1/1.02] overflow-hidden border border-line-strong bg-bg-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] sm:aspect-[4/5]"
              style={{ transform: 'translate3d(var(--px), var(--py), 0)', transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)' }}
            >
              <img
                src={profile.photo.src}
                srcSet={`${profile.photo.src480} 480w, ${profile.photo.src} 960w`}
                sizes="(min-width: 1280px) 464px, (min-width: 1024px) 440px, (min-width: 640px) 400px, min(320px, 78vw)"
                width={profile.photo.width}
                height={profile.photo.height}
                alt={profile.photo.alt}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover object-[50%_12%]"
              />
              {/* soft vignette so the lower edge settles into the page */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/55 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/5" aria-hidden="true" />
            </div>

            {/* vertical location label (wide desktop only, sits outside the offset frame) */}
            <p
              className="meta absolute -right-14 top-1/2 hidden -translate-y-1/2 whitespace-nowrap uppercase tracking-[0.3em] [writing-mode:vertical-rl] min-[1400px]:block"
              aria-hidden="true"
            >
              Karachi — Pakistan
            </p>
          </div>
        </m.div>
      </div>

      {/* meta strip */}
      <div className="container-x mt-14 hidden items-center justify-between text-muted lg:flex">
        <p className="meta flex items-center gap-2">
          <MapPin size={14} aria-hidden="true" />
          {profile.location}
        </p>
        <a
          href="#about"
          onClick={anchorClick('about')}
          className="meta group inline-flex min-h-11 items-center gap-2 uppercase tracking-[0.2em] transition-colors hover:text-fg"
        >
          Scroll
          <ArrowDown size={14} className="transition-transform group-hover:translate-y-1" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
