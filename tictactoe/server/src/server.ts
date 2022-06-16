import { Server, Origins } from "boardgame.io/server";
import Game from "../../remote-multiplayer-lobby/src/Game";

export const server = Server({
  games: [Game],
  origins: [/.*/],
});

server.run(8000);
