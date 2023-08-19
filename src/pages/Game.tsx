import { useState, useEffect } from "react";

import { Display, GameHeader, GamePanel, TurnPanel } from "../components";
import { Board } from "../types";

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState<number>(1);
  const [timer, setTimer] = useState<number>(30);

  const initialBoard: Board = Array.from({ length: 7 }, () =>
    Array(7).fill(null)
  );

  const initialState = {
    board: initialBoard,
    currentPlayer: "red", // 'red' or 'yellow'
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer === 0) {
        setTimer(30);
        setCurrentPlayer((state) => (state === 1 ? 2 : 1));
        return;
      }
      setTimer((timer) => timer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);
  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-12">
      <GameHeader />
      <GamePanel />
      <Display />
      <TurnPanel currentPlayer={currentPlayer} timer={timer} />
      <div
        className={`w-full h-60 bg-${
          currentPlayer === 1 ? "dark-violet" : "yellow"
        } rounded-t-[60px] -mt-40`}
      ></div>
    </div>
  );
};

export default Game;
