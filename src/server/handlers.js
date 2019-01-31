const EXIT_GAME_REQUEST = 'socket/EXIT_GAME_REQUEST';
const GAME_CONNECTION_REQUEST = 'socket/GAME_CONNECTION_REQUEST';
const INPUT_REQUEST = 'socket/INPUT_REQUEST';
const START_GAME_REQUEST = 'socket/START_GAME_REQUEST';

const gameManager = require('./manager/GameManager');

const connectGame = (context, action) => {
  gameManager.connect(context, action);
};

const startGame = context => {
  gameManager.start(context);
};

const inputRequest = (context, action) => {
  gameManager.processInput(context, action);
};

const exitRequest = (context, action) => {
  gameManager.exit(context.client.id, action.payload);
};

module.exports = {
  [INPUT_REQUEST]: inputRequest,
  [EXIT_GAME_REQUEST]: exitRequest,
  [GAME_CONNECTION_REQUEST]: connectGame,
  [START_GAME_REQUEST]: startGame
};
