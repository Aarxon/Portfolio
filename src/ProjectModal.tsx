type ProjectModalProps =
{
  title: string
  image: string
  modalImage: string
  description: string
  onClose: () => void
}

function ProjectModal({ title, image, modalImage, description, onClose }: ProjectModalProps)
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
            <p>
            This section will explain what the project does,
            why I built it, and the main features I implemented.
            </p>
        </div>

        <div className="modal-technologies">
            <h3>Built with</h3>
            <p>Java, JavaFX, SQL</p>
        </div>
    </div>

      </div>
    </div>
  )
}

export default ProjectModal