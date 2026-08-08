import { motion } from 'framer-motion'
import { FiLayers, FiCheckSquare, FiTarget, FiImage } from 'react-icons/fi'
import { profile } from '../data/portfolioData.js'

// ✏️ Edit these three cards to whatever stats fit you best.
const STATS = [
  { icon: FiLayers, title: '3 Focus Areas', subtitle: 'Data, Web & QA', className: 'float top-2 -left-4 sm:-left-8' },
  { icon: FiTarget, title: 'Creative Eye', subtitle: 'Graphic design side', className: 'float-slow top-1/3 -right-3 sm:-right-6' },
  { icon: FiCheckSquare, title: 'Data Science', subtitle: 'President University', className: 'float-slower bottom-2 left-4 sm:left-8' },
]

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] sm:aspect-square">
      {/* Photo / illustration placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute inset-6 sm:inset-10 rounded-[2rem] glass overflow-hidden flex items-center justify-center"
      >
        {profile.photo ? (
          <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-center px-6">
            <FiImage className="text-[color:var(--color-brand-light)]/40" size={32} />
            <p className="text-xs font-mono text-[color:var(--color-muted)]">
              Add your photo — set profile.photo in portfolioData.js
            </p>
          </div>
        )}
      </motion.div>

      {/* Floating glass stat cards */}
      {STATS.map(({ icon: Icon, title, subtitle, className }, i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
          className={`absolute w-40 sm:w-44 glass rounded-2xl p-3.5 ${className}`}
        >
          <div className="w-8 h-8 rounded-lg bg-[color:var(--color-brand)]/25 flex items-center justify-center mb-2">
            <Icon className="text-[color:var(--color-brand-light)]" size={15} />
          </div>
          <p className="font-display font-semibold text-sm leading-tight">{title}</p>
          <p className="text-xs text-[color:var(--color-muted)] mt-0.5">{subtitle}</p>
        </motion.div>
      ))}
    </div>
  )
}
