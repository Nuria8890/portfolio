import "@/styles/layout/projects/Projects_list.scss";
import Project_card from "./Project_card";

function Projects_list({ filteredProjects }) {
  const projectsSorted = filteredProjects
    .slice()
    .sort((a, b) => b.date - a.date);

  const projectsToRender = projectsSorted.map((project) => {
    return <Project_card key={project.id} projectToRender={project} />;
  });

  return <ul className="projectsContainer">{projectsToRender}</ul>;
}

export default Projects_list;
