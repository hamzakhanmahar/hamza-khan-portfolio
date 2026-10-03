import { ArrowUp } from 'lucide-react'
import Logo from './Logo.jsx'
import { navItems, profile, socials } from '../data/profile.js'
import { anchorClick } from '../utils/scroll.js'

export default function Footer() {
  const links = socials.filter((s) => s.url)
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg">
      <div className="container-x pt-14 sm:pt-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="min-w-0 md:col-span-5">
            <div className="flex items-center gap-3">
              <Logo size={40} />
              <div className="leading-tight">
                <p className="font-semibold tracking-tight">{profile.name}</p>
                <p className="text-[0.9rem] text-muted">{profile.title}</p>
              </div>
            </div>
            <p className="mt-5 max-w-[34ch] text-[0.92rem] text-muted">{profile.statement}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-4">
            <p className="eyebrow mb-4">Navigation</p>
            <ul className="grid grid-cols-2 gap-x-6">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={anchorClick(n.id)}
                    className="inline-flex min-h-11 items-center text-[0.95rem] text-muted transition-colors hover:text-fg"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Elsewhere</p>
            <ul>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex min-h-11 items-center break-all text-[0.95rem] text-muted transition-colors hover:text-fg"
                >
                  Email
                </a>
              </li>
              {links.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-[0.95rem] text-muted transition-colors hover:text-fg"
                  >
                    {s.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-[0.85rem] text-muted">© 2026 Hamza Khan. All rights reserved.</p>
            <p className="meta">Built with React, curiosity &amp; clean code.</p>
          </div>
          <a
            href="#home"
            onClick={anchorClick('home')}
            className="btn btn-quiet !min-h-11 self-start !px-4 text-[0.85rem] sm:self-auto"
          >
            Back to top
            <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
