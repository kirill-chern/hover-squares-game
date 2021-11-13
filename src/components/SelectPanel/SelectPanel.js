import Select from "react-select";

const SelectPanel = ({ gameModes, handleChange, handleClick }) => {
  return (
    <div className="app-wrapper-body-select">
      <Select
        className="app-wrapper-body-select__input-mode"
        onChange={handleChange}
        placeholder="Pick mode"
        options={gameModes.map((item) => ({
          value: item.mode,
          label: item.mode.toUpperCase(),
        }))}
      />
      <button
        className="app-wrapper-body-select__start-button"
        onClick={handleClick}
      >
        Start
      </button>
    </div>
  );
};

export default SelectPanel;
