import Filters from "./filters/Filters";
import Projects_list from "./Projects_list";

function projects({ objetProjects, onChangeInpuntTech }) {
  const arrayProjects = Object.values(objetProjects);

  return (
    <>
      <Filters
        onChangeInpuntTech={onChangeInpuntTech}
        arrayProjects={arrayProjects}
      />
      <section>
        <Projects_list arrayProjects={arrayProjects} />
      </section>
    </>
  );
}

export default projects;
