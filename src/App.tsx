import './App.css'
import ProjectCard from './ProjectCard'

function App() 
{

  const pixelA =
[
  0, 1, 1, 1, 0,
  1, 0, 0, 0, 1,
  1, 0, 0, 0, 1,
  1, 1, 1, 1, 1,
  1, 0, 0, 0, 1,
  1, 0, 0, 0, 1,
  1, 0, 0, 0, 1
]
  return (
    
    <>
      <header>
        <nav>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>
            Aaron
            <span>Tierney</span>
          </h1>

          <div className="hero-animation">
            <div className="pixel-a">
              {pixelA.map((pixel, index) => (
                <span
                  key={index}
                  className={pixel ? 'pixel on' : 'pixel off'}
                ></span>
              ))}
            </div>
          </div>
        </section>


    <section id="about">
      <div className="about-grid">
        <div className="about-left">
          <div className="about-profile">
             <p>PROFILE</p>
             <h3>Aaron Tierney</h3>
             <p>Software Development Student</p>
             <p>Based in Ireland</p>
          </div>

          <a
           href="/Aaron-Tierney-CV.pdf"
           target="_blank"
           rel="noopener noreferrer"
           className="cv-button"
          >
          View CV ↗
            </a>
        </div>

          

      <div className="about-content">
      <h2>About me.</h2>
      <p>
        I'm a software development student based in Ireland
        with a passion for technology, problem-solving,
        and building practical applications.
        I enjoy exploring new technologies, working on
        personal projects, and continuously improving my
        skills as a developer.
        I'm currently seeking opportunities to gain
        industry experience and further develop my
        skills in software engineering.
      </p>

    </div>

  </div>
    </section>

        <section id = "projects"> 
        <h2>Projects</h2>
        <div className="projects-grid">
          <ProjectCard
            title="GG-Fitness"
            description="A desktop application that helps manage gym operations."
            image="/projects/gg.png"
            modalImage="/projects/ggtwo.png"
            details="GG-Fitness is a desktop application designed to help manage gym members, trainers, and daily operations."
            build="Java, MySQL"
            github="https://github.com/Aarxon/GG-Fitness"
            screencast=""
          />

          <ProjectCard
            title="Website"
            description="This website!"
            image="A.png"
            modalImage=""
            details="."
            build=''
            github=""
            screencast=""
          />

  


        </div>
        </section>

      <section id="contact">
          <h2>Contact me</h2>
      <div className="contact-grid">
          <div className="contact-left">
          <h2>Let's work together.</h2>
          <p>
            I'm always open to discussing new opportunities,
            interesting projects, and collaborations.
         </p>
      </div>

        <div className="contact-right">
          <div className="contact-item">
            <h3>Email</h3>
              <a href="mailto:aarontierney11@gmail.com">
                 aarontierney11@gmail.com↗
              </a>
            <h3>GitHub</h3>
              <a href="https://github.com/Aarxon">
                 Aarxon↗
              </a>
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/aaron-tierneydev/n">
                 Aaron Tierney↗
              </a>
          </div>
        </div>
        </div>
      </section>

          
      </main>
    </>
  )
}

export default App