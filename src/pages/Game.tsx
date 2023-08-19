import { useState, useEffect } from "react";

import { Display, GameHeader, GamePanel, TurnPanel } from "../components";
import { useGame } from "../hooks";

const Game = () => {
  const [timer, setTimer] = useState<number>(30);
  const { state, handleColumnClick, switchTurn } = useGame();

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer === 0) {
        setTimer(30);
        switchTurn();
        return;
      }
      setTimer((timer) => timer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, switchTurn]);
  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-12">
      <GameHeader />
      <GamePanel />
      <Display />
      <TurnPanel currentPlayer={state.currentPlayer} timer={timer} />
      <div
        className={`w-full h-60 bg-${
          state.currentPlayer === "red" ? "dark-violet" : "yellow"
        } rounded-t-[60px] -mt-40`}
      ></div>
    </div>
  );
};

export default Game;
