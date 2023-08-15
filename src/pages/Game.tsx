import { useState, useEffect } from "react";

import { Display, GameHeader, GamePanel, TurnPanel } from "../components";

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState<number>(1);
  const [timer, setTimer] = useState<number>(30);

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
    <div className="w-full min-h-screen flex flex-col items-center py-12">
      <GameHeader />
      <GamePanel />
      <Display />
      <TurnPanel currentPlayer={currentPlayer} timer={timer} />
    </div>
  );
};

export default Game;
