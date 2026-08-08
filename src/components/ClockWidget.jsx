import { useEffect, useState } from 'react'

function useNow() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return now
}

export default function ClockWidget({ compact = false }) {
  const now = useNow()
  const time = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  const day = now.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short' })

  return (
    <div
      className={`glass rounded-full flex items-center gap-2 font-mono text-[color:var(--color-brand-light)] ${
        compact ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'
      }`}
      aria-label="Local time, Cikarang WIB"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-glow)] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-glow)]" />
      </span>
      <span className="tabular-nums">{time}</span>
      <span className="opacity-50">·</span>
      <span className="opacity-70">{day}</span>
      <span className="opacity-50 hidden sm:inline">·</span>
      <span className="opacity-70 hidden sm:inline">WIB</span>
    </div>
  )
}
