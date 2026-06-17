import { Link } from "react-router";

function Project_card({ projectToRender }) {
  const formattedDate = projectToRender.date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
  });

  return (
    <li className="projectCard">
      <Link
        className="projectCard__link"
        to={`/projects/${projectToRender.id}`}
        aria-label={`Ver detalle de ${projectToRender.title}`}
      >
        <div className="projectCard__media">
          <img
            className="projectCard__image"
            src={projectToRender.photo}
            alt={`Captura del proyecto ${projectToRender.title}`}
            loading="lazy"
          />
          <span className="projectCard__tag">{projectToRender.tech}</span>
        </div>

        <div className="projectCard__content">
          <h3 className="projectCard__title">{projectToRender.title}</h3>
          <time className="projectCard__date" dateTime={projectToRender.date.toISOString()}>
            {formattedDate}
          </time>
          <div
            className="projectCard__description"
            dangerouslySetInnerHTML={{ __html: projectToRender.smallText }}
          />
        </div>
      </Link>
    </li>
  );
}

export default Project_card;
