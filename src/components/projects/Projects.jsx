import "@/styles/layout/projects/Projects.scss";
import Filters from "./filters/Filters";
import Projects_list from "./Projects_list";

function projects({ arrayProjects, onChangeInputTech, selectedTech }) {
  let filteredProjects;

  if (selectedTech === "") {
    filteredProjects = arrayProjects;
  } else {
    filteredProjects = arrayProjects.filter(
      (project) => project.tech === selectedTech,
    );
  }

  const countText =
    filteredProjects.length === 1
      ? "1 proyecto"
      : `${filteredProjects.length} proyectos`;

  return (
    <>
      <Filters
        arrayProjects={arrayProjects}
        onChangeInputTech={onChangeInputTech}
        selectedTech={selectedTech}
      />
      <section>
        <p className="projectsCount" aria-live="polite">
          mostrando {countText}
        </p>
        <Projects_list filteredProjects={filteredProjects} />
      </section>
    </>
  );
}

export default projects;
