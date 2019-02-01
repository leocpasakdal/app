const { RESPONSE } = require('../../common/socketActions');

const LIMIT = 1000;
const DIVISOR = 3;
const ACCEPTED_INPUTS = [-1, 0, 1];

const clients = new Map();

let entries = [];
let currentResultNumber = 0;

const getLastConnectedClient = () => Array.from(clients.values()).pop();

const isLastConnectedClient = context => {
  const lastClient = getLastConnectedClient();

  return context.client.id === lastClient.get('context').client.id;
};

const getRandomNumber = () => Math.ceil(Math.random() * LIMIT) + 1;

const removePlayer = id => {
  clients.delete(id);
};

const addPlayer = (context, action) => {
  const {
    client: { id }
  } = context;

  const {
    payload: { teamName, avatarId }
  } = action;

  const player = new Map();

  player.set('context', context);
  player.set('id', id);
  player.set('teamName', teamName);
  player.set('avatarId', avatarId);
  player.set('turn', false);

  clients.set(id, player);
};

const isGameInProgress = () => clients.size === 2;

const dispatchResultNumber = context => {
  const { dispatch } = context;

  if (isLastConnectedClient(context) && isGameInProgress()) {
    console.info('dispatching starting number to last connected client');
    updateCurrentResultNumber(getRandomNumber());
    dispatch({
      type: RESPONSE.RESULT,
      payload: currentResultNumber
    });

    getClient(getClientId(context)).set('turn', true);

    return;
  }

  console.info(
    'prevent dispatiching starting number for not last connected client'
  );
};

const dispatchCurrentEntries = dispatch => {
  dispatch({
    type: RESPONSE.ENTRIES,
    payload: entries
  });
};

const dispatchClientTurn = ({ dispatch, payload }) =>
  dispatch({
    type: RESPONSE.TURN,
    payload
  });

const dispatchConnectionStatus = ({ dispatch, payload }) =>
  dispatch({
    type: RESPONSE.CONNECTION,
    payload
  });

const dispatchClientError = ({ dispatch, payload }) =>
  dispatch({
    type: RESPONSE.ERROR,
    payload
  });

const dispatchGameIsFullActions = context => {
  const { dispatch } = context;

  dispatchClientError({
    dispatch,
    payload: 'Game in progress'
  });

  console.info('dispatching game in progress');

  dispatchConnectionStatus({
    dispatch,
    payload: {
      connected: false,
      id: context.client.id
    }
  });

  console.info('dispatching game connected to false');
};

const resetEntries = () => {
  entries = [];
};

const dispatchStartGame = ({ dispatch, payload }) =>
  dispatch({
    type: RESPONSE.START,
    payload: payload
  });

const startGame = context => {
  const { dispatch, dispatchAll } = context;

  if (!isGameInProgress()) {
    return;
  }

  resetEntries();

  dispatchCurrentEntries(dispatchAll);
  dispatchStartGame({ dispatch: dispatchAll, payload: true });

  dispatchClientTurn({
    dispatch,
    payload: true
  });
};

const connectSuccessfulUser = (context, action) => {
  const { dispatch } = context;

  console.info('connection available');

  addPlayer(context, action);

  console.info('add new client');

  dispatchConnectionStatus({
    dispatch,
    payload: {
      connected: true,
      id: context.client.id
    }
  });

  console.info('dispatching game connected to true');
};

const getClientId = context => context.client.id;

const getClient = id => clients.get(id);

const isClientValid = id => !!getClient(id);

const start = context => {
  if (!isClientValid(getClientId(context))) {
    dispatchClientError({
      dispatch: context.dispatch,
      payload: 'invalid client'
    });

    return;
  }

  dispatchResultNumber(context);
  startGame(context);
};

const connect = (context, action) => {
  if (isGameInProgress()) {
    dispatchGameIsFullActions(context);

    return;
  }

  connectSuccessfulUser(context, action);
};

const updateCurrentResultNumber = result => {
  currentResultNumber = result;
};

const getComputedResult = input =>
  Math.round((input + currentResultNumber) / DIVISOR);

const isResultValid = input => !!getComputedResult(input);

const isInputValid = input =>
  ACCEPTED_INPUTS.includes(input) && isResultValid(input);

const isClientTurn = context => {
  const client = getClient(getClientId(context));

  if (!client) {
    return false;
  }

  return client.get('turn');
};

const getComputation = move =>
  '[(' +
  move +
  ') + ' +
  currentResultNumber +
  ' / ' +
  3 +
  '] = ' +
  getComputedResult(move);

const setClientsTurn = selectedClient => {
  // refactor this!!
  const values = Array.from(clients.values());
  const selectedId = selectedClient.get('id');
  const foundClient = values.find(client => client.get('id') !== selectedId);
  const next = clients.get(foundClient.get('id'));

  next.set('turn', true);
  selectedClient.set('turn', false);
};

const dispatchTurnToClients = forceOff => {
  for (let entry of clients.entries()) {
    dispatchClientTurn({
      dispatch: entry[1].get('context').dispatch,
      payload: forceOff ? false : entry[1].get('turn')
    });
  }
};

const addItemToEntries = ({ client, payload }) => {
  entries.push({
    id: client.get('id'),
    teamName: client.get('teamName'),
    avatarId: client.get('avatarId'),
    move: payload,
    computation: getComputation(payload),
    result: getComputedResult(payload),
    type: 'playerMove'
  });
};

const dispatchGameFinish = ({ dispatch, payload }) =>
  dispatch({
    type: RESPONSE.FINISH,
    payload: { result: payload, finish: true }
  });

const dispatchGameResult = ({ context, result }) => {
  const currentClientId = context.client.id;
  const shouldGameFinish = result === 1;

  if (shouldGameFinish) {
    clients.forEach((current, id) => {
      dispatchGameFinish({
        dispatch: current.get('context').dispatch,
        payload: currentClientId === id
      });
    });
  }

  dispatchTurnToClients(shouldGameFinish);
};

const dispatchExitGame = ({ dispatch, payload }) => {
  dispatch({
    type: RESPONSE.EXIT
  });

  dispatchClientError({
    dispatch,
    payload: payload
  });

  clients.clear();
};

const processInput = (context, action) => {
  const { payload } = action;

  const { dispatch, dispatchAll } = context;

  if (!isGameInProgress()) {
    dispatchExitGame({
      dispatch: dispatchAll,
      payload: 'Other player left the game'
    });
  }

  if (!isInputValid(payload)) {
    dispatchClientError({
      dispatch: context.dispatch,
      payload: 'invalid input'
    });

    return;
  }

  if (!isClientTurn(context)) {
    dispatchClientError({
      dispatch,
      payload: 'not your turn yet'
    });

    return;
  }

  const client = getClient(getClientId(context));
  const result = getComputedResult(payload);

  addItemToEntries({ client, payload });
  updateCurrentResultNumber(result);
  setClientsTurn(client);

  dispatchCurrentEntries(dispatchAll);
  dispatchGameResult({ context, result });
};

const exit = (id, payload) => {
  if (isClientValid(id)) {
    clients.forEach(current => {
      dispatchExitGame({
        dispatch: current.get('context').dispatchAll,
        payload
      });
    });
  }
};

module.exports = {
  connect,
  start,
  exit,
  processInput,
  removePlayer
};
