import { FiMonitor, FiCpu } from 'react-icons/fi'
import './Passions.css'

const passions = [
  {
    icon: <FiMonitor aria-hidden="true" />,
    title: 'Modern Web Applications',
    description:
      'Creating modern and user-friendly web applications with thoughtful interfaces and smooth interactions.',
    tags: ['Web Apps', 'UI / UX', 'Performance'],
  },
  {
    icon: <FiCpu aria-hidden="true" />,
    title: 'Innovative Tech & IoT',
    description:
      'Exploring innovative technologies and IoT-based systems that connect software with real-world experiences.',
    tags: ['Emerging Tech', 'IoT', 'Curiosity'],
  },
]

const Passions = () => {
  return (
    <section id="passions" className="section passions">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Passions</span>
          <h2 className="section-title">
            What I love <span className="title-accent">building</span>
          </h2>
          <p className="section-subtitle">
            The areas I'm most excited about and continually exploring.
          </p>
        </div>

        <div className="passions__grid">
          {passions.map((item, index) => (
            <article
              className="passions__card reveal"
              key={item.title}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="passions__head">
                <span className="passions__icon">{item.icon}</span>
                <h3 className="passions__title">{item.title}</h3>
              </div>
              <p className="passions__desc">{item.description}</p>
              <ul className="passions__tags">
                {item.tags.map((tag) => (
                  <li className="chip" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Passions
