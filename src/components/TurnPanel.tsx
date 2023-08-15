import { TurnRed } from "../svg";

const TurnPanel = () => {
  return (
    <div className="relative -mt-3">
      <TurnRed />
      <h3 className="text-light text-base font-bold absolute top-10 left-8">
        PLAYER 1’S TURN
      </h3>
      <h2 className="text-light text-6xl font-bold absolute top-16 left-14">
        15s
      </h2>
    </div>
  );
};

export default TurnPanel;
