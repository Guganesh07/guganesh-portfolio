import { useEffect, useState } from 'react'

const STEPS = [
  { label: 'wakeUp()', icon: '☀' },
  { label: 'code()', icon: '⌨' },
  { label: 'sleep()', icon: '☾' }
]

export default function LifeLoop() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return
    const interval = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 1300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="life-loop" role="img" aria-label="Life loop: wake up, code, sleep, repeat">
      <div className="life-loop__ring" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="life-loop__ring-svg">
          <circle cx="50" cy="50" r="44" className="life-loop__ring-track" />
          <circle cx="50" cy="50" r="44" className="life-loop__ring-progress" />
        </svg>
      </div>

      <div className="life-loop__steps">
        {STEPS.map((s, i) => (
          <div key={s.label} className={'life-loop__step' + (i === active ? ' life-loop__step--active' : '')}>
            <span className="life-loop__icon">{s.icon}</span>
            <span className="life-loop__label">{s.label}</span>
          </div>
        ))}
      </div>

      <p className="life-loop__caption">
        <span className="life-loop__loop-icon" aria-hidden="true">↻</span> my lifestyle loops
      </p>
    </div>
  )
}
