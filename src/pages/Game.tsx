import { Display, GameHeader, GamePanel } from "../components";

const Game = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-12">
      <GameHeader />
      <GamePanel />
      <Display />
    </div>
  );
};

export default Game;
