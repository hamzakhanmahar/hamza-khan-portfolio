import { Award, GraduationCap } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { certifications, education } from '../data/education.js'

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section border-t border-line">
      <div className="container-x">
        <SectionHeader index="06" label="Education" title="Where it started." id="education-title" />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <Reveal className="bg-bg p-6 sm:p-10 lg:p-12">
            <GraduationCap size={26} className="text-accent" strokeWidth={1.5} aria-hidden="true" />
            <p className="meta mt-8 uppercase tracking-[0.14em]">{education.period}</p>
            <h3 className="h3 mt-3">{education.school}</h3>
            <p className="mt-3 max-w-[40ch] text-[1.05rem] text-muted">{education.degree}</p>

            <div className="mt-10 flex items-end gap-4 border-t border-line pt-6">
              <p className="font-mono text-[clamp(2rem,1.4rem+2.4vw,3.25rem)] font-medium leading-none tracking-tight">{education.cgpa}</p>
              <p className="meta pb-1 uppercase tracking-[0.18em]">CGPA</p>
            </div>
          </Reveal>

          <Reveal delay={100} className="bg-bg-2 p-6 sm:p-10 lg:p-12">
            <Award size={26} className="text-accent" strokeWidth={1.5} aria-hidden="true" />
            <p className="eyebrow mt-8">Certification</p>
            {certifications.map((c) => (
              <div key={c.name} className="mt-4">
                <h3 className="text-[1.25rem] font-semibold leading-snug tracking-tight">{c.name}</h3>
                <p className="mt-2 text-muted">{c.issuer}</p>
                <p className="tag mt-5">{c.type}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
