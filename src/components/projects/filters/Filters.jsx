import ResetButton from "./ResetButton";
import FilterByTech from "./FilterByTech";

function Filters({ onChangeInpuntTech, onClickReset }) {
  return (
    <form className="filters">
      <ResetButton onClickReset={onClickReset} />

      <FilterByTech onChangeInpuntTech={onChangeInpuntTech} />
    </form>
  );
}

export default Filters;
