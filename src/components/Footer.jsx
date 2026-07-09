import { PROFILE } from '../data/resumeData.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {PROFILE.name} — built with React + Vite.
      </p>
      <div className="site-footer__links">
        <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}
