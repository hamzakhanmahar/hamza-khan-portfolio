import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import Logo from './Logo.jsx'
import { navItems, profile, sections } from '../data/profile.js'
import { useActiveSection, useScrolled } from '../hooks/useScrollState.js'
import { anchorClick, goTo } from '../utils/scroll.js'
import { cn } from '../utils/cn.js'

const SECTION_IDS = sections.map((s) => s.id)
const NAV_FOR = Object.fromEntries(sections.map((s) => [s.id, s.nav]))

export default function Navbar({ ready }) {
  const scrolled = useScrolled(24)
  const current = NAV_FOR[useActiveSection(SECTION_IDS)]
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  const close = useCallback(() => setOpen(false), [])

  // lock scroll + ESC to close + focus management while the mobile menu is open
  useEffect(() => {
    if (!open) return
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
      if (e.key === 'Tab' && menuRef.current) {
        const f = [toggleRef.current, ...menuRef.current.querySelectorAll('a, button')].filter(Boolean)
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    // close automatically if the viewport grows past the mobile breakpoint
    const mq = window.matchMedia('(min-width: 1024px)')
    const onMq = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onMq)
    return () => {
      document.documentElement.style.overflow = prev
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter,transform,opacity] duration-500',
          ready ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0',
          scrolled && !open
            ? 'border-line bg-bg/70 backdrop-blur-xl backdrop-saturate-150'
            : 'border-transparent bg-transparent',
        )}
      >
        <nav
          aria-label="Primary"
          className="container-x flex h-[var(--nav-h)] items-center justify-between gap-4"
        >
          <a
            href="#home"
            onClick={anchorClick('home', close)}
            className="group flex min-h-11 items-center gap-3 rounded-lg"
            aria-label={`${profile.name} — back to top`}
          >
            <Logo className="transition-transform duration-500 group-hover:rotate-[-6deg]" />
            <span className="text-[0.95rem] font-semibold tracking-tight">{profile.name}</span>
          </a>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = current === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={anchorClick(item.id)}
                    aria-current={active ? 'location' : undefined}
                    className={cn(
                      'relative inline-flex min-h-11 items-center px-3.5 text-[0.9rem] transition-colors duration-300',
                      active ? 'text-fg' : 'text-muted hover:text-fg',
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-x-3.5 bottom-1.5 h-px origin-left bg-accent transition-transform duration-500 ease-out-expo',
                        active ? 'scale-x-100' : 'scale-x-0',
                      )}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={anchorClick('contact')}
              className="btn btn-ghost hidden !min-h-11 !px-5 lg:inline-flex"
            >
              Let&rsquo;s Talk
              <ArrowRight size={16} className="i-arrow-right" aria-hidden="true" />
            </a>

            {/* Hamburger */}
            <button
              ref={toggleRef}
              type="button"
              className="relative grid size-11 place-items-center rounded-lg lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3.5 w-6" aria-hidden="true">
                <span
                  className={cn(
                    'absolute left-0 h-[1.5px] w-full bg-fg transition-all duration-500 ease-out-expo',
                    open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0',
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-fg transition-all duration-300',
                    open ? 'w-0 opacity-0' : 'w-4 opacity-100',
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 h-[1.5px] w-full bg-fg transition-all duration-500 ease-out-expo',
                    open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0',
                  )}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            ref={menuRef}
            key="menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-40 overflow-y-auto bg-bg lg:hidden"
            initial={{ clipPath: 'circle(0% at calc(100% - 2.25rem) 2.1rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 2.25rem) 2.1rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 2.25rem) 2.1rem)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="container-x relative flex min-h-full flex-col pb-10 pt-[calc(var(--nav-h)+1.5rem)]">
              <p className="eyebrow mb-5">Navigation</p>
              <ul className="flex flex-col">
                {navItems.map((item, i) => (
                  <m.li
                    key={item.id}
                    className="border-b border-line"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.18 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        setOpen(false)
                        // wait for the scroll lock to lift before scrolling
                        setTimeout(() => goTo(item.id), 60)
                      }}
                      aria-current={current === item.id ? 'location' : undefined}
                      className="group flex min-h-[3.75rem] items-center justify-between gap-4 py-2"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="meta w-6">{String(i + 1).padStart(2, '0')}</span>
                        <span
                          className={cn(
                            'text-[clamp(1.75rem,7.5vw,2.5rem)] font-semibold tracking-tight transition-colors',
                            current === item.id ? 'text-accent' : 'text-fg',
                          )}
                        >
                          {item.label}
                        </span>
                      </span>
                      <ArrowRight size={20} className="text-dim transition-transform group-active:translate-x-1" aria-hidden="true" />
                    </a>
                  </m.li>
                ))}
              </ul>

              <m.div
                className="mt-10 flex flex-col gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
              >
                <a
                  href="#contact"
                  className="btn btn-primary w-full"
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(false)
                    setTimeout(() => goTo('contact'), 60)
                  }}
                >
                  Let&rsquo;s Talk
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a href={profile.resume.href} download={profile.resume.fileName} className="btn btn-quiet w-full">
                  <Download size={17} aria-hidden="true" />
                  Download CV
                </a>
              </m.div>

              <a
                href={`mailto:${profile.email}`}
                className="mt-auto flex min-h-12 items-center gap-3 pt-10 text-muted"
              >
                <Mail size={16} aria-hidden="true" />
                <span className="break-all text-[0.95rem]">{profile.email}</span>
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}
