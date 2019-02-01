import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '#/redux/reducers';
import App from './App';
import './scss/_main.scss';
import io from 'socket.io-client';
import { createClient } from 'redux-socket.io-connect';
import socketMiddleware from '#/redux/middleware/socket';

const middleware = [socketMiddleware];

console.log(__BASE_URL__);
console.log(__PORT__);

const tools = [];
const client = createClient(io('http://localhost:8080'));

if (process.env.NODE_ENV === 'development') {
  const devToolsExtensionExists =
    typeof window === 'object' &&
    typeof window.devToolsExtension === 'function';

  if (devToolsExtensionExists) {
    tools.push(window.devToolsExtension());
  }
}

const finalCreateStore = compose(
  client,
  applyMiddleware(...middleware),
  ...tools
)(createStore);

const store = finalCreateStore(rootReducer);

const main = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(main, document.getElementById('root'));
