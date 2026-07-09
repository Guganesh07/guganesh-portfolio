import { PROJECTS } from '../data/resumeData.js'
import Reveal from './Reveal.jsx'
import { useTilt } from '../hooks/useTilt.js'

function ProjectCard({ p, onOpen }) {
  
  const tilt = useTilt(6)
  return (
    <div className="project-card" ref={tilt.ref} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave}>
      {p.cover ? (
        <img className="project-card__image" src={p.cover} alt={p.title} />
      ) : (
        <div className="project-card__image project-card__image--placeholder">💡</div>
      )}
      <div className="project-card__body">
        <h3>{p.title}</h3>
        <p className="project-card__desc">{p.hasDetail ? p.shortDesc : p.description}</p>
        <div className="project-card__tags">
          {p.tags.map((t) => (
            <span key={t} className="project-card__tag">
              {t}
            </span>
          ))}
        </div>
        
        {p.hasDetail && (
          <button className="project-card__more" onClick={() => onOpen(p.id)}>
            More →
          </button>
        )}
      </div>
    </div>
  )
}

export default function Projects({ onOpenProject }) {
  return (
    <section className="projects" id="projects">
      <Reveal>
        <p className="section__eyebrow"></p>
        <h2 className="section__title">Projects</h2>
      </Reveal>

      <div className="projects__grid">
        {PROJECTS.map((p, i) => (
          <Reveal delay={i * 100} key={p.id} className="projects__grid-item">
            <ProjectCard p={p} onOpen={onOpenProject} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
