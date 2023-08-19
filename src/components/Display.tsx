import { RedSmall, YellowSmall } from "../svg";
import { GameState } from "../types";

type PropsType = {
  state: GameState;
  handleColumnClick: (col: number) => void;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
};

const Display: React.FC<PropsType> = ({
  state,
  handleColumnClick,
  setTimer,
}) => {
  const array = [];
  array[48] = "";
  array.fill("x");
  return (
    <div className="relative px-2 pt-2 pb-8 grid grid-cols-7 gap-3 bg-light mt-12 rounded-2xl border-4 border-black shadow-panel-shadow">
      {array.map((_, index) => {
        const col_position = Math.floor(index / 7);
        const row_position = index % 7;

        return (
          <div key={Math.random()}>
            {state.board[col_position][row_position] === "red" ? (
              <RedSmall />
            ) : state.board[col_position][row_position] === "yellow" ? (
              <YellowSmall />
            ) : (
              <div
                onClick={() => {
                  setTimer(30);
                  handleColumnClick(index % 7);
                }}
                className="w-8.5 h-8.5 rounded-full bg-dark-violet border-4 border-black shadow-circle-shadow"
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Display;
