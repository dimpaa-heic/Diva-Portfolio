import { motion } from 'framer-motion'
import { experience } from '../data/portfolioData.js'
import { SectionHeading } from './About.jsx'

export default function Experience() {
  if (!experience?.length) return null
  return (
    <section id="experience" className="relative px-4 sm:px-8 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Experience" title="Organization & Experience" />

        <div className="relative mt-12 pl-6 sm:pl-8">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-[color:var(--color-brand)] via-[color:var(--color-brand-light)]/40 to-transparent" />
          <div className="space-y-8">
            {experience.map((e, i) => (
              <motion.div
                key={e.role + i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[27px] sm:-left-[33px] top-1.5 w-3.5 h-3.5 rounded-full bg-[color:var(--color-brand)] shadow-[0_0_0_4px_rgba(46,107,255,0.2)]" />
                <div className="glass glass-hover rounded-2xl p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display font-semibold">{e.role}</h3>
                    <span className="font-mono text-xs px-3 py-1 rounded-full glass">{e.period}</span>
                  </div>
                  <p className="text-sm text-[color:var(--color-brand-light)] mt-1">{e.org}</p>
                  <ul className="mt-3 space-y-1.5">
                    {e.points.map((pt) => (
                      <li key={pt} className="text-sm text-[color:var(--color-muted)] flex gap-2">
                        <span className="text-[color:var(--color-brand-light)] mt-1">›</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
