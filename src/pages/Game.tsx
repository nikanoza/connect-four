import { useState, useEffect } from "react";

import {
  Display,
  GameHeader,
  GamePanel,
  Pause,
  TurnPanel,
} from "../components";
import { useGame } from "../hooks";

const Game = () => {
  const [timer, setTimer] = useState<number>(30);
  const { state, handleColumnClick, switchTurn, restart } = useGame();
  const [pause, setPause] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer === 0) {
        setTimer(30);
        switchTurn();
        return;
      }
      if (!state.winner && !pause) {
        setTimer((timer) => timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, switchTurn]);

  const pauseHandler: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    console.log(event.key);
    if (event.key === "p") {
      setPause(!pause);
    }
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center pt-12"
      tabIndex={0}
      onKeyDown={pauseHandler}
    >
      {pause ? (
        <Pause setPause={setPause} restart={restart} setTimer={setTimer} />
      ) : null}
      <GameHeader />
      <GamePanel scores={state.scores} />
      <Display
        handleColumnClick={handleColumnClick}
        state={state}
        setTimer={setTimer}
      />
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
