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
        {/* <a
        href={projectToRender.url}
        target="_blank"
        rel="noopener noreferrer"
        className="projectsContainer__project"
      > */}
        <span className="projectsContainer__project__title">
          {projectToRender.title}
        </span>
        <img
          className="projectsContainer__project__img"
          src={projectToRender.photo}
          alt="imagen"
        />
        <span className="projectsContainer__project__date">
          {projectToRender.date.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
          })}
        </span>
        <div className="projectsContainer__project__text">
          <p dangerouslySetInnerHTML={{ __html: projectToRender.text }}></p>
          {/* <span>
            <CiHeart />
          </span> */}
        </div>
      </NavLink>
      {/* </a> */}
    </li>
  );
}

export default Project_card;
