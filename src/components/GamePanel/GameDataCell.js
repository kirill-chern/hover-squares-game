let GameDataCell = ({ toggleDataCellColor }) => {
  return (
    <div
      className="app-wrapper-body-game-panel__data-cell"
      onMouseOver={toggleDataCellColor}
    />
  );
};

export default GameDataCell;
