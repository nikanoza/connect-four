import { useState } from "react";
import { MarkerRed, MarkerYellow, RedSmall, YellowSmall } from "../svg";
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
  const [hoverState, setHoverState] = useState(32);

  const onMouseEnter = (index: number) => {
    const col_position = index % 7;
    const left = 20 + col_position * 12 + col_position * 64 + 12;
    setHoverState(left);
  };

  const array = [];
  array[48] = "";
  array.fill("x");
  return (
    <div className="relative px-2 pt-2 pb-8 md:px-5 md:pt-5 md:pb-14 grid grid-cols-7 gap-3 bg-light mt-12 rounded-2xl md:rounded-[40px] border-4 border-black shadow-panel-shadow">
      {state.currentPlayer === "red" ? (
        <div
          className={`absolute -top-10 ${state.winner ? "hidden" : "block"}`}
          style={{ left: hoverState + "px" }}
        >
          <MarkerRed />
        </div>
      ) : (
        <div
          className={`absolute -top-10 ${state.winner ? "hidden" : "block"}`}
          style={{ left: hoverState + "px" }}
        >
          <MarkerYellow />
        </div>
      )}
      {array.map((_, index) => {
        const col_position = Math.floor(index / 7);
        const row_position = index % 7;

        return (
          <div
            key={Math.random()}
            onMouseEnter={() => onMouseEnter(index)}
            className="relative"
          >
            {state.board[col_position][row_position] === "red" ? (
              <div>
                <div className="md:hidden">
                  <RedSmall />
                </div>
                <div className="hidden md:block scale-[2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <RedSmall />
                </div>
              </div>
            ) : state.board[col_position][row_position] === "yellow" ? (
              <div>
                <div className="md:hidden">
                  <YellowSmall />
                </div>
                <div className="hidden md:block scale-[2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <YellowSmall />
                </div>
              </div>
            ) : (
              <div
                onClick={() => {
                  setTimer(30);
                  handleColumnClick(index % 7);
                }}
                className="w-8.5 h-8.5 md:w-16 md:h-16 cursor-pointer rounded-full bg-dark-violet border-4 border-black shadow-circle-shadow"
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Display;
