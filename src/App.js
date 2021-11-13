import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import GamePanel from "./components/GamePanel/GamePanel";
import SelectPanel from "./components/SelectPanel/SelectPanel";

function App() {
  let [gameModes, setGameModes] = useState([]);
  let [selectedGameMode, setSelectedGameMode] = useState(null);
  let [startedGameMode, setStartedGameMode] = useState({
    mode: "",
    fields: null,
  });

  useEffect(() => {
    axios.get("http://demo1030918.mockable.io/").then((response) => {
      let data = [];
      for (let key in response.data) {
        data.push({
          mode: key.slice(0, key.indexOf("Mode")) + " mode",
          fields: response.data[key]["field"],
        });
      }
      setGameModes([...data]);
    });
  }, []);

  useEffect(() => {
    let blueDataCells = document.querySelectorAll(
      ".app-wrapper-body-game-panel__data-cell_active"
    );
    blueDataCells.forEach(cell => {
      cell.classList.remove("app-wrapper-body-game-panel__data-cell_active");
    });
  }, [startedGameMode]);

  const handleChange = e => {
    setSelectedGameMode(
      gameModes.find((gameMode) => gameMode.mode === e.value)
    );
  };

  const handleClick = () => {
    if (selectedGameMode) {
      setStartedGameMode(
        gameModes.find((gameMode) => gameMode.mode === selectedGameMode.mode)
      );
    }
  };

  return (
    <div className="App">
      <div className="app-wrapper">
        <header className="app-wrapper-header">Hover squares game</header>
        <div className="app-wrapper-body">
          <SelectPanel
            gameModes={gameModes}
            handleChange={handleChange}
            handleClick={handleClick}
          />
          <GamePanel size={startedGameMode.fields} />
        </div>
      </div>
    </div>
  );
}

export default App;
