const express = require('express');
const os = require('os');
const { createServer, createHandler } = require('redux-socket.io-connect');
const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) =>
  res.send({ username: os.userInfo().username })
);

const server = app.listen(process.env.PORT || 8080, () =>
  console.info('Listening on port 8080!')
);
const io = require('./socket').init(server);
const handlers = require('./handlers');

createServer(io, createHandler(handlers));
