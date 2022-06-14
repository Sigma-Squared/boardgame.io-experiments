import { Game } from "boardgame.io";
import { INVALID_MOVE } from "boardgame.io/core";

declare global {
  interface Array<T> {
    any: (
      predicate: (value: T, index: number, array: T[]) => unknown,
      thisArg?: any
    ) => boolean;
  }
}

Object.defineProperty(Array.prototype, "any", {
  value: Array.prototype.some,
});

export interface GameState {
  cells: (string | null)[];
}
export default {
  setup: () => ({
    cells: Array(9).fill(null),
  }),
  turn: {
    maxMoves: 1,
    minMoves: 1,
  },
  moves: {
    clickCell: (G, ctx, id: number) => {
      if (G.cells[id] != null) {
        return INVALID_MOVE;
      }
      G.cells[id] = ctx.currentPlayer;
      ctx.activePlayers;
    },
  },
  endIf: (G, ctx) => {
    if (isVictory(G.cells)) {
      return { winner: ctx.currentPlayer };
    }
    if (isDraw(G.cells)) {
      return { draw: true };
    }
  },
  ai: {
    enumerate: (G, ctx) => {
      return G.cells
        .map((value, index) => {
          return { args: [index], value };
        })
        .filter((e) => e.value === null)
        .map((e) => ({ move: "clickCell", args: e.args }));
    },
  },
} as Game<GameState>;

/*
  0 1 2
  3 4 5
  6 7 8
*/
const isVictory = (cells: GameState["cells"]) => {
  const winnablePositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winnablePositions.any((positions) => {
    const values = positions.map((pos) => cells[pos]);
    return values[0] !== null && values.every((e) => e == values[0]);
  });
};

const isDraw = (cells: GameState["cells"]) => {
  return cells.every((v) => v !== null);
};
