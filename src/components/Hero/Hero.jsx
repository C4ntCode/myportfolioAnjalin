import {
  FiArrowRight,
  FiMapPin,
  FiMail,
  FiCalendar,
  FiAward,
} from 'react-icons/fi'
import profileImg from '../../assets/Profile.jpg'
import './Hero.css'

const roleTags = [
  'Frontend Developer',
  'UI / UX',
  'Responsive Web',
  'Bootstrap & JS',
]

const Hero = () => {
  const handleScroll = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content reveal">
          <div className="hero__location-chip">
            <FiMapPin aria-hidden="true" />
            <span>Zamboanga City, Philippines</span>
          </div>

          <h1 className="hero__title">Sherwin S. Anjalin</h1>

          <div className="hero__tags" aria-label="Specializations">
            {roleTags.map((tag, i) => (
              <span className="hero__tag" key={tag}>
                {tag}
                {i < roleTags.length - 1 && (
                  <span className="hero__tag-sep" aria-hidden="true">
                    \
                  </span>
                )}
              </span>
            ))}
          </div>

          <a
            href="#projects"
            className="hero__badge"
            onClick={(e) => handleScroll(e, 'projects')}
          >
            <span className="hero__badge-icon">
              <FiAward aria-hidden="true" />
            </span>
            <span className="hero__badge-text">
              <strong>Frontend Web Projects</strong>
              <small>Responsive & user-friendly interfaces</small>
            </span>
            <FiArrowRight className="hero__badge-arrow" aria-hidden="true" />
          </a>

          <div className="hero__actions">
            <a
              href="#contact"
              className="btn btn--primary"
              onClick={(e) => handleScroll(e, 'contact')}
            >
              <FiCalendar aria-hidden="true" />
              Hire Me
            </a>
            <a
              href="mailto:anjalinsherwind23@gmail.com"
              className="btn btn--ghost"
            >
              <FiMail aria-hidden="true" />
              Send Email
            </a>
            <a
              href="#projects"
              className="btn btn--ghost"
              onClick={(e) => handleScroll(e, 'projects')}
            >
              View Projects
              <FiArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero__visual reveal">
          <div className="hero__card" aria-hidden="true">
            <div className="hero__card-header">
              <span className="hero__card-brand">SHERWIN</span>
              <span className="hero__card-dot" />
            </div>

            <div className="hero__card-photo">
              <img
                src={profileImg}
                alt="Portrait of Sherwin S. Anjalin"
                loading="eager"
              />
            </div>

            <div className="hero__card-meta">
              <div>
                <p className="hero__card-label">Role</p>
                <p className="hero__card-value">Frontend Developer</p>
              </div>
              <div>
                <p className="hero__card-label">ID</p>
                <p className="hero__card-value">#2026 — ZC</p>
              </div>
            </div>

            <div className="hero__card-footer">
              <span>FRONTEND</span>
              <span>•</span>
              <span>UI / UX</span>
              <span>•</span>
              <span>RESPONSIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
