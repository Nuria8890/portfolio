function ResetButton({ onClickReset }) {
  const handleClickReset = (event) => {
    event.preventDefault();
    onClickReset();
  };
  return <button onClick={handleClickReset}>Reset</button>;
}

export default ResetButton;
