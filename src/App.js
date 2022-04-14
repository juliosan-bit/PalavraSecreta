//estilo
import "./App.css";

//data
import { wordsList } from "./Data/words";

//Components
import StartScreen from "./Components/StartScreen";
import Game from "./Components/Game/index";
import GameOver from "./Components/GameOver/index";

//React
import { useCallback, useEffect, useState } from "react";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  // função que estarta o Game passada como prop para o componente GAME
  const startGame = () => {
    setGameStage(stages[1].name);
  };

  //função que sorteia a letra do input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  //função que reinicia o GAME
  const retry = () =>{
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
