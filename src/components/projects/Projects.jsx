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
  return (
    <>
      <Filters
        arrayProjects={arrayProjects}
        onChangeInputTech={onChangeInputTech}
        selectedTech={selectedTech}
      />
      <section>
        <Projects_list filteredProjects={filteredProjects} />
      </section>
    </>
  );
}

export default projects;
