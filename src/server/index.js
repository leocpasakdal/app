const express = require('express');
const path = require('path');
const { createServer, createHandler } = require('redux-socket.io-connect');
const app = express();

app.use(express.static('./dist'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../', 'dist', 'index.html'), function(
    err
  ) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () =>
  console.info(`Listening on port ${PORT}`)
);
const io = require('./socket').init(server);
const handlers = require('./handlers');

createServer(io, createHandler(handlers));
