const { ERROR } = require('../helpers/language');

let io;

const init = httpServer => {
  io = require('socket.io')(httpServer);

  return io;
};

const getIOInstance = () => {
  if (io) {
    return io;
  }

  return undefined;
};

const startSocketDisconnectionHandler = gameManager => {
  const ioInstance = getIOInstance();

  if (ioInstance && gameManager) {
    ioInstance.on('connection', socket => {
      socket.on('disconnect', () => {
        gameManager.exit(socket.id, ERROR.PLAYER_LEFT_GAME);
      });
    });
  }
};

module.exports = {
  init,
  startSocketDisconnectionHandler
};
