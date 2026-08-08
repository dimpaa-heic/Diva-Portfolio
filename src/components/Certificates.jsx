import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiRotateCw } from 'react-icons/fi'
import { certificates } from '../data/portfolioData.js'
import { SectionHeading } from './About.jsx'

function CertCard({ cert, index }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className={`flip-card h-56 cursor-pointer ${flipped ? 'is-flipped' : ''}`}
      onClick={() => setFlipped((f) => !f)}
      role="button"
      tabIndex={0}
      aria-label={`Certificate: ${cert.title}. Click to flip.`}
      onKeyDown={(e) => e.key === 'Enter' && setFlipped((f) => !f)}
    >
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-face flip-card-front glass glass-hover rounded-2xl p-6 flex flex-col justify-between">
          <FiAward className="text-[color:var(--color-brand-light)]" size={22} />
          <div>
            <h3 className="font-display font-semibold text-base leading-snug">{cert.title}</h3>
            <p className="text-sm text-[color:var(--color-muted)] mt-1">{cert.issuer}</p>
            <div className="flex items-center justify-between mt-3">
              <span className="font-mono text-xs text-[color:var(--color-muted)]">{cert.date}</span>
              <span className="text-xs inline-flex items-center gap-1 text-[color:var(--color-brand-light)]">
                <FiRotateCw size={12} /> Flip to view
              </span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-face flip-card-back glass rounded-2xl overflow-hidden">
          {cert.image ? (
            <img src={cert.image} alt={`${cert.title} certificate`} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-6 text-center">
              <FiAward size={26} className="text-[color:var(--color-brand-light)]/50" />
              <p className="text-xs text-[color:var(--color-muted)] font-mono">
                Add your certificate image path to this entry in portfolioData.js
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Certificates() {
  return (
    <section id="certificates" className="relative px-4 sm:px-8 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Certificates"
          title="Proof of the grind"
          subtitle="Click any card to flip it over and see the certificate."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {certificates.map((c, i) => (
            <CertCard key={c.id} cert={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
