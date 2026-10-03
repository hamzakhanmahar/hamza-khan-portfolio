import { useLayoutEffect, useRef, useState } from 'react'

/**
 * Renders a mockup authored at a fixed design size (960×600) and scales it to the
 * container width. Because the whole stage scales as one piece, aspect ratio is
 * always preserved — nothing is cropped or stretched at any breakpoint.
 * The inner UI is inert + hidden from assistive tech; the wrapper carries the alt text.
 */
export const STAGE_W = 960
export const STAGE_H = 600

export default function MockupStage({ children, alt }) {
  const box = useRef(null)
  const [scale, setScale] = useState(0.4)

  useLayoutEffect(() => {
    const el = box.current
    if (!el) return
    const update = () => setScale(el.clientWidth / STAGE_W)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div
      ref={box}
      role="img"
      aria-label={alt}
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: `${STAGE_W} / ${STAGE_H}` }}
    >
      <div
        inert
        aria-hidden="true"
        className="absolute left-0 top-0 select-none"
        style={{
          width: STAGE_W,
          height: STAGE_H,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  )
}

/** Browser chrome shared by the mockups (title is the page name, never a URL). */
export function Chrome({ dark = true, title = '', children, className = '' }) {
  return (
    <div className={`flex h-full w-full flex-col overflow-hidden ${className}`}>
      <div
        className="flex h-9 shrink-0 items-center gap-3 px-4"
        style={{
          background: dark ? '#0d0d10' : '#eceae6',
          borderBottom: `1px solid ${dark ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.08)'}`,
        }}
      >
        <span className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <i key={i} className="block size-2.5 rounded-full" style={{ background: dark ? 'rgba(255,255,255,.14)' : 'rgba(0,0,0,.16)' }} />
          ))}
        </span>
        <span
          className="mx-auto flex h-5 w-60 items-center justify-center rounded-md text-[10px] tracking-wide"
          style={{
            background: dark ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.06)',
            color: dark ? 'rgba(255,255,255,.45)' : 'rgba(0,0,0,.5)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {title}
        </span>
        <span className="w-12" />
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  )
}
