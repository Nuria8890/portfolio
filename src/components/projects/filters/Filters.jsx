import "@/styles/layout/projects/filters/Filters.scss";
import ResetButton from "./ResetButton";
import FilterByTech from "./FilterByTech";

function Filters({
  onChangeInputTech,
  onClickReset,
  arrayProjects,
  selectedTech,
}) {
  const allTechnologies = arrayProjects.map((technology) => {
    return technology.tech;
  });

  const technologies = allTechnologies.filter((valor, indice, self) => {
    return self.indexOf(valor) === indice;
  });

  return (
    <form className="filters">
      <FilterByTech
        onChangeInputTech={onChangeInputTech}
        technologies={technologies}
        selectedTech={selectedTech}
      />
      <ResetButton onClickReset={onClickReset} />
    </form>
  );
}

export default Filters;
