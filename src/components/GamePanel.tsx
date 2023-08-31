import { PlayerOne, PlayerTwo } from "../svg";

type PropsType = {
  scores: [number, number];
};

const GamePanel: React.FC<PropsType> = ({ scores }) => {
  return (
    <div className="flex gap-5 mt-12 md:mt-8 2xl:mt-0 2xl:h-0 relative">
      <div className="w-35 flex 2xl:flex-col items-center bg-light shadow-panel-shadow rounded-3xl pt-[10px] pb-2 md:w-fit md:pt-3 md:pb-4 md:pr-5 2xl:px-10 2xl:pt-0 2xl:absolute 2xl:top-[280px] 2xl:-left-[500px]">
        <div className="-ml-6 2xl:ml-0 2xl:-mt-6">
          <PlayerOne />
        </div>
        <div className="ml-2 md:ml-4 2xl:ml-0 2xl:mt-4 md:flex 2xl:flex-col items-center gap-5 2xl:gap-0">
          <h3 className="text-base md:text-xl text-night font-bold ">
            PLAYER 1
          </h3>
          <h3 className="text-[32px] md:text-6xl text-night font-bold text-center">
            {scores[0]}
          </h3>
        </div>
      </div>
      <div className="w-35 flex 2xl:flex-col-reverse justify-end items-center bg-light shadow-panel-shadow rounded-3xl pt-[10px] pb-2 md:w-fit md:pt-3 md:pb-4 md:pl-5 2xl:px-10 2xl:pt-0 2xl:absolute 2xl:top-[280px] 2xl:left-[350px]">
        <div className="mr-2 md:mr-4 2xl:mr-0 2xl:mt-4 md:flex 2xl:flex-col items-center gap-5 2xl:gap-0 flex-row-reverse">
          <h3 className="text-base md:text-xl whitespace-nowrap text-night font-bold">
            PLAYER 2
          </h3>
          <h3 className="text-[32px] md:text-6xl text-night font-bold text-center">
            {scores[1]}
          </h3>
        </div>
        <div className="-mr-6 2xl:mr-0 2xl:-mt-6">
          <PlayerTwo />
        </div>
      </div>
    </div>
  );
};

export default GamePanel;
