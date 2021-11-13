import GameDataCell from "./GameDataCell";

let GameRow = ({ size, toggleDataCellColor }) => {
  let cells;

  if (size > 0) {
    cells = new Array(size).fill(null);
  } else cells = new Array(0);

  return (
    <div className="app-wrapper-body-game-panel__row">
      {cells.map((item, index) => (
        <GameDataCell toggleDataCellColor={toggleDataCellColor} key={index} />
      ))}
    </div>
  );
};

export default GameRow;
