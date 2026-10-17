type ProjectCardProps = {
  title: string
  description: string
  image: string
}

function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <article className="project-card">
      <img src={image} alt={title} />

      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}
export default ProjectCard