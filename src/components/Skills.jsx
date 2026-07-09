import { SKILLS } from '../data/resumeData.js'
import { SKILL_ICONS } from '../data/skillIcons.js'
import Reveal from './Reveal.jsx'

function SkillGroup({ title, items }) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <div className="skill-card__list">
        {items.map((item) => {
          const meta = SKILL_ICONS[item.name]
          const Icon = meta?.icon
          return (
            <div className="skill-row" key={item.name}>
              {Icon && <Icon className="skill-row__icon" style={{ color: meta.color }} aria-hidden="true" />}
              <span className="skill-row__label">{item.name}</span>
              <span className={'skill-row__level skill-row__level--' + item.level.toLowerCase()}>
                {item.level}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <Reveal>
        <p className="section__eyebrow"></p>
        <h2 className="section__title">My Skills</h2>
      </Reveal>

      <div className="skills__grid">
        <Reveal delay={0}><SkillGroup title="Frontend" items={SKILLS.frontend} /></Reveal>
        <Reveal delay={100}><SkillGroup title="Backend" items={SKILLS.backend} /></Reveal>
        <Reveal delay={200}><SkillGroup title="Database" items={SKILLS.database} /></Reveal>
      </div>
    </section>
  )
}
