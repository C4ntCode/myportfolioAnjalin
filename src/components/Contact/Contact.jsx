import { useState } from 'react'
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiGithub,
  FiSend,
  FiCheckCircle,
} from 'react-icons/fi'
import './Contact.css'

const contactDetails = [
  {
    icon: <FiMapPin aria-hidden="true" />,
    label: 'Address',
    value: 'Palmeras Dr. Guiwan, Zamboanga City',
    href: null,
  },
  {
    icon: <FiMail aria-hidden="true" />,
    label: 'Email',
    value: 'anjalinsherwind23@gmail.com',
    href: 'mailto:anjalinsherwind23@gmail.com',
  },
  {
    icon: <FiPhone aria-hidden="true" />,
    label: 'Phone',
    value: '0932 - 781 - 4916',
    href: 'tel:+639327814916',
  },
  {
    icon: <FiGithub aria-hidden="true" />,
    label: 'Github',
    value: 'AnjalinSherwin',
    href: 'https://github.com/AnjalinSherwin',
  },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">
            Let's <span className="title-accent">work together</span>
          </h2>
          <p className="section-subtitle">
            Got a project in mind or just want to say hello? Feel free to reach
            out — I'd love to hear from you.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info reveal">
            <h3 className="contact__info-title">Get in touch</h3>
            <p className="contact__info-text">
              I'm currently open to new opportunities, collaborations, and
              freelance projects. Pick whichever channel works best for you.
            </p>

            <ul className="contact__list">
              {contactDetails.map((item) => (
                <li className="contact__item" key={item.label}>
                  <div className="contact__item-icon">{item.icon}</div>
                  <div>
                    <p className="contact__item-label">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="contact__item-value"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact__item-value">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form
            className="contact__form reveal"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me a little about your project or idea..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn--primary contact__submit">
              {submitted ? (
                <>
                  <FiCheckCircle aria-hidden="true" />
                  Message Sent
                </>
              ) : (
                <>
                  Send Message
                  <FiSend aria-hidden="true" />
                </>
              )}
            </button>

            {submitted && (
              <p className="contact__success">
                Thanks! Your message has been sent. I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
