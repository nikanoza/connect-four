import { TurnRed, TurnYellow } from "../svg";
import { Cell } from "../types";

type PropsType = {
  currentPlayer: Cell;
  timer: number;
};

const TurnPanel: React.FC<PropsType> = ({ currentPlayer, timer }) => {
  return (
    <div className="relative -mt-3">
      {currentPlayer === "red" ? <TurnRed /> : <TurnYellow />}
      <h3 className="text-light text-base font-bold absolute top-10 left-8">
        PLAYER {currentPlayer === "red" ? 1 : 2}’S TURN
      </h3>
      <h2 className="text-light text-6xl font-bold absolute top-16 left-1/2 -translate-x-1/2">
        {timer}s
      </h2>
    </div>
  );
};

export default TurnPanel;
