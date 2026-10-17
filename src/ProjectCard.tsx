import { useState } from 'react'
import ProjectModal from './ProjectModal'


type ProjectCardProps = {
  title: string
  description: string
  image: string
  modalImage: string
}

function ProjectCard({ title, description, image, modalImage}: ProjectCardProps) 
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
    image={image}
    modalImage={modalImage}
    onClose={() => setIsOpen(false)}
  />
)}

</article>
    
  )
}
export default ProjectCard