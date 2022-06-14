import { Client } from 'boardgame.io/react';
import { Local } from 'boardgame.io/multiplayer';
import game from './Game';
import board from './Board';

import './App.css';

const GameClient = Client({ game, board, multiplayer: Local() });
export default () => (<><GameClient playerID='0' /><GameClient playerID='1' /></>);
