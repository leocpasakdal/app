import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import redux from './redux';
import App from './App';
import './scss/_main.scss';
import io from 'socket.io-client';
import { createClient } from 'redux-socket.io-connect';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const client = createClient(io('http://localhost:8080'));
const store = createStore(redux, composeEnhancers(client));

const main = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(main, document.getElementById('root'));
