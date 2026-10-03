import { useEffect, useRef, useState } from 'react'

/** One-shot IntersectionObserver. Returns [ref, inView]. */
export function useInView({ rootMargin = '0px 0px -12% 0px', threshold = 0.01 } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin, threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin, threshold])
  return [ref, inView]
}
