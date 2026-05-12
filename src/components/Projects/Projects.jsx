import { FiExternalLink, FiGithub } from 'react-icons/fi'
import projectImg from '../../assets/project.jpg'
import './Projects.css'

const projects = [
  {
    title: 'Event Management System',
    subtitle: 'Frontend',
    description:
      'A responsive frontend web application designed for managing and exploring events online. The system allows users to browse upcoming events, view event details, and register through a clean and modern interface. The design focuses on responsiveness, accessibility, and smooth user experience across desktop and mobile devices.',
    image: projectImg,
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    demo: '#',
    source: 'https://github.com/AnjalinSherwin',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section section--alt projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title">
            Selected <span className="title-accent">work</span>
          </h2>
          <p className="section-subtitle">
            A look at projects where design, code, and user experience come
            together.
          </p>
        </div>

        <div className="projects__list">
          {projects.map((project) => (
            <article className="projects__card reveal" key={project.title}>
              <div className="projects__media">
                <span className="projects__media-badge">Featured</span>
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
              </div>

              <div className="projects__body">
                <span className="projects__tag-line">{project.subtitle}</span>
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__desc">{project.description}</p>

                <ul className="projects__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className="projects__actions">
                  <a
                    href={project.demo}
                    className="btn btn--primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                    <FiExternalLink aria-hidden="true" />
                  </a>
                  <a
                    href={project.source}
                    className="btn btn--outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub aria-hidden="true" />
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
