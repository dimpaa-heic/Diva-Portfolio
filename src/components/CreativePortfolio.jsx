import { useState, useMemo, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiImage, FiX } from 'react-icons/fi'
import { creativeWork, creativeCategories } from '../data/portfolioData.js'
import { SectionHeading } from './About.jsx'

const TABS = ['All', ...creativeCategories]

export default function CreativePortfolio() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null) // the item currently open in the lightbox

  const filtered = useMemo(
    () => (active === 'All' ? creativeWork : creativeWork.filter((w) => w.category === active)),
    [active]
  )

  // Close on Escape key, and lock page scroll while the lightbox is open
  useEffect(() => {
    if (!selected) return
    const onKey = (e) => e.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <>
    <section id="creative" className="relative px-4 sm:px-8 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Creative"
          title="Design & event work"
          subtitle="Posters, event visuals, and social media pieces — separate from my dev projects. Click any piece to view it larger."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mt-8">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === tab ? 'text-[color:var(--color-ink)]' : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]'
              }`}
            >
              {active === tab && (
                <motion.span
                  layoutId="creative-tab-active"
                  className="absolute inset-0 rounded-full glass border-[color:var(--color-brand-light)]/40 -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                layout
                key={item.id}
                layoutId={`creative-card-${item.id}`}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => item.image && setSelected(item)}
                className={`group relative aspect-[4/5] rounded-2xl overflow-hidden glass ${item.image ? 'cursor-zoom-in' : 'cursor-default'}`}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[color:var(--color-deep-2)] to-[color:var(--color-deep)]">
                    <FiImage className="text-[color:var(--color-brand-light)]/40" size={28} />
                  </div>
                )}

                {/* Dark overlay + title fade-in on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                  <p className="text-white text-sm font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </p>
                  <p className="text-white/60 text-xs font-mono translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-[30ms]">
                    {item.category}
                  </p>
                </div>

                {/* Blue glow border on hover */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-[color:var(--color-brand-light)]/60 transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-sm text-[color:var(--color-muted)] mt-10 text-center">No pieces in this category yet.</p>
        )}
      </div>
    </section>

    {/* Rendered via portal directly on <body> so it always sits above the navbar,
        regardless of any z-index/stacking-context set up elsewhere on the page. */}
    {createPortal(
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-sm px-4 py-10 sm:py-16"
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 glass rounded-full p-2.5 text-white hover:border-[color:var(--color-brand-light)]/60 transition-colors"
            >
              <FiX size={20} />
            </button>

            <motion.div
              layoutId={`creative-card-${selected.id}`}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full max-h-full flex flex-col items-center"
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="max-w-full max-h-[75vh] rounded-2xl object-contain shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-white font-display font-semibold text-lg">{selected.title}</p>
                <p className="text-white/60 text-sm font-mono mt-1">{selected.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  )
}
