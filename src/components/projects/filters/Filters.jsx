import ResetButton from "./ResetButton";
import FilterByTech from "./FilterByTech";

function Filters({ arrayProjects, onChangeInpuntTech }) {
  const HtmlProjects = arrayProjects.filter(
    (project) => project.tech === "HTML y CSS"
  );

  const JsProjects = arrayProjects.filter(
    (project) => project.tech === "JavaScript"
  );

  const FrameworksProjects = arrayProjects.filter(
    (project) =>
      project.tech !== "JavaScript" &&
      project.tech !== "HTML y CSS" &&
      project.tech !== "DB"
  );

  const DbProjects = arrayProjects.filter((project) => project.tech === "DB");
  return (
    <form className="filters">
      <ResetButton />

      <FilterByTech onChangeInpuntTech={onChangeInpuntTech} />
    </form>
  );
}

export default Filters;
