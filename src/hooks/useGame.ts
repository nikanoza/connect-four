import { useState } from "react";
import { Board, Cell, GameState } from "../types";

const initialBoard: Board = Array.from({ length: 7 }, () =>
  Array(7).fill(null)
);

const initialState: GameState = {
  board: initialBoard,
  currentPlayer: "red",
  scores: [0, 0],
  winner: null,
};

const useGame = () => {
  const [state, setState] = useState<GameState>({ ...initialState });

  const switchPlayer = (currentPlayer: Cell): Cell => {
    return currentPlayer === "red" ? "yellow" : "red";
  };

  const checkWin = (board: Board, row: number, col: number): boolean => {
    const directions = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1],
    ];

    const currentPlayer = board[row][col];

    for (const [dx, dy] of directions) {
      let count = 1;

      for (let i = 1; i <= 3; i++) {
        const newRow = row + i * dx;
        const newCol = col + i * dy;

        if (
          newRow >= 0 &&
          newRow < 7 &&
          newCol >= 0 &&
          newCol < 7 &&
          board[newRow][newCol] === currentPlayer
        ) {
          count++;
        } else {
          break;
        }
      }

      for (let i = 1; i <= 3; i++) {
        const newRow = row - i * dx;
        const newCol = col - i * dy;

        if (
          newRow >= 0 &&
          newRow < 7 &&
          newCol >= 0 &&
          newCol < 7 &&
          board[newRow][newCol] === currentPlayer
        ) {
          count++;
        } else {
          break;
        }
      }

      if (count >= 4) {
        return true;
      }
    }

    return false;
  };

  const switchTurn = () => {
    setState({
      ...state,
      currentPlayer: switchPlayer(state.currentPlayer),
    });
  };

  const dropDisc = (
    board: Board,
    col: number,
    player: Cell
  ): [Board, number] => {
    const newBoard = [...board];
    let rowIndex = 0;

    for (let row = 6; row >= 0; row--) {
      if (!newBoard[row][col]) {
        newBoard[row][col] = player;
        rowIndex = row;
        break;
      }
    }

    return [newBoard, rowIndex];
  };

  const handleColumnClick = (col: number) => {
    if (state.winner || state.board[0][col] !== null) return;

    const [newBoard, row] = dropDisc(state.board, col, state.currentPlayer);

    if (checkWin(newBoard, row, col)) {
      const winningPlayer = state.currentPlayer;
      const newScores: [number, number] = [...state.scores];
      if (winningPlayer === "red") {
        newScores[0] += 1;
      } else if (winningPlayer === "yellow") {
        newScores[1] += 1;
      }

      setState({
        ...state,
        board: newBoard,
        winner: winningPlayer,
        scores: newScores,
      });
    } else {
      const newPlayer = switchPlayer(state.currentPlayer);
      setState({
        ...state,
        board: newBoard,
        currentPlayer: newPlayer,
      });
    }
  };

  const restart = () => {
    const board: Board = Array.from({ length: 7 }, () => Array(7).fill(null));

    const initial: GameState = {
      board: board,
      currentPlayer: "red",
      scores: [0, 0],
      winner: null,
    };
    setState(initial);
  };

  return { state, handleColumnClick, switchTurn, restart };
};

export default useGame;
