import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData.js'
import { SectionHeading } from './About.jsx'

function Bar({ name, level, delay }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-medium">{name}</span>
        <span className="font-mono text-[color:var(--color-muted)]">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-[color:var(--color-brand)] to-[color:var(--color-glow)]"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 sm:px-8 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Skills" title="What I work with" />

        <div className="grid md:grid-cols-2 gap-4 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass glass-hover rounded-3xl p-6 sm:p-8 space-y-5"
          >
            <h3 className="font-display font-semibold text-sm text-[color:var(--color-brand-light)] uppercase tracking-wide">
              Technical
            </h3>
            {skills.technical.map((s, i) => (
              <Bar key={s.name} {...s} delay={i * 0.05} />
            ))}
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="glass glass-hover rounded-3xl p-6 sm:p-8 space-y-5"
            >
              <h3 className="font-display font-semibold text-sm text-[color:var(--color-brand-light)] uppercase tracking-wide">
                Design
              </h3>
              {skills.design.map((s, i) => (
                <Bar key={s.name} {...s} delay={i * 0.05} />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
              className="glass glass-hover rounded-3xl p-6 sm:p-8"
            >
              <h3 className="font-display font-semibold text-sm text-[color:var(--color-brand-light)] uppercase tracking-wide mb-4">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((s) => (
                  <motion.span
                    whileHover={{ y: -3, scale: 1.05 }}
                    key={s}
                    className="text-xs font-mono px-3 py-1.5 rounded-full glass"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
