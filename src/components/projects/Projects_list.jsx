import "@/styles/layout/projects/Projects_list.scss";
import Project_card from "./Project_card";

function Projects_list({ objetProjects }) {
  const projectsArray = Object.values(objetProjects);

  const projectsElement = projectsArray.map((project, i) => {
    return <Project_card key={i} projectToRender={project} />;
  });
  return <ul className="projects__container">{projectsElement}</ul>;
}

export default Projects_list;
