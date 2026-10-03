import { Code2, Layers, MonitorSmartphone, Sprout } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'

const principles = [
  {
    icon: Layers,
    title: 'Full-stack thinking',
    text: 'From MongoDB schemas and REST endpoints to the React interface people actually touch.',
  },
  {
    icon: Code2,
    title: 'Clean, maintainable code',
    text: 'Readable, scalable code that the next developer, or future me, can build on.',
  },
  {
    icon: MonitorSmartphone,
    title: 'User-focused interfaces',
    text: 'Responsive layouts and clear UI that work on every screen size.',
  },
  {
    icon: Sprout,
    title: 'Always learning',
    text: 'Continuously expanding my technical expertise with every project I take on.',
  },
]

/** Technical schematic of the architecture Hamza works with: Client → API → Data. All items come from the CV. */
function StackDiagram() {
  const layers = [
    { tag: 'Client', title: 'React.js', items: ['Tailwind CSS', 'Reusable components', 'Responsive UI'] },
    { tag: 'API', title: 'Node.js + Express.js', items: ['REST endpoints', 'JWT auth', 'Role-based access'] },
    { tag: 'Data', title: 'MongoDB · Mongoose', items: ['Schemas & models', 'MySQL for relational data'] },
  ]
  const links = ['HTTP / JSON', 'Mongoose / SQL']

  return (
    <figure
      className="relative rounded-2xl border border-line bg-bg-2/70 p-5 sm:p-7"
      aria-label="Diagram of the full-stack architecture Hamza builds: React client, Node and Express API, MongoDB data layer"
    >
      <figcaption className="mb-6 flex items-center justify-between gap-3">
        <span className="eyebrow">Fig. 01 — The stack I build</span>
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="size-2 rounded-full bg-line-strong" />
          <i className="size-2 rounded-full bg-line-strong" />
          <i className="size-2 rounded-full bg-accent" />
        </span>
      </figcaption>

      <ol className="flex flex-col">
        {layers.map((l, i) => (
          <li key={l.tag} className="contents">
            <div className="group relative rounded-xl border border-line bg-bg p-4 transition-colors duration-500 hover:border-accent/50 sm:p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-[1.05rem] font-semibold tracking-tight">{l.title}</p>
                <p className="meta uppercase tracking-[0.18em] !text-accent">{l.tag}</p>
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {l.items.map((it) => (
                  <li key={it} className="tag">{it}</li>
                ))}
              </ul>
            </div>

            {links[i] && (
              <div className="relative flex h-14 items-center pl-6 sm:pl-8" aria-hidden="true">
                <span className="absolute left-6 top-0 h-full w-px overflow-hidden bg-line-strong sm:left-8">
                  <span
                    className="absolute left-0 top-0 h-4 w-px bg-accent"
                    style={{ animation: `flow-down 2.6s ${i * 0.9}s ease-in-out infinite` }}
                  />
                </span>
                <span className="meta ml-6 uppercase tracking-[0.16em]">{links[i]}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </figure>
  )
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container-x">
        <SectionHeader index="01" label="About" title="Building with purpose." id="about-title" />

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-6 xl:col-span-6">
            <Reveal className="space-y-6">
              <p className="lead !text-fg">
                I&rsquo;m Hamza, a Full-Stack Developer. I build modern, scalable web applications using MongoDB,
                Express.js, React.js, and Node.js — working across both backend systems and frontend experiences.
              </p>
              <p className="text-muted">
                I develop full-stack applications with a focus on clean architecture, reliable REST APIs, secure
                authentication, maintainable code, and responsive interfaces. My experience includes building
                platforms such as She Commerce and other web applications across different business needs.
              </p>
              <p className="text-muted">
                I care about writing clean and maintainable code, solving problems thoughtfully, and building
                interfaces that are clear, responsive, and easy to use. I studied Computer Science at the University
                of Sindh and continue to strengthen my skills through real-world projects and continuous learning.
              </p>
            </Reveal>

            <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 70} className="bg-bg p-5 sm:p-6">
                  <p.icon size={20} className="text-accent" strokeWidth={1.6} aria-hidden="true" />
                  <dt className="mt-4 text-[1rem] font-semibold tracking-tight">{p.title}</dt>
                  <dd className="mt-1.5 text-[0.92rem] leading-relaxed text-muted">{p.text}</dd>
                </Reveal>
              ))}
            </dl>
          </div>

          <Reveal variant="scale" delay={120} className="min-w-0 lg:col-span-6 lg:sticky lg:top-28 lg:self-start">
            <StackDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
