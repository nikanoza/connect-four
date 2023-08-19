import { useState } from "react";
import { Board, Cell, GameState } from "../types";

const useGame = () => {
  const initialBoard: Board = Array.from({ length: 7 }, () =>
    Array(7).fill(null)
  );

  const initialState: GameState = {
    board: initialBoard,
    currentPlayer: "red",
    winner: null,
  };

  const [state, setState] = useState<GameState>(initialState);

  const switchPlayer = (currentPlayer: Cell): Cell => {
    return currentPlayer === "red" ? "yellow" : "red";
  };

  const dropDisc = (board: Board, col: number, player: Cell): Board => {
    const newBoard = [...board];

    for (let row = 6; row >= 0; row--) {
      if (!newBoard[row][col]) {
        newBoard[row][col] = player;
        break;
      }
    }

    return newBoard;
  };

  const handleColumnClick = (col: number) => {
    if (state.winner || !state.board[0][col]) return;

    const newBoard = dropDisc(state.board, col, state.currentPlayer);

    setState({
      ...state,
      board: newBoard,
      currentPlayer: switchPlayer(state.currentPlayer),
    });
  };

  return {};
};

export default useGame;
