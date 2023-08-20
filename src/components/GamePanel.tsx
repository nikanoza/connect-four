import { PlayerOne, PlayerTwo } from "../svg";

type PropsType = {
  scores: [number, number];
};

const GamePanel: React.FC<PropsType> = ({ scores }) => {
  return (
    <div className="flex gap-5 mt-12">
      <div className="w-35 flex items-center bg-light shadow-panel-shadow rounded-3xl pt-[10px] pb-2">
        <div className="-ml-6">
          <PlayerOne />
        </div>
        <div className="ml-2">
          <h3 className="text-base text-night font-bold ">PLAYER 1</h3>
          <h3 className="text-[32px] text-night font-bold text-center">
            {scores[0]}
          </h3>
        </div>
      </div>
      <div className="w-35 flex justify-end items-center bg-light shadow-panel-shadow rounded-3xl pt-[10px] pb-2">
        <div className="mr-2">
          <h3 className="text-base text-night font-bold">PLAYER 1</h3>
          <h3 className="text-[32px] text-night font-bold text-center">
            {scores[1]}
          </h3>
        </div>
        <div className="-mr-6">
          <PlayerTwo />
        </div>
      </div>
    </div>
  );
};

export default GamePanel;
