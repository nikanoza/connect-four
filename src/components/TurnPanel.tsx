import { TurnRed, TurnYellow } from "../svg";

type PropsType = {
  currentPlayer: number;
  timer: number;
};

const TurnPanel: React.FC<PropsType> = ({ currentPlayer, timer }) => {
  return (
    <div className="relative -mt-3">
      {currentPlayer == 1 ? <TurnRed /> : <TurnYellow />}
      <h3 className="text-light text-base font-bold absolute top-10 left-8">
        PLAYER {currentPlayer}’S TURN
      </h3>
      <h2 className="text-light text-6xl font-bold absolute top-16 left-1/2 -translate-x-1/2">
        {timer}s
      </h2>
    </div>
  );
};

export default TurnPanel;
