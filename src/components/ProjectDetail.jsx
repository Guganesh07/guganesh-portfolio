import { PROJECTS } from '../data/resumeData.js'

export default function ProjectDetail({ projectId, onBack }) {
  const project = PROJECTS.find((p) => p.id === projectId)
  if (!project) return null

  return (
    <section className="project-detail">
      <button className="project-detail__back" onClick={onBack}>
        ← Back
      </button>

      <p className="section__eyebrow"></p>
      <h1 className="section__title">{project.title}</h1>
      <p className="project-detail__desc">{project.description}</p>

      <div className="project-detail__tags">
        {project.tags.map((t) => (
          <span key={t} className="project-card__tag">
            {t}
          </span>
        ))}
      </div>

      <div className="project-detail__shots">
        {project.screenshots.map((src, i) => (
          <img key={i} src={src} alt={`${project.title} screenshot ${i + 1}`} loading="lazy" />
        ))}
      </div>

      {project.demoUrl ? (
        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn btn--primary project-detail__live">
          View Live ↗
        </a>
      ) : (
        <span className="btn btn--ghost project-detail__live project-detail__live--disabled">
          Live link coming soon
        </span>
      )}
    </section>
  )
}
