import './App.css'
import ProjectCard from './ProjectCard'

function App() 
{
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
        <h1>Aaron Tierney</h1>

        <section id = "about"> 
        <h2>About me</h2>
        <p>
          I'm a software development student based in Ireland with a passion for technology, problem-solving, and building practical applications.
          I enjoy exploring new technologies, working on personal projects, and continuously improving my skills as a developer.
          I'm currently seeking opportunities to gain industry experience and further develop my skills in software engineering.
        </p>
        </section>

        <section id = "projects"> 
        <h2>Projects</h2>
        <div className="projects-grid">
          <ProjectCard
            title="GG-Fitness"
            description="A desktop application that helps manage gym operations."
            image="/projects/gg.png"
            modalImage="/projects/ggtwo.png"
          />

          <ProjectCard
            title="Website"
            description="This website!"
            image="A.png"
            modalImage=""
          />

          <ProjectCard
            title="Text-Based RPG! "
            description="Text-Based RPG, written in 68k assembly"
            image="A.png"
            modalImage=""
          />


        </div>
        </section>

        <section id = "contact"> 
        <h2>Contact me</h2>
        </section>

          
      </main>
    </>
  )
}

export default App