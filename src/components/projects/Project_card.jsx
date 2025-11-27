function Project_card({ projectToRender }) {
  return (
    <a href={projectToRender.url} target="_blank" rel="noopener noreferrer">
      <li className="projectsContainer__project">
        <p>
          <b>Título:</b> {projectToRender.title}
        </p>
        <img
          className="projectsContainer__project__img"
          src={projectToRender.photo}
          alt="imagen"
        />
        <p>
          <b>Fecha:</b>{" "}
          {projectToRender.date.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
          })}
        </p>
        <p
          className="projectsContainer__project__text"
          dangerouslySetInnerHTML={{ __html: projectToRender.text }}
        ></p>
      </li>
    </a>
  );
}

export default Project_card;
