import { Link, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import notFoundImg from "@/assets/projectNotFound.png";
import "@/styles/layout/projects/Project_details.scss";

function Project_details({ arrayProjects }) {
  const { idProject } = useParams();

  const selectedProject = arrayProjects.find((project) => {
    return project.id === parseInt(idProject);
  });

  if (!selectedProject) {
    return (
      <section className="detailsContainer">
        <Link to={"/projects"} className="detailsContainer__back">
          <FaArrowLeft aria-hidden="true" />
          <span>Volver</span>
        </Link>

        <div className="detailsContainer__content">
          <img
            src={notFoundImg}
            alt="Proyecto no encontrado"
            className="detailsContainer__img detailsContainer__img__notFound"
          />

          <div className="detailsContainer__text">
            <p className="detailsContainer__notFound">
              El proyecto buscado no existe.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="detailsContainer">
      <Link to={"/projects"} className="detailsContainer__back">
        <FaArrowLeft aria-hidden="true" />
        <span>Volver</span>
      </Link>

      <div className="detailsContainer__content">
        <a
          href={selectedProject.url}
          target="_blank"
          rel="noopener noreferrer"
          className="detailsContainer__imgWrapper"
        >
          <img
            src={selectedProject.photo}
            alt={selectedProject.title}
            className="detailsContainer__img"
          />
        </a>

        <div className="detailsContainer__text">
          <h3 className="detailsContainer__title">{selectedProject.title}</h3>
          <span className="detailsContainer__tech">{selectedProject.tech}</span>
          <span className="detailsContainer__date">
            Proyecto realizado en{" "}
            {selectedProject.date.toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
            })}
          </span>

          <p
            className="detailsContainer__description"
            dangerouslySetInnerHTML={{ __html: selectedProject.longText }}
          ></p>

          <div className="detailsContainer__text__ancles">
            <a
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="detailsContainer__btn detailsContainer__btn--primary"
            >
              Ver demo
            </a>
            {selectedProject.urlCode === "" ? (
              <span className="tooltipWrapper">
                <span className="detailsContainer__btn detailsContainer__btn--secondary detailsContainer__btn--disabled">
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
                className="detailsContainer__btn detailsContainer__btn--secondary"
              >
                Ver código
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project_details;
