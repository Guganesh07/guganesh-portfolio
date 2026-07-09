import { CREDENTIALS } from '../data/resumeData.js'
import Reveal from './Reveal.jsx'
import { useTilt } from '../hooks/useTilt.js'

function CredentialCard({ c }) {
  const tilt = useTilt(15)
  return (
    <div
      className="credential-card credential-card--cut"
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <h3>{c.title}</h3>
      <p className="credential-card__subtitle">{c.subtitle}</p>
      <ul>
        {c.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Credentials() {
  return (
    <section className="credentials" id="credentials">
      <Reveal>
        <p className="section__eyebrow"></p>
        <h2 className="section__title">Education & Training</h2>
      </Reveal>

      <div className="credentials__grid">
        {CREDENTIALS.map((c, i) => (
          <Reveal delay={i * 100} key={c.title}>
            <CredentialCard c={c} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
