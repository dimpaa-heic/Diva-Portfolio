import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data/portfolioData.js'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="font-display text-2xl font-bold">Project not found</h1>
        <button onClick={() => navigate('/')} className="glass glass-hover rounded-full px-5 py-2.5 text-sm">
          <FiArrowLeft className="inline mr-2" /> Back home
        </button>
      </div>
    )
  }

  return (
    <article className="px-4 sm:px-8 pt-32 pb-24 max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-brand-light)] mb-8">
        <FiArrowLeft /> Back to portfolio
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className="font-mono text-xs px-3 py-1 rounded-full glass text-[color:var(--color-brand-light)]">
          {project.category}
        </span>
        <h1 className="font-display font-bold text-3xl sm:text-5xl mt-4 tracking-tight">{project.name}</h1>
        <p className="text-[color:var(--color-muted)] mt-4 max-w-2xl leading-relaxed">{project.overview}</p>

        <div className="flex gap-3 mt-6">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="glow-btn inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand)] text-white text-sm font-medium px-5 py-2.5">
              <FiExternalLink size={14} /> Live Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="glass glass-hover inline-flex items-center gap-2 rounded-full text-sm font-medium px-5 py-2.5">
              <FiGithub size={14} /> GitHub
            </a>
          )}
        </div>

        <div className="h-64 sm:h-96 rounded-3xl mt-10 bg-gradient-to-br from-[color:var(--color-deep-2)] to-[color:var(--color-deep)] flex items-center justify-center overflow-hidden">
          {project.image ? (
            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          ) : (
            <span className="font-display font-bold text-3xl text-[color:var(--color-brand-light)]/30">{project.name}</span>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          <div className="glass rounded-2xl p-6">
            <h2 className="font-display font-semibold mb-2 text-[color:var(--color-brand-light)]">Problem</h2>
            <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">{project.problem}</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h2 className="font-display font-semibold mb-2 text-[color:var(--color-brand-light)]">Solution</h2>
            <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div className="glass rounded-2xl p-6 mt-4">
          <h2 className="font-display font-semibold mb-3 text-[color:var(--color-brand-light)]">Key Features</h2>
          <ul className="grid sm:grid-cols-2 gap-2">
            {project.features.map((f) => (
              <li key={f} className="text-sm text-[color:var(--color-muted)] flex gap-2">
                <span className="text-[color:var(--color-brand-light)]">›</span> {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-2xl p-6 mt-4">
          <h2 className="font-display font-semibold mb-3 text-[color:var(--color-brand-light)]">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-full border border-white/10">{t}</span>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6 mt-4">
          <h2 className="font-display font-semibold mb-2 text-[color:var(--color-brand-light)]">What I Learned</h2>
          <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">{project.learned}</p>
        </div>
      </motion.div>
    </article>
  )
}
