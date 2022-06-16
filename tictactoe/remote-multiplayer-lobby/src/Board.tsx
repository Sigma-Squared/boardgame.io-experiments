import { GameState } from "./Game";
import { BoardProps } from "boardgame.io/react";
import { Ctx } from "boardgame.io";

const getWinner = (ctx: Ctx): string | null => {
  if (!ctx.gameover) return null;
  if (ctx.gameover.draw) return "Draw";
  return `Player ${ctx.gameover.winner} wins!`;
};

export default ({
  ctx,
  G,
  moves,
  playerID,
  isMultiplayer,
  credentials,
  matchData,
}: BoardProps<GameState>) => {
  const winner = getWinner(ctx);
  console.log(matchData, credentials, isMultiplayer);
  return (
    <main>
      <h1>
        boardgame.io ts for player{" "}
        {isMultiplayer
          ? playerID
          : matchData?.find((d) => d.id === +playerID!)?.name}
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplate: "repeat(3, 3rem) / repeat(3, 3rem)",
          gridGap: "0.3em",
        }}
      >
        {G.cells.map((cell, index) => (
          <button
            key={index}
            onClick={() => moves.clickCell(index)}
            disabled={playerID !== ctx.currentPlayer || cell !== null}
          >
            {cell}
          </button>
        ))}
      </div>

      {winner && <p>{winner}</p>}
    </main>
  );
};
