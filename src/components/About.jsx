import { motion } from 'framer-motion'
import { FiTarget, FiHeart, FiCompass } from 'react-icons/fi'
import { about, education } from '../data/portfolioData.js'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <section id="about" className="relative px-4 sm:px-8 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="About" title="Who I am" />

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-2 glass glass-hover rounded-3xl p-6 sm:p-8"
          >
            <p className="text-base sm:text-lg leading-relaxed text-[color:var(--color-ink)]">{about.bio}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {about.interests.map((i) => (
                <span
                  key={i}
                  className="text-xs font-mono px-3 py-1.5 rounded-full border border-[color:var(--color-brand-light)]/25 text-[color:var(--color-brand-light)]"
                >
                  {i}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="glass glass-hover rounded-3xl p-5 flex-1"
            >
              <FiTarget className="text-[color:var(--color-brand-light)] mb-2" size={18} />
              <h3 className="font-display font-semibold text-sm mb-1.5">Goal</h3>
              <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">{about.goal}</p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
              className="glass glass-hover rounded-3xl p-5 flex-1"
            >
              <FiHeart className="text-[color:var(--color-brand-light)] mb-2" size={18} />
              <h3 className="font-display font-semibold text-sm mb-1.5">Passion</h3>
              <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">{about.passion}</p>
            </motion.div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="font-display font-semibold text-lg mb-5 flex items-center gap-2">
            <FiCompass className="text-[color:var(--color-brand-light)]" /> Education
          </h3>
          <div className="space-y-3">
            {education.map((ed) => (
              <motion.div
                key={ed.school}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="glass glass-hover rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <div>
                  <p className="font-display font-semibold">{ed.school}</p>
                  <p className="text-sm text-[color:var(--color-muted)]">{ed.major}</p>
                  <p className="text-xs text-[color:var(--color-muted)] mt-1 font-mono">{ed.note}</p>
                </div>
                <span className="font-mono text-xs px-3 py-1.5 rounded-full glass shrink-0 self-start sm:self-center">
                  {ed.period}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-brand-light)] mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-[color:var(--color-muted)] max-w-xl">{subtitle}</p>}
    </motion.div>
  )
}
