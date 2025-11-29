// import { CiHeart } from "react-icons/ci";

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
      </a>
    </li>
  );
}

export default Project_card;
