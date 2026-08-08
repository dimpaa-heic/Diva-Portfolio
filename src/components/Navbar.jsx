import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'
import { profile } from '../data/portfolioData.js'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'creative', label: 'Creative' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') return
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean)
    if (!sections.length) return
    const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting)
    if (visible.length > 0) {
      const topMost = visible.reduce((a, b) =>
        a.boundingClientRect.top < b.boundingClientRect.top ? a : b
      )
      setActive(topMost.target.id)
    }
  },
  { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
)
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [location.pathname])

  const scrollTo = (id) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4 px-3 sm:px-4">
      <nav
        className={`w-full max-w-5xl glass rounded-2xl flex items-center justify-between gap-3 px-3 sm:px-5 py-2.5 transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_8px_40px_rgba(46,107,255,0.18)]' : ''
        }`}
      >
        <button
          onClick={() => scrollTo('hero')}
          className="font-display font-bold text-base sm:text-lg tracking-tight shrink-0"
        >
          Diva<span className="text-[color:var(--color-brand-light)]">.</span>
        </button>

        <ul className="hidden lg:flex items-center gap-1 mx-auto">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => scrollTo(item.id)}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                  active === item.id ? 'text-[color:var(--color-ink)]' : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]'
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-xl bg-[color:var(--color-brand)]/25 border border-[color:var(--color-brand-light)]/40 -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 shrink-0 ml-auto lg:ml-0">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="glass rounded-full p-2 hover:border-[color:var(--color-brand-light)]/50 transition-colors"
          >
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          <a
            href={profile.resumeUrl}
            download
            className="hidden md:inline-flex items-center rounded-full bg-[color:var(--color-brand)] hover:bg-[color:var(--color-brand-light)] text-white text-sm font-medium px-4 py-2 glow-btn transition-colors"
          >
            Resume
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="lg:hidden glass rounded-full p-2"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full right-3 sm:right-4 mt-2 w-56 glass rounded-2xl p-2 lg:hidden origin-top-right"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active === item.id
                    ? 'bg-[color:var(--color-brand)]/25 text-[color:var(--color-ink)]'
                    : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)] hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="mt-1 flex items-center justify-center rounded-xl bg-[color:var(--color-brand)] text-white text-sm font-medium px-4 py-2.5"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
