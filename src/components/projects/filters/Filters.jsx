import ResetButton from "./ResetButton";
import FilterByTech from "./FilterByTech";

function Filters({ onChangeInpuntTech }) {
  return (
    <form className="filters">
      <ResetButton />

      <FilterByTech onChangeInpuntTech={onChangeInpuntTech} />
    </form>
  );
}

export default Filters;
