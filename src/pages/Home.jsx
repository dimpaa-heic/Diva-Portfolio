import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import CreativePortfolio from '../components/CreativePortfolio.jsx'
import Certificates from '../components/Certificates.jsx'
import Experience from '../components/Experience.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const targetId = location.state?.scrollTo
    if (!targetId) return
    // Wait a tick so the sections below have actually painted, then scroll.
    const raf = requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    })
    // Clear the nav state so a later re-render / refresh doesn't re-trigger it.
    navigate(location.pathname, { replace: true, state: {} })
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CreativePortfolio />
      <Certificates />
      <Experience />
      <Contact />
    </>
  )
}