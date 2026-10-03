import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, Copy, Download, Mail, MessageCircle } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { profile, socials } from '../data/profile.js'

function CopyEmail() {
  const [done, setDone] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setDone(true)
      setTimeout(() => setDone(false), 2000)
    } catch {
      /* clipboard blocked: the mailto link beside it still works */
    }
  }
  return (
    <button
      type="button"
      onClick={copy}
      className="grid size-11 shrink-0 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
      aria-label={done ? 'Email address copied' : 'Copy email address'}
    >
      {done ? <Check size={16} className="text-accent" aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      <span className="sr-only" role="status" aria-live="polite">{done ? 'Copied' : ''}</span>
    </button>
  )
}

/** Mailto-based form: no backend, nothing stored. Opens the visitor's email app with the message prefilled. */
function ContactForm() {
  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const name = String(f.get('name') || '').trim()
    const email = String(f.get('email') || '').trim()
    const message = String(f.get('message') || '').trim()
    const subject = `Project inquiry from ${name || 'your portfolio'}`
    const body = `${message}\n\n— ${name}${email ? `\n${email}` : ''}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const field =
    'mt-2 block w-full rounded-lg border border-line bg-bg px-4 py-3.5 text-[1rem] text-fg placeholder:text-dim transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25'

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-bg-2/80 p-5 sm:p-8" aria-labelledby="form-title">
      <h3 id="form-title" className="text-[1.25rem] font-semibold tracking-tight">Tell me about your idea</h3>
      <p id="form-hint" className="mt-1.5 text-[0.88rem] text-muted">
        This opens your email app with the message ready to send. Nothing is stored on this site.
      </p>

      <div className="mt-7 space-y-5">
        <div>
          <label htmlFor="c-name" className="text-[0.85rem] font-medium">Name</label>
          <input id="c-name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={field} />
        </div>
        <div>
          <label htmlFor="c-email" className="text-[0.85rem] font-medium">Email</label>
          <input id="c-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
        </div>
        <div>
          <label htmlFor="c-msg" className="text-[0.85rem] font-medium">Message</label>
          <textarea
            id="c-msg"
            name="message"
            required
            rows={5}
            aria-describedby="form-hint"
            placeholder="What are you looking to build?"
            className={`${field} resize-y`}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary mt-7 w-full">
        Let&rsquo;s Talk
        <ArrowRight size={18} className="i-arrow-right" aria-hidden="true" />
      </button>
    </form>
  )
}

export default function Contact() {
  const links = socials.filter((s) => s.url)

  return (
    <section id="contact" aria-labelledby="contact-title" className="section relative overflow-hidden border-t border-line">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-grid absolute inset-0 opacity-70" />
        <div className="absolute -bottom-40 left-1/2 h-[26rem] w-[44rem] max-w-[120vw] -translate-x-1/2 rounded-full bg-accent/[0.09] blur-[130px]" />
      </div>

      <div className="container-x">
        <Reveal className="flex items-center gap-4">
          <span className="eyebrow !text-accent">07</span>
          <span className="eyebrow">— Let&rsquo;s Connect</span>
        </Reveal>

        <div className="mt-8 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-7">
            <Reveal as="h2" id="contact-title" delay={60} className="display !text-[clamp(2.75rem,1.2rem+7.6vw,6.5rem)] !leading-[0.94]">
              Have an idea?<br />
              <span className="text-accent">Let&rsquo;s build it.</span>
            </Reveal>

            <Reveal delay={140}>
              <p className="lead mt-8 max-w-[46ch]">
                Whether you need a modern frontend, backend API, full-stack application or complete web experience,
                let&rsquo;s discuss your idea.
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-9 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent('Project inquiry')}`}
                className="btn btn-primary"
              >
                Let&rsquo;s Talk
                <ArrowRight size={18} className="i-arrow-right" aria-hidden="true" />
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-ghost">
                <Mail size={17} aria-hidden="true" />
                Email Me
              </a>
              <a href={profile.resume.href} download={profile.resume.fileName} className="btn btn-quiet">
                <Download size={17} aria-hidden="true" />
                Download CV
              </a>
            </Reveal>

            <Reveal delay={260}>
              <ul className="mt-14 border-t border-line">
                <li className="flex items-center justify-between gap-3 border-b border-line py-4">
                  <div className="min-w-0">
                    <p className="meta uppercase tracking-[0.16em]">Email</p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="mt-1 block break-all text-[clamp(1.05rem,0.9rem+0.6vw,1.35rem)] font-medium tracking-tight transition-colors hover:text-accent"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <CopyEmail />
                </li>
                <li className="border-b border-line">
                  <a
                    href={profile.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat on WhatsApp, ${profile.whatsapp.label}`}
                    className="group flex min-h-[4.25rem] items-center justify-between gap-4 py-4"
                  >
                    <span className="min-w-0">
                      <span className="meta block uppercase tracking-[0.16em]">WhatsApp</span>
                      <span className="mt-1 block truncate text-[1.05rem] font-medium tracking-tight transition-colors group-hover:text-accent">
                        {profile.whatsapp.label}
                      </span>
                    </span>
                    <MessageCircle
                      size={20}
                      className="shrink-0 text-dim transition-colors duration-500 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </a>
                </li>
                {links.map((s) => (
                  <li key={s.id} className="border-b border-line">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-h-[4.25rem] items-center justify-between gap-4 py-4"
                    >
                      <span className="min-w-0">
                        <span className="meta block uppercase tracking-[0.16em]">{s.label}</span>
                        <span className="mt-1 block truncate text-[1.05rem] font-medium tracking-tight transition-colors group-hover:text-accent">
                          {s.handle}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={20}
                        className="shrink-0 text-dim transition-all duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        aria-hidden="true"
                      />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={140} className="min-w-0 lg:col-span-5">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
