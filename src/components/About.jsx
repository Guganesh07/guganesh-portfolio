import { PROFILE, ABOUT, SKILLS } from '../data/resumeData.js'
import { SKILL_ICONS } from '../data/skillIcons.js'
import Reveal from './Reveal.jsx'

const ALL_SKILLS = [...SKILLS.frontend, ...SKILLS.backend, ...SKILLS.database].filter(
  (s) => SKILL_ICONS[s.name]
)

// Fixed "shuffled" offsets so the icon collage looks scattered but stays
// identical between renders (no layout jump).
const OFFSETS = [
  [-18, -10, -12], [14, 6, 10], [-6, 20, -8], [20, -16, 6],
  [-22, 14, -14], [8, -22, 12], [-12, -4, 8], [16, 18, -10],
  [-4, -18, 14], [22, 4, -6], [-16, 10, 4], [4, 22, -12]
]

export default function About() {
  return (
    <section className="about" id="about">
      <Reveal>
        <p className="section__eyebrow"></p>
        <h2 className="section__title">About Me</h2>
      </Reveal>

      <Reveal delay={120}>
        <div className="about__box">
          <div className="about__icons" aria-hidden="true">
            {ALL_SKILLS.map((skill, i) => {
              const meta = SKILL_ICONS[skill.name]
              const Icon = meta.icon
              const [x, y, r] = OFFSETS[i % OFFSETS.length]
              return (
                <span
                  className="about__icon"
                  key={skill.name}
                  style={{ transform: `translate(${x}px, ${y}px) rotate(${r}deg)`, color: meta.color }}
                >
                  <Icon />
                </span>
              )
            })}
          </div>

          <div className="about__content">
            <p className="about__lead">I'm {PROFILE.name}.</p>
            <p className="about__para">{ABOUT.paragraph}</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
