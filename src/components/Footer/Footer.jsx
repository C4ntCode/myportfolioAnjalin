import { FiGithub, FiMail, FiArrowUp } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            Sherwin<span>.</span>
          </a>
          <p className="footer__tagline">
            Frontend Developer crafting clean, responsive web experiences.
          </p>
          <span className="footer__status">
            <span className="footer__status-dot" aria-hidden="true" />
            Available for new opportunities
          </span>
        </div>

        <div className="footer__socials">
          <a
            href="https://github.com/AnjalinSherwin"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="footer__social"
          >
            <FiGithub aria-hidden="true" />
          </a>
          <a
            href="mailto:anjalinsherwind23@gmail.com"
            aria-label="Email"
            className="footer__social"
          >
            <FiMail aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="footer__top"
          onClick={scrollTop}
          aria-label="Back to top"
        >
          <FiArrowUp aria-hidden="true" />
        </button>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {year} <span>Sherwin S. Anjalin</span>. All rights reserved.
          </p>
          <p className="footer__credit">
            Designed &amp; built with care in Zamboanga City.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
