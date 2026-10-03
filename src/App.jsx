import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Experience from './sections/Experience.jsx'
import Services from './sections/Services.jsx'
import Skills from './sections/Skills.jsx'
import Education from './sections/Education.jsx'
import Contact from './sections/Contact.jsx'
import { prefersReducedMotion } from './utils/scroll.js'

// Projects carries the five mockups: split it out of the first paint, then prefetch when idle.
const loadProjects = () => import('./sections/Projects.jsx')
const Projects = lazy(loadProjects)

const LOADER_KEY = 'hk-loader-seen'
const shouldShowLoader = () => {
  if (typeof window === 'undefined' || prefersReducedMotion()) return false
  try {
    return sessionStorage.getItem(LOADER_KEY) !== '1'
  } catch {
    return true
  }
}

function ProjectsFallback() {
  return (
    <section id="projects" aria-label="Selected work" className="section border-t border-line">
      <div className="container-x min-h-[40rem]" />
    </section>
  )
}

export default function App() {
  const [loading, setLoading] = useState(shouldShowLoader)
  const ready = !loading

  const finishLoading = useCallback(() => {
    try {
      sessionStorage.setItem(LOADER_KEY, '1')
    } catch {
      /* private mode: loader will simply show again next visit */
    }
    setLoading(false)
  }, [])

  // prefetch the heavy chunk as soon as the browser is idle
  useEffect(() => {
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 600))
    const id = idle(() => loadProjects())
    return () => (window.cancelIdleCallback ? window.cancelIdleCallback(id) : clearTimeout(id))
  }, [])

  // honour a #hash on first load once the layout exists
  useEffect(() => {
    if (!ready || !window.location.hash) return
    const id = window.location.hash.slice(1)
    const t = setTimeout(() => document.getElementById(id)?.scrollIntoView(), 300)
    return () => clearTimeout(t)
  }, [ready])

  return (
    <LazyMotion features={domAnimation} strict={false}>
      <div className="grain">
        <a href="#main" className="skip-link">Skip to content</a>
        <Loader show={loading} onDone={finishLoading} />
        <ScrollProgress />
        <Navbar ready={ready} />
        <main id="main">
          <Hero ready={ready} />
          <About />
          <Experience />
          <Services />
          <Suspense fallback={<ProjectsFallback />}>
            <Projects />
          </Suspense>
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </LazyMotion>
  )
}
