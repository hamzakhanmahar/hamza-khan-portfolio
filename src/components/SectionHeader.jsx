import Reveal, { Rule } from './Reveal.jsx'

/** "01 — ABOUT" label + animated rule + heading. Used by every section for consistent rhythm. */
export default function SectionHeader({ index, label, title, children, id }) {
  return (
    <header className="mb-12 sm:mb-16 lg:mb-20">
      <Reveal className="flex items-center gap-4">
        <span className="eyebrow !text-accent">{index}</span>
        <span className="eyebrow">— {label}</span>
      </Reveal>
      <Rule className="mt-5" />
      <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-end">
        <Reveal as="h2" id={id} delay={80} className="h2 min-w-0 lg:col-span-8">
          {title}
        </Reveal>
        {children && (
          <Reveal delay={160} className="min-w-0 lg:col-span-4">
            {children}
          </Reveal>
        )}
      </div>
    </header>
  )
}
