import { useEffect } from 'react'
import { AnimatePresence, m } from 'framer-motion'

const MIN_MS = 600 // deliberately short
const MAX_MS = 2200 // never block longer than this

/**
 * Minimal "HK" loader. Shows once per browser session, never for reduced-motion users,
 * and finishes as soon as fonts are ready (after a short minimum so it doesn't flash).
 */
export default function Loader({ show, onDone }) {
  useEffect(() => {
    if (!show) return
    const start = performance.now()
    let cancelled = false
    const fonts = document.fonts?.ready ?? Promise.resolve()
    const cap = new Promise((r) => setTimeout(r, MAX_MS))
    Promise.race([fonts, cap]).then(() => {
      const wait = Math.max(0, MIN_MS - (performance.now() - start))
      setTimeout(() => !cancelled && onDone(), wait)
    })
    return () => {
      cancelled = true
    }
  }, [show, onDone])

  return (
    <AnimatePresence>
      {show && (
        <m.div
          key="loader"
          className="fixed inset-0 z-[90] grid place-items-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          role="status"
          aria-label="Loading portfolio"
        >
          <div className="flex flex-col items-center gap-6">
            <m.svg
              width="72"
              height="72"
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <m.path
                d="M19 17v30M19 32h14M33 17v30"
                stroke="#f3f1ee"
                strokeWidth="5"
                strokeLinecap="square"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
              />
              <m.path
                d="M33 32l13-15M36 29l11 18"
                stroke="#ff4d5a"
                strokeWidth="5"
                strokeLinecap="square"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.25, ease: 'easeInOut' }}
              />
            </m.svg>
            <div className="h-px w-28 overflow-hidden bg-line-strong">
              <m.div
                className="h-full w-full origin-left bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: MIN_MS / 1000, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
