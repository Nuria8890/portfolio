import { Link, useParams } from "react-router";
import "@/styles/layout/projects/Project_details.scss";

function Project_details({ arrayProjects }) {
  const { idProject } = useParams();

  const selectedProject = arrayProjects.find((project) => {
    return project.id === parseInt(idProject);
  });

  return (
    <section className="detailsContainer">
      <Link to={"/projects"}>
        <span className="detailsContainer__back">&lt; Volver</span>
      </Link>

      <a
        href={selectedProject.url}
        target="_blank"
        rel="noopener noreferrer"
        className="detailsContainer__img"
      >
        <img
          src={selectedProject.photo}
          alt={selectedProject.title}
          className="detailsContainer__img"
        />
      </a>

      <div className="detailsContainer__text">
        <h3>{selectedProject.title}</h3>
        <span>
          Proyecto realizado en{" "}
          {selectedProject.date.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
          })}
        </span>

        <p dangerouslySetInnerHTML={{ __html: selectedProject.longText }}></p>

        <div className="detailsContainer__text__ancles">
          <a
            href={selectedProject.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver demo
          </a>
          {selectedProject.urlCode === "" ? (
            <span className="tooltipWrapper">
              <span className="detailsContainer__text__ancles--disabled">
                Ver código
              </span>
              <span className="tooltip tooltip--top">
                El código de este proyecto es privado
              </span>
            </span>
          ) : (
            <a
              href={selectedProject.urlCode}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver código
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Project_details;
