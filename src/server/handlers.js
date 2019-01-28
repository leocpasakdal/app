const GAME_CONNECTION_REQUEST = 'socket/GAME_CONNECTION_REQUEST';
const START_GAME_REQUEST = 'socket/START_GAME_REQUEST';
const INPUT_REQUEST = 'socket/INPUT_REQUEST';

const gameManager = require('./manager/GameManager');

const connectGame = (context, action) => {
  console.info('connecting to game...');
  gameManager.connect(context, action);
};

const startGame = context => {
  console.info('request to start the game...');
  gameManager.start(context);
};

const inputRequest = (context, action) => {
  console.info('input received from client');
  gameManager.processInput(context, action);
};

module.exports = {
  [INPUT_REQUEST]: inputRequest,
  [GAME_CONNECTION_REQUEST]: connectGame,
  [START_GAME_REQUEST]: startGame
};
