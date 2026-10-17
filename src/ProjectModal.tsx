type ProjectModalProps =
{
  title: string
  description: string
  modalImage: string
  details: string
  build: string
  github: string
  screencast: string
  onClose: () => void
}

function ProjectModal({ title, details, modalImage, description, build, github, screencast, onClose }: ProjectModalProps)
{
  return (
    
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="modal-header">
            <h2>{title}</h2>
            <button type="button" onClick={onClose}>✕</button>
        </div>        

        <p>{description}</p>
        <img src={modalImage} alt={title} />

        <div className="modal-details">
            <div className="modal-about">
            <h3>About this project</h3>
            <p>{details}</p>
        
       </div>

        <div className="modal-technologies">
            <h3>Built with</h3>
            <p>{build}</p>
        </div>

        <div className="modal-links">
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={screencast} target="_blank" rel="noopener noreferrer">
            Screencast
            </a>

        </div>
    </div>

      </div>
    </div>
  )
}

export default ProjectModal