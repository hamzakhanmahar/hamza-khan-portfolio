export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Smooth-scrolls to a section, updates the URL hash and moves focus for keyboard / screen-reader users. */
export function goTo(id, { updateHash = true } = {}) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
  if (updateHash) history.replaceState(null, '', id === 'home' ? window.location.pathname : `#${id}`)
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1')
  el.focus({ preventScroll: true })
}

/** onClick helper for in-page anchors; keeps real href for open-in-new-tab / no-JS. */
export function anchorClick(id, after) {
  return (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return
    e.preventDefault()
    goTo(id)
    after?.()
  }
}
