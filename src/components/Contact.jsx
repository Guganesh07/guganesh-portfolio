import { PROFILE } from '../data/resumeData.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const whatsapp = `https://wa.me/${PROFILE.whatsappNumber}?text=${encodeURIComponent(
    `Hi ${PROFILE.name}, I came across your portfolio and would like to connect.`
  )}`
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}&su=${encodeURIComponent(
    'Opportunity for you'
  )}`

  return (
    <section className="contact" id="contact">
      <Reveal>
        <p className="section__eyebrow"></p>
        <h2 className="section__title">Contact Me</h2>
        <p className="contact__lede">
          Open to Junior Web Developer / Software Engineer roles. Reach out directly through any of these:
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="contact__grid">
          <a className="contact-card contact-card--glow" href={`tel:${PROFILE.phoneDial}`}>
            <span className="contact-card__icon" aria-hidden="true">☎</span>
            <span className="contact-card__label">Call</span>
            <span className="contact-card__value">{PROFILE.phone}</span>
          </a>

          <a className="contact-card contact-card--glow" href={whatsapp} target="_blank" rel="noreferrer">
            <span className="contact-card__icon" aria-hidden="true">💬</span>
            <span className="contact-card__label">WhatsApp</span>
            <span className="contact-card__value">Start a chat</span>
          </a>

          <a className="contact-card contact-card--glow" href={gmail} target="_blank" rel="noreferrer">
            <span className="contact-card__icon" aria-hidden="true">✉</span>
            <span className="contact-card__label">Gmail</span>
            <span className="contact-card__value">{PROFILE.email}</span>
          </a>
        </div>
      </Reveal>
    </section>
  )
}
