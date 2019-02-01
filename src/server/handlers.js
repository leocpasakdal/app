const { REQUEST } = require('../common/socketActions');
const gameManager = require('./manager/GameManager');

const connectGame = (context, action) => {
  gameManager.connect(context, action);
};

const requestStart = context => {
  gameManager.start(context);
};

const requestInput = (context, action) => {
  gameManager.processInput(context, action);
};

const exitRequest = (context, action) => {
  gameManager.exit(context.client.id, action.payload);
};

module.exports = {
  [REQUEST.INPUT]: requestInput,
  [REQUEST.EXIT]: exitRequest,
  [REQUEST.CONNECTION]: connectGame,
  [REQUEST.START]: requestStart
};
