import { useEffect, useState } from 'react'
import { PROFILE } from '../data/resumeData.js'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
 
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onResize = () => window.innerWidth > 760 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const ids = ['home', ...LINKS.map((l) => l.id)]
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) {
          const top = visible.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b))
          setActive(top.target.id)
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="navbar-wrap">
      <header className="navbar">
        <div className="navbar__row">
          <a href="#home" className="navbar__home" onClick={goTo('home')} aria-label="Home">
            🎓
          </a>

          <a className="navbar__resume" href={PROFILE.resumeUrl} target="_blank" rel="noreferrer">
            📄 Resume
          </a>

          <button
            className="navbar__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className="navbar__links navbar__links--desktop">
            {LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'navbar__link--active' : ''} onClick={goTo(l.id)}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <nav className={'navbar__links navbar__links--mobile' + (open ? ' navbar__links--open' : '')}>
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'navbar__link--active' : ''} onClick={goTo(l.id)}>
              {l.label}
            </a>
          ))}
        </nav>
      </header>
    </div>
  )
}
