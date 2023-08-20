export type Cell = "red" | "yellow" | null;
export type Board = Cell[][];

export type GameState = {
  board: Board;
  currentPlayer: Cell;
  scores: [number, number];
  winner: Cell | null;
};
