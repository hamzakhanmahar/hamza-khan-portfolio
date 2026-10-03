import { useRef } from 'react'
import { useScrollProgressVar } from '../hooks/useScrollState.js'

/** 2px reading-progress line at the very top of the viewport. */
export default function ScrollProgress() {
  const bar = useRef(null)
  useScrollProgressVar(bar)
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]" aria-hidden="true">
      <div ref={bar} className="h-full origin-left scale-x-0 bg-accent will-change-transform" />
    </div>
  )
}
