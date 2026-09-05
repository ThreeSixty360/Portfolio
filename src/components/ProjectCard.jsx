export default function ProjectCard({
  title,
  image,
  tech,
  description,
  github,
  demo,
}) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />

      <div className="project-content">
        <h3>{title}</h3>

        <div className="project-tech">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <p>{description}</p>

        <div className="project-links">
          <a href={github} target="_blank">GitHub</a>
          <a href={demo} target="_blank">Live Demo</a>
        </div>
      </div>
    </div>
  );
}