import Filters from "./filters/Filters";
import Projects_list from "./Projects_list";

function projects({
  objetProjects,
  onChangeInpuntTech,
  selectedTech,
  onClickReset,
}) {
  const arrayProjects = Object.values(objetProjects);

  let filteredProjects;

  if (selectedTech === "") {
    filteredProjects = arrayProjects;
  } else {
    filteredProjects = arrayProjects.filter(
      (project) => project.tech === selectedTech
    );
  }

  return (
    <>
      <Filters
        onChangeInpuntTech={onChangeInpuntTech}
        onClickReset={onClickReset}
        arrayProjects={arrayProjects}
        selectedTech={selectedTech}
      />
      <section>
        <Projects_list filteredProjects={filteredProjects} />
      </section>
    </>
  );
}

export default projects;
