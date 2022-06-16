import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";
import game from "./Game";
import board from "./Board";

import "./App.css";

import { Lobby } from "boardgame.io/react";
import { LobbyClient } from "boardgame.io/client";

const lobbyClient = new LobbyClient({ server: "http://192.168.0.240:8000" });
const games = await lobbyClient.listGames();
console.log(games);

export default () => (
  <Lobby
    gameServer={"http://192.168.0.240:8000"}
    lobbyServer={"http://192.168.0.240:8000"}
    gameComponents={[{ game, board }]}
    debug={true}
  />
);
