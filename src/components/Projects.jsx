import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../data/portfolioData.js'
import { SectionHeading } from './About.jsx'

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 sm:px-8 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Work"
          title="Selected projects"
          subtitle="A few things I've built across web development and data analytics."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="glass glass-hover rounded-2xl p-4 sm:p-5 flex flex-col group"
            >
              {/* compact image / placeholder — intentionally not too tall */}
              <div className="relative h-32 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-[color:var(--color-deep-2)] to-[color:var(--color-deep)]">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-display font-bold text-xl text-[color:var(--color-brand-light)]/40">
                    {p.name}
                  </div>
                )}
                <span className="absolute top-2 left-2 text-[10px] font-mono px-2 py-1 rounded-full glass">
                  {p.category}
                </span>
              </div>

              <h3 className="font-display font-semibold text-base">{p.name}</h3>
              <p className="text-sm text-[color:var(--color-muted)] mt-1.5 leading-relaxed line-clamp-3">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {p.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-[color:var(--color-muted)]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
                {p.live ? (
                  <a href={p.live} target="_blank" rel="noreferrer" className="text-xs inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full glass hover:border-[color:var(--color-brand-light)]/50">
                    <FiExternalLink size={12} /> Live
                  </a>
                ) : null}
                {p.github ? (
                  <a href={p.github} target="_blank" rel="noreferrer" className="text-xs inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full glass hover:border-[color:var(--color-brand-light)]/50">
                    <FiGithub size={12} /> Code
                  </a>
                ) : null}
                <Link
                  to={`/projects/${p.id}`}
                  className="ml-auto text-xs inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[color:var(--color-brand)]/20 text-[color:var(--color-brand-light)] hover:bg-[color:var(--color-brand)]/35"
                >
                  Details
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
