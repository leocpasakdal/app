import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import redux from './redux';
import App from './App';
import './scss/_main.scss';
import io from 'socket.io-client';
// import socketMiddleware from './redux/middleware/socket';
// import socketIO from 'socket.io-redux';
import { createClient } from 'redux-socket.io-connect';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const client = createClient(io('http://localhost:8080'));
const store = createStore(
  redux,
  composeEnhancers(
    client
    // applyMiddleware(thunk)
  )
);

const main = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(main, document.getElementById('root'));
