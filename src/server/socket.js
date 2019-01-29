let io;

const gameManager = require('./manager/GameManager');

const startSocketDisconnectionHandler = IOInstance => {
  IOInstance.on('connection', socket => {
    socket.on('disconnect', () => {
      gameManager.exit(socket.id, 'Someone left the game');
    });
  });
};

const init = httpServer => {
  io = require('socket.io')(httpServer);

  startSocketDisconnectionHandler(io);

  return io;
};

const getIO = () => {
  if (!io) {
    throw new Error('Socket.io not inititialized');
  }

  return io;
};

module.exports = {
  init,
  getIO
};
