import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';
import game from './Game';
import board from './Board';

import './App.css';

const GameClient = Client({
    game, board,
    multiplayer: SocketIO({ server: 'http://localhost:8000' })
});
export default () => <><GameClient playerID="0" /><GameClient playerID="1" /></>;
