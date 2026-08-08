import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi'
import ClockWidget from './ClockWidget.jsx'
import TypewriterRoles from './TypewriterRoles.jsx'
import HeroVisual from './HeroVisual.jsx'
import { profile } from '../data/portfolioData.js'

export default function Hero() {
  const ref = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handle = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMouse({ x, y })
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100svh] flex items-center px-4 sm:px-8 pt-32 pb-16"
    >
      <div className="max-w-6xl mx-auto w-full relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
        {/* ---- Left: text content ---- */}
        <div className="relative">
          {/* Floating HUD clock — top right of hero, tucked away on mobile */}
          <motion.div
            style={{ transform: `translate(${mouse.x * -8}px, ${mouse.y * -8}px)` }}
            className="hidden sm:block lg:hidden absolute -top-10 right-0 float-slow"
          >
            <ClockWidget />
          </motion.div>

          {/* Floating glow shapes */}
          <div
            style={{ transform: `translate(${mouse.x * 14}px, ${mouse.y * 10}px)` }}
            className="pointer-events-none absolute -left-10 top-10 w-24 h-24 rounded-full bg-[color:var(--color-brand)]/30 blur-2xl float"
          />
          <div
            style={{ transform: `translate(${mouse.x * -10}px, ${mouse.y * -14}px)` }}
            className="pointer-events-none absolute right-10 bottom-0 w-32 h-32 rounded-full bg-[color:var(--color-glow)]/25 blur-2xl float-slow"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-sm text-[color:var(--color-brand-light)] mb-4 tracking-wide"
          >
            {profile.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl tracking-tight text-gradient"
          >
            {profile.name}
          </motion.h1>

          {/* Typing animation cycling through roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-4 flex items-center gap-2.5 text-lg sm:text-xl font-semibold min-h-[1.75em]"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-[color:var(--color-glow)] shrink-0" />
            <TypewriterRoles words={profile.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-[color:var(--color-muted)] leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="glow-btn inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand)] hover:bg-[color:var(--color-brand-light)] text-white font-medium px-6 py-3 transition-colors"
            >
              View Projects
            </button>
            <a
              href={profile.resumeUrl}
              download
              className="glass glass-hover inline-flex items-center gap-2 rounded-full font-medium px-6 py-3"
            >
              <FiDownload /> Download CV
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass glass-hover inline-flex items-center gap-2 rounded-full font-medium px-6 py-3"
            >
              <FiMail /> Contact Me
            </button>
          </motion.div>
        </div>

        {/* ---- Right: photo + floating stat cards ---- */}
        <div className="relative">
          <motion.div
            style={{ transform: `translate(${mouse.x * -6}px, ${mouse.y * -6}px)` }}
            className="hidden lg:block absolute -top-16 right-4 float-slow z-10"
          >
            <ClockWidget />
          </motion.div>
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
