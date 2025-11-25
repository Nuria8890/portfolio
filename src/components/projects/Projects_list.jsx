import "@/styles/layout/projects/Projects_list.scss";
import Project_card from "./Project_card";

function Projects_list({ arrayProjects }) {
  console.log("arrayProjects es: ", arrayProjects);

  const projectsToRender = arrayProjects.map((project, i) => {
    return <Project_card key={i} projectToRender={project} />;
  });

  return <ul className="projects__container">{projectsToRender}</ul>;
}

export default Projects_list;
