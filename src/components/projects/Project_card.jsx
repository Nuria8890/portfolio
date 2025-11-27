import "@/styles/layout/projects/Project_card.scss";

function Project_card({ projectToRender }) {
  return (
    <a href={projectToRender.url} target="_blank" rel="noopener noreferrer">
      <li className="project">
        <p>
          <b>Título:</b> {projectToRender.title}
        </p>
        <img
          className="project__img"
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
      </li>
    </a>
  );
}

export default Project_card;
