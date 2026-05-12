import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiGithub,
} from 'react-icons/fi'
import ContactForm from './ContactForm'
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

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
