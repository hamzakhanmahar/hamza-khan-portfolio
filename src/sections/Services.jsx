import { useCallback, useEffect, useRef, useState } from 'react'
import { m } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import ServiceArt from '../components/ServiceArt.jsx'
import { services } from '../data/services.js'
import { useMedia, usePrefersReducedMotion } from '../hooks/useMedia.js'

/** Three card surfaces that cycle through the deck, so neighbouring cards always differ. */
const surfaces = [
  { bg: 'linear-gradient(165deg,#2b2b33 0%,#16161a 100%)', fg: '#f3f1ee', mute: 'rgba(243,241,238,.64)', a1: '#f3f1ee', a2: 'rgba(243,241,238,.13)', ac: '#ff4d5a', btn: '#f3f1ee', btnFg: '#16161a', edge: 'rgba(255,255,255,.1)' },
  { bg: 'linear-gradient(165deg,#f7f3eb 0%,#e3dccf 100%)', fg: '#16161a', mute: 'rgba(22,22,26,.64)', a1: '#16161a', a2: 'rgba(22,22,26,.09)', ac: '#ff4d5a', btn: '#16161a', btnFg: '#f7f3eb', edge: 'rgba(0,0,0,.06)' },
  { bg: 'linear-gradient(165deg,#ff6a74 0%,#e23645 100%)', fg: '#ffffff', mute: 'rgba(255,255,255,.86)', a1: '#ffffff', a2: 'rgba(255,255,255,.24)', ac: '#16161a', btn: '#ffffff', btnFg: '#d92c3b', edge: 'rgba(255,255,255,.18)' },
]

/** Where each card sits in the pile (0 = top). Alternating tilt makes the fanned-out stack. */
const poses = [
  { x: 0, y: 0, rotate: -2, scale: 1 },
  { x: -64, y: 14, rotate: -11, scale: 0.97 },
  { x: 66, y: 24, rotate: 9, scale: 0.94 },
  { x: -26, y: 38, rotate: -19, scale: 0.91 },
]
const hidden = { x: 0, y: 40, rotate: 0, scale: 0.88 }
// narrow screens: keep the fan inside the viewport
const poseFor = (stack, k) => {
  const p = stack < poses.length ? poses[stack] : hidden
  return { ...p, x: p.x * k, opacity: stack < poses.length ? 1 : 0 }
}

function Card({ s, surface, stack, flying, reduce, k, onAdvance, onSwipe }) {
  const top = stack === 0
  const start = useRef(0)
  const swiped = useRef(false)
  const pose = top && flying ? { x: 340, y: -16, rotate: 16, scale: 1, opacity: 1 } : poseFor(stack, k)

  return (
    <m.div
      aria-hidden={top ? undefined : true}
      initial={false}
      animate={pose}
      transition={
        reduce
          ? { duration: 0 }
          : top && flying
            ? { duration: 0.24, ease: [0.5, 0, 1, 0.8] }
            : { type: 'spring', stiffness: 210, damping: 24, mass: 0.9 }
      }
      className="absolute inset-0 overflow-hidden rounded-[1.6rem] will-change-transform"
      style={{
        zIndex: services.length - stack,
        background: surface.bg,
        color: surface.fg,
        boxShadow: `0 40px 70px -28px rgba(0,0,0,.75), inset 0 0 0 1px ${surface.edge}`,
        pointerEvents: top ? 'auto' : 'none',
        '--a1': surface.a1,
        '--a2': surface.a2,
        '--ac': surface.ac,
      }}
    >
      <div className="flex h-full flex-col p-5 sm:p-6">
        <span className="absolute right-5 top-5 grid size-10 place-items-center rounded-full sm:right-6 sm:top-6" style={{ background: surface.btn, color: surface.btnFg }}>
          <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
        </span>
        <div className="flex min-h-0 flex-1 items-center pt-6">
          <ServiceArt kind={s.art} />
        </div>
        <div>
          <h3 className="text-[clamp(1.35rem,1.1rem+1vw,1.7rem)] font-semibold leading-[1.08] tracking-[-0.02em]">{s.title}</h3>
          <p className="mt-2 text-[0.85rem] leading-[1.5]" style={{ color: surface.mute }}>{s.text}</p>
        </div>
      </div>

      {top && (
        <button
          type="button"
          aria-label={`${s.title}. Show next service`}
          className="absolute inset-0 z-10 cursor-pointer touch-pan-y rounded-[inherit] focus-visible:outline-offset-[-6px]"
          onPointerDown={(e) => {
            start.current = e.clientX
            swiped.current = false
          }}
          onPointerUp={(e) => {
            const dx = e.clientX - start.current
            if (Math.abs(dx) > 48) {
              swiped.current = true
              onSwipe(dx < 0 ? 1 : -1)
            }
          }}
          onClick={() => {
            if (swiped.current) {
              swiped.current = false
              return
            }
            onAdvance()
          }}
        />
      )}
    </m.div>
  )
}

export default function Services() {
  const total = services.length
  const reduce = usePrefersReducedMotion()
  const wide = useMedia('(min-width: 640px)', true)
  const k = wide ? 1 : 0.5
  const [order, setOrder] = useState(() => services.map((_, i) => i))
  const [flying, setFlying] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => clearTimeout(timer.current), [])

  const next = useCallback(() => {
    if (flying) return
    if (reduce) {
      setOrder((o) => [...o.slice(1), o[0]])
      return
    }
    setFlying(true)
    timer.current = setTimeout(() => {
      setOrder((o) => [...o.slice(1), o[0]])
      setFlying(false)
    }, 230)
  }, [flying, reduce])

  const prev = useCallback(() => {
    if (flying) return
    setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)])
  }, [flying])

  const swipe = useCallback((dir) => (dir > 0 ? next() : prev()), [next, prev])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      next()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
    }
  }

  const current = order[0]

  return (
    <section id="services" aria-labelledby="services-title" className="section relative overflow-hidden border-t border-line">
      <div className="container-x">
        <SectionHeader index="03" label="Services" title="What I can build with you." id="services-title">
          <p className="text-muted">Web, apps, software and the data behind them, based on the work in my CV.</p>
        </SectionHeader>
      </div>

      <Reveal className="relative">
        {/* oversized backdrop word the deck sits on */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-2 select-none text-center text-[clamp(4.2rem,18.5vw,16.5rem)] font-semibold leading-[0.85] tracking-[-0.055em] text-accent/[0.2] sm:top-2"
        >
          SERVICES
        </div>

        <div
          role="group"
          aria-roledescription="carousel"
          aria-label="Services"
          onKeyDown={onKeyDown}
          className="relative mx-auto flex flex-col items-center pt-[clamp(3rem,9vw,7rem)]"
        >
          <div className="relative aspect-[1/1.5] w-[min(17rem,76vw)] sm:aspect-[1/1.3] sm:w-[19rem] lg:w-[20.5rem]">
            {services.map((s, i) => (
              <Card
                key={s.id}
                s={s}
                surface={surfaces[i % surfaces.length]}
                stack={order.indexOf(i)}
                flying={flying}
                reduce={reduce}
                k={k}
                onAdvance={next}
                onSwipe={swipe}
              />
            ))}
          </div>

          <div className="mt-12 flex items-center gap-3 sm:mt-14">
            <button type="button" onClick={prev} aria-label="Previous service" className="grid size-11 place-items-center rounded-full border border-line-strong text-muted transition-colors hover:border-accent hover:text-fg">
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <span className="meta hidden whitespace-nowrap sm:block">Tap the card for the next service</span>
            <span className="rounded-full bg-fg px-3.5 py-1.5 font-mono text-[0.8rem] font-medium tabular-nums text-bg">
              {current + 1} / {total}
            </span>
            <button type="button" onClick={next} aria-label="Next service" className="grid size-11 place-items-center rounded-full border border-line-strong text-muted transition-colors hover:border-accent hover:text-fg">
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
          <p className="meta mt-3 sm:hidden">Tap the card for the next service</p>
          <p className="sr-only" aria-live="polite">{services[current].title}, {current + 1} of {total}</p>
        </div>
      </Reveal>
    </section>
  )
}
