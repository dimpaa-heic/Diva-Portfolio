import { useEffect, useState } from 'react'

export default function TypewriterRoles({ words, typingSpeed = 75, deletingSpeed = 40, pause = 1500 }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!words?.length) return
    const current = words[index % words.length]

    // Finished typing a word — wait, then start deleting
    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    // Finished deleting — move to the next word
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    )
    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause])

  const current = words?.[index % words.length] || ''

  return (
    <span className="font-mono">
      {current.slice(0, subIndex)}
      <span
        className="inline-block w-[2px] h-[0.9em] ml-1 align-middle bg-[color:var(--color-brand-light)]"
        style={{ animation: 'blinkCursor 0.9s step-end infinite' }}
      />
    </span>
  )
}
