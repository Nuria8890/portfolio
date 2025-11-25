import ResetButton from "./ResetButton";
import FilterByTech from "./FilterByTech";

function Filters() {
  return (
    <form className="filters">
      <ResetButton />

      <FilterByTech />
    </form>
  );
}

export default Filters;
