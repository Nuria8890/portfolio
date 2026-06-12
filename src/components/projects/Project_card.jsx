// import { CiHeart } from "react-icons/ci";

import { NavLink } from "react-router";

function Project_card({ projectToRender }) {
  return (
    <li>
      <NavLink
        className="projectsContainer__project"
        to={`/projects/${projectToRender.id}`}
        end
      >
        <span className="projectsContainer__project__title">
          {projectToRender.title}
        </span>
        <img
          className="projectsContainer__project__img"
          src={projectToRender.photo}
          alt={`Captura del proyecto ${projectToRender.title}`}
        />
        <span className="projectsContainer__project__date">
          {projectToRender.date.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
          })}
        </span>
        <div className="projectsContainer__project__text">
          <p
            dangerouslySetInnerHTML={{ __html: projectToRender.smallText }}
          ></p>
          {/* <span>
            <CiHeart />
          </span> */}
        </div>
      </NavLink>
    </li>
  );
}

export default Project_card;
