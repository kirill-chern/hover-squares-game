import GameRow from "./GameRow";

const GamePanel = ({ size }) => {
  let rows;
  if (size > 0) {
    rows = new Array(size).fill(null);
  } else rows = new Array(0);

  let toggleDataCellColor = (event) => {
    event.target.classList.toggle(
      "app-wrapper-body-game-panel__data-cell_active"
    );
  };

  return (
    <div className="app-wrapper-body-game-panel">
      {rows.map((item, index) => (
        <GameRow
          size={size}
          toggleDataCellColor={toggleDataCellColor}
          key={index}
        />
      ))}
    </div>
  );
};

export default GamePanel;
