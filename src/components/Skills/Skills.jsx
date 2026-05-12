import {
  FiCode,
  FiLayout,
  FiPenTool,
  FiCpu,
} from 'react-icons/fi'
import './Skills.css'

const stackGroups = [
  {
    icon: <FiCode aria-hidden="true" />,
    title: 'Frontend',
    description:
      'Core skills for building structured, modern, and maintainable web interfaces.',
    items: [
      'Frontend Web Development',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Bootstrap',
    ],
  },
  {
    icon: <FiLayout aria-hidden="true" />,
    title: 'Design & UX',
    description:
      'Crafting clean layouts that feel intuitive, accessible, and elegant.',
    items: ['Responsive UI/UX Design', 'Mobile-First Layouts', 'Accessibility'],
  },
  {
    icon: <FiPenTool aria-hidden="true" />,
    title: 'Interaction',
    description:
      'Adding life to interfaces through JavaScript-powered behaviors.',
    items: ['JavaScript', 'Interactive Interfaces', 'DOM & Events'],
  },
  {
    icon: <FiCpu aria-hidden="true" />,
    title: 'Practice',
    description:
      'How I work — methodical, curious, and always improving.',
    items: ['Problem Solving', 'Debugging', 'Continuous Learning'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="section section--alt skills">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Skills</span>
          <h2 className="section-title">
            My tech <span className="title-accent">stack</span>
          </h2>
          <p className="section-subtitle">
            The tools and skills I use to build clean, responsive, and
            user-friendly web experiences.
          </p>
        </div>

        <div className="skills__grid">
          {stackGroups.map((group, index) => (
            <article
              className="skills__group reveal"
              key={group.title}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="skills__group-head">
                <span className="skills__group-icon">{group.icon}</span>
                <div>
                  <h3 className="skills__group-title">{group.title}</h3>
                  <p className="skills__group-desc">{group.description}</p>
                </div>
              </div>
              <ul className="skills__chips">
                {group.items.map((item) => (
                  <li className="chip" key={item}>
                    {item}
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

export default Skills
