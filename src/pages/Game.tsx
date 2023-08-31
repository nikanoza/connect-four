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
  const { state, handleColumnClick, switchTurn, restart, nextRound } =
    useGame();
  const [pause, setPause] = useState<boolean>(false);
  useEffect(() => {
    restart();
  }, []);

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
      className="w-full min-h-screen md:overflow-y-hidden flex flex-col items-center pt-12 md:pt-7 2xl:mt-14"
      tabIndex={0}
      onKeyDown={pauseHandler}
    >
      {pause ? (
        <Pause setPause={setPause} restart={restart} setTimer={setTimer} />
      ) : null}
      <GameHeader setPause={setPause} restart={restart} setTimer={setTimer} />
      <GamePanel scores={state.scores} />
      <Display
        handleColumnClick={handleColumnClick}
        state={state}
        setTimer={setTimer}
      />
      {state.winner ? (
        <div className="flex flex-col items-center bg-light border-2 border-solid border-night shadow-panel-shadow rounded-3xl px-20 py-4 z-20 -mt-5 md:-mt-10">
          <h3 className="text-night text-base font-bold">
            {state.winner === "red" ? "PLAYER 1" : "PLAYER 2"}
          </h3>
          <h1 className="text-6xl font-bold text-night">WINS</h1>
          <button
            className="px-5 py-2 rounded-[20px] bg-dark-violet 2xl:hover:bg-pink border-none text-light text-base font-bold"
            onClick={nextRound}
          >
            PLAY AGAIN
          </button>
        </div>
      ) : (
        <TurnPanel currentPlayer={state.currentPlayer} timer={timer} />
      )}
      <div
        className={`w-full h-60 bg-${
          state.winner === "red"
            ? "pink"
            : state.winner === "yellow"
            ? "yellow"
            : "dark-violet"
        } rounded-t-[60px] -mt-40 md:-mt-[197px] 2xl:-mt-[180px]`}
      ></div>
    </div>
  );
};

export default Game;
