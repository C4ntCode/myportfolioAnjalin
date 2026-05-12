import './About.css'

const highlights = [
  { value: '5+', label: 'Frontend skills' },
  { value: '100%', label: 'Responsive focus' },
  { value: 'Team', label: 'Player & learner' },
]

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">About</span>
          <h2 className="section-title">
            A short intro about <span className="title-accent">me</span>
          </h2>
        </div>

        <div className="about__content reveal">
          <p className="about__text about__lead">
            Hello! I'm an experienced Information Technology professional with a
            strong passion for frontend development and user-centered design. I
            enjoy creating responsive, visually appealing, and functional web
            interfaces that provide smooth user experiences. My experience
            includes developing system interfaces using modern web technologies
            such as HTML, CSS, Bootstrap, JavaScript, and PHP-based platforms.
          </p>
          <p className="about__text">
            I am highly motivated to continuously improve my technical skills,
            explore new technologies, and build projects that solve real-world
            problems. I value creativity, adaptability, and teamwork, and I aim
            to become a developer who creates systems that are both efficient
            and impactful.
          </p>

          <div className="about__highlights">
            {highlights.map((h) => (
              <div className="about__highlight" key={h.label}>
                <span className="about__highlight-value">{h.value}</span>
                <span className="about__highlight-label">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
