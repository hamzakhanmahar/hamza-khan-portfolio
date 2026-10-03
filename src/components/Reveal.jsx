import { createElement } from 'react'
import { useInView } from '../hooks/useInView.js'
import { cn } from '../utils/cn.js'

/**
 * Scroll reveal wrapper. Pure CSS transitions toggled by an IntersectionObserver —
 * no animation library needed for this, so it costs ~nothing at runtime.
 * variant: 'up' (default) | 'fade' | 'scale' | 'left' | 'clip'
 */
export default function Reveal({ as = 'div', variant = 'up', delay = 0, className, style, children, ...rest }) {
  const [ref, inView] = useInView()
  const common = { ref, 'data-in': inView ? 'true' : 'false', style: { '--d': `${delay}ms`, ...style }, ...rest }

  // The clip variant observes an un-clipped wrapper: IntersectionObserver treats a fully
  // clip-path'd element as having zero area and would never fire.
  if (variant === 'clip') {
    return createElement(
      as,
      { ...common, className: cn('reveal-wrap', className) },
      createElement('div', { className: 'reveal-clip' }, children),
    )
  }
  return createElement(as, { ...common, 'data-variant': variant, className: cn('reveal', className) }, children)
}

/** Animated hairline divider. */
export function Rule({ className }) {
  const [ref, inView] = useInView({ rootMargin: '0px 0px -5% 0px' })
  return <div ref={ref} data-in={inView ? 'true' : 'false'} className={cn('rule', className)} aria-hidden="true" />
}
