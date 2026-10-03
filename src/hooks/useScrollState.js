import { useEffect, useRef, useState } from 'react'

/** true once the page has scrolled past `threshold` px (rAF-throttled, passive). */
export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      setScrolled(window.scrollY > threshold)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [threshold])
  return scrolled
}

/** Scroll-spy: id of the section crossing the middle of the viewport. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  const key = ids.join('|')
  useEffect(() => {
    const visible = new Map()
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting))
        const current = ids.find((id) => visible.get(id))
        if (current) setActive(current)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    const attach = () => ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    attach()
    // lazy-loaded sections mount later: re-attach shortly after
    const t = setTimeout(attach, 1200)
    return () => {
      clearTimeout(t)
      io.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
  return active
}

/** Writes page scroll progress (0–1) straight to a CSS variable — no React re-renders. */
export function useScrollProgressVar(ref) {
  const raf = useRef(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => {
      raf.current = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      el.style.transform = `scaleX(${p})`
    }
    const onScroll = () => {
      if (!raf.current) raf.current = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [ref])
}
