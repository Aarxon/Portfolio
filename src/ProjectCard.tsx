import { useState } from 'react'
import ProjectModal from './ProjectModal'


type ProjectCardProps =
{
  title: string
  description: string
  details: string
  image: string
  modalImage: string
  build: string
  github: string
}

function ProjectCard({ title, description, details, image, build, github, modalImage }: ProjectCardProps)
{
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <article className="project-card">
  <button
    type="button"
    className="project-toggle"
    onClick={() => setIsOpen(true)}
    aria-expanded={isOpen}
  >
    <img src={image} alt={title} />

    <div className="project-info">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </button>

  {isOpen && (
  <ProjectModal
  title={title}
  description={description}
  modalImage={modalImage}
  details={details}
  build={build}
  github={github}
  onClose={() => setIsOpen(false)}
  />
)}

</article>
    
  )
}
export default ProjectCard