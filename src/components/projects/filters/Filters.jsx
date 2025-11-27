import ResetButton from "./ResetButton";
import FilterByTech from "./FilterByTech";

function Filters({ onChangeInpuntTech, onClickReset }) {
  return (
    <form className="filters">
      <FilterByTech onChangeInpuntTech={onChangeInpuntTech} />
      <ResetButton onClickReset={onClickReset} />
    </form>
  );
}

export default Filters;
