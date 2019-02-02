const { REQUEST } = require('../../common/socketActions');
const PlayerManager = require('../manager/PlayerManager');
const EntryManager = require('../manager/EntryManager');
const DispatchManager = require('../manager/DispatchManager');
const GameManager = require('../manager/GameManager');
const socket = require('../helpers/socket');

module.exports = () => {
  const dispatchManager = DispatchManager();
  const gameManager = GameManager({
    dispatchManager,
    entryManager: EntryManager(dispatchManager),
    playerManager: PlayerManager(dispatchManager)
  });

  socket.startSocketDisconnectionHandler(gameManager);

  const connect = (context, action) => {
    gameManager.connect(context, action);
  };

  const exit = (context, action) => {
    gameManager.exit(context.client.id, action.payload);
  };

  const input = (context, action) => {
    gameManager.processInput(context, action);
  };

  const start = context => {
    gameManager.start(context);
  };

  return {
    [REQUEST.CONNECTION]: connect,
    [REQUEST.EXIT]: exit,
    [REQUEST.INPUT]: input,
    [REQUEST.START]: start
  };
};
