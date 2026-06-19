import "@/styles/layout/projects/filters/Filters.scss";
import FilterByTech from "./FilterByTech";

function Filters({ arrayProjects, onChangeInputTech, selectedTech }) {
  return (
    <div className="filters">
      <FilterByTech
        arrayProjects={arrayProjects}
        onChangeInputTech={onChangeInputTech}
        selectedTech={selectedTech}
      />
    </div>
  );
}

export default Filters;
