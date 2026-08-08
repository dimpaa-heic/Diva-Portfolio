import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { profile } from '../data/portfolioData.js'

export default function Footer() {
  return (
    <footer className="relative px-4 sm:px-8 pb-8 pt-4">
      <div className="max-w-5xl mx-auto glass rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[color:var(--color-muted)] font-mono">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
        </p>
        <div className="flex gap-4 text-[color:var(--color-muted)]">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-[color:var(--color-brand-light)]"><FiGithub size={16} /></a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-[color:var(--color-brand-light)]"><FiLinkedin size={16} /></a>
          <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-[color:var(--color-brand-light)]"><FiInstagram size={16} /></a>
        </div>
      </div>
    </footer>
  )
}
