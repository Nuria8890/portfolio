function ResetButton({ onClickReset }) {
  const handleClickReset = (event) => {
    event.preventDefault();
    onClickReset();
  };
  return (
    <button className="filters__resetButton" onClick={handleClickReset}>
      Reset
    </button>
  );
}

export default ResetButton;
