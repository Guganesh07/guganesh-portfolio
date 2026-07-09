import { PROFILE, ABOUT, summary } from '../data/resumeData.js'
import { useTypewriter } from '../hooks/useTypewriter.js'
import PhotoBackdrop from './PhotoBackdrop.jsx'
import LifeLoop from './LifeLoop.jsx'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const ROLES = ['Java Full Stack', 'Web Technologies', 'Spring Beginner','SQL', 'Python Developer']

export default function Home() {
  const typed = useTypewriter(ROLES)

  return (
    <section className="hero" id="home">
      <div className="hero-box">

        {/* Top row: name/role/socials on the left, photo on the right */}
        <div className="hero-box__top">
          <div className="hero-box__identity">
            <p className="hero__eyebrow">{PROFILE.name}</p>
            <h1 className="hero__title">
              Full Stack
            <br></br> <span>Developer</span>
            </h1>
            <p className="hero__typed">
              <span>{typed}</span>
              <span className="hero__cursor" aria-hidden="true">|</span>
            </p>
            <div className="hero__socials">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hero__social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hero__social-icon" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="hero-box__photo-col">
  <div className="hero-box__photo-wrap">
    <img className="hero__photo" src={PROFILE.photo} alt={PROFILE.name} />
  </div>
  
</div>
        </div>

        {/* Main row: summary, now full width since the code block was removed */}
        <div className="hero-box__main"><LifeLoop />
          <div className="hero-box__summary hero-box__summary--full">
            <p className="hero-box__summary-eyebrow"></p>
            <p>{summary.paragraph}</p>
            <div className="hero__cta">
              <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer" className="btn btn--primary">
                View Resume
              </a>
              <a
                href="#contact"
                className="btn btn--ghost"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
