import { useState } from 'react'

type ProjectCardProps = {
  title: string
  description: string
  image: string
  github: string
  screencast: string
}

function ProjectCard({ title, description, image, github, screencast }: ProjectCardProps) 
{
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <article className="project-card">
  <button
    type="button"
    className="project-toggle"
    onClick={() => setIsOpen(!isOpen)}
    aria-expanded={isOpen}
  >
    <img src={image} alt={title} />

    <div className="project-info">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </button>

  {isOpen && (
    <div className="project-links">
      <a href={github} target="_blank" rel="noopener noreferrer">
        GitHub ↗
      </a>
      <a href={screencast} target="_blank" rel="noopener noreferrer">
        Screencast ↗
      </a>
    </div>
  )}
</article>
    
  )
}
export default ProjectCard