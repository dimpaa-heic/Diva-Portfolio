import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiSend } from 'react-icons/fi'
import { profile } from '../data/portfolioData.js'
import { SectionHeading } from './About.jsx'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.get('name')}`)
    const body = encodeURIComponent(`${form.get('message')}\n\n— ${form.get('name')} (${form.get('email')})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative px-4 sm:px-8 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Contact" title="Let's build something" subtitle="Open to internship opportunities across data, web, and QA." />

        <div className="grid md:grid-cols-5 gap-4 mt-10">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass rounded-3xl p-6 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Your name" className="bg-white/5 focus:bg-white/10 outline-none border border-white/10 focus:border-[color:var(--color-brand-light)]/60 rounded-xl px-4 py-3 text-sm transition-colors" />
              <input name="email" type="email" required placeholder="Your email" className="bg-white/5 focus:bg-white/10 outline-none border border-white/10 focus:border-[color:var(--color-brand-light)]/60 rounded-xl px-4 py-3 text-sm transition-colors" />
            </div>
            <textarea name="message" required rows={5} placeholder="Tell me about the opportunity or project..." className="w-full bg-white/5 focus:bg-white/10 outline-none border border-white/10 focus:border-[color:var(--color-brand-light)]/60 rounded-xl px-4 py-3 text-sm transition-colors resize-none" />
            <button type="submit" className="glow-btn inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand)] hover:bg-[color:var(--color-brand-light)] text-white font-medium px-6 py-3 transition-colors">
              Send Message <FiSend size={14} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <p className="text-sm text-[color:var(--color-muted)]">{profile.location}</p>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 mt-4 text-sm hover:text-[color:var(--color-brand-light)] transition-colors">
                <FiMail /> {profile.email}
              </a>
            </div>
            <div className="flex gap-3 mt-6">
              {[
                { icon: FiGithub, href: profile.socials.github, label: 'GitHub' },
                { icon: FiLinkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
                { icon: FiInstagram, href: profile.socials.instagram, label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glass glass-hover rounded-full p-3 hover:text-[color:var(--color-brand-light)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
