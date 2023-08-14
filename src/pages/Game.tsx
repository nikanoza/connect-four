import { Display, GameHeader, GamePanel, TurnPanel } from "../components";

const Game = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-12">
      <GameHeader />
      <GamePanel />
      <Display />
      <TurnPanel />
    </div>
  );
};

export default Game;
