import { Server, Origins } from 'boardgame.io/server';
import Game from './Game'

export const server = Server({
    games: [Game],
    origins: [Origins.LOCALHOST],
});

server.run(8000);