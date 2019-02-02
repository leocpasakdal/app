const { REQUEST } = require('../common/socketActions');
const gameManager = require('./manager/GameManager');

const connect = (context, action) => {
  gameManager.connect(context, action);
};

const exit = (context, action) => {
  gameManager.exit(context.client.id, action.payload);
};

const input = (context, action) => {
  gameManager.getInput(context, action);
};

const start = context => {
  gameManager.start(context);
};

module.exports = {
  [REQUEST.CONNECTION]: connect,
  [REQUEST.EXIT]: exit,
  [REQUEST.INPUT]: input,
  [REQUEST.START]: start
};
