function Project_card({ projectToRender }) {
  return (
    <li>
      <a
        href={projectToRender.url}
        target="_blank"
        rel="noopener noreferrer"
        className="projectsContainer__project"
      >
        <span>{projectToRender.title}</span>
        <img
          className="projectsContainer__project__img"
          src={projectToRender.photo}
          alt="imagen"
        />
        <span>
          Creado en{" "}
          {projectToRender.date.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
          })}
        </span>
        <p
          className="projectsContainer__project__text"
          dangerouslySetInnerHTML={{ __html: projectToRender.text }}
        ></p>
      </a>
    </li>
  );
}

export default Project_card;
