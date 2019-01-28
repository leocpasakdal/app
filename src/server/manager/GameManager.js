const ENTRIES_RESPONSE = 'socket/ENTRIES_RESPONSE';
const CLIENT_ERROR_RESPONSE = 'socket/CLIENT_ERROR_RESPONSE';
const RESULT_NUMBER_RESPONSE = 'socket/RESULT_NUMBER_RESPONSE';
const GAME_CONNECTION_RESPONSE = 'socket/GAME_CONNECTION_RESPONSE';
const START_GAME_RESPONSE = 'socket/START_GAME_RESPONSE';
const TURN_RESPONSE = 'socket/TURN_RESPONSE';

const LIMIT = 1000;
const clients = new Map();
const ACCEPTED_INPUTS = [-1, 0, 1];
let entries = [];
let currentResultNumber = 0;

const getLastConnectedClient = () => Array.from(clients.values()).pop();

const isLastConnectedClient = context => {
  const lastClient = getLastConnectedClient();

  return context.client.id === lastClient.get('context').client.id;
};

const getRandomNumber = () => Math.floor(Math.random() * LIMIT) + 1;

const removePlayer = id => {
  clients.delete(id);
};

const addPlayer = (context, data) => {
  const {
    client: { id }
  } = context;

  const player = new Map();

  player.set('context', context);
  player.set('id', id);
  player.set('teamName', data.teamName);
  player.set('avatarId', data.avatarId);
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
      type: RESULT_NUMBER_RESPONSE,
      payload: currentResultNumber
    });

    getClient(context).set('turn', true);

    return;
  }

  console.info(
    'prevent dispatiching starting number for not last connected client'
  );
};

const dispatchCurrentEntries = dispatch => {
  console.log(entries);
  dispatch({
    type: ENTRIES_RESPONSE,
    payload: entries
  });
};

const dispatchClientTurn = ({ dispatch, payload }) =>
  dispatch({
    type: TURN_RESPONSE,
    payload
  });

const dispatchConnectionStatus = ({ dispatch, payload }) =>
  dispatch({
    type: GAME_CONNECTION_RESPONSE,
    payload
  });

const dispatchClientError = ({ dispatch, payload }) =>
  dispatch({
    type: CLIENT_ERROR_RESPONSE,
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

const dispatchStartGame = context => {
  if (!isGameInProgress()) {
    return;
  }

  const { dispatchAll, dispatch } = context;

  resetEntries();

  dispatchCurrentEntries(dispatchAll);
  dispatch({
    type: START_GAME_RESPONSE,
    payload: true
  });
};

const connectSuccessfulUser = (context, data) => {
  const { dispatch } = context;

  console.info('connection available');

  addPlayer(context, data);

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

const getClient = context => clients.get(context.client.id);

const isClientValid = context => !!getClient(context);

const start = context => {
  if (!isClientValid(context)) {
    dispatchClientError({
      dispatch: context.dispatch,
      payload: 'invalid client'
    });

    return;
  }

  dispatchResultNumber(context);
  dispatchStartGame(context);
};

const connect = (context, data) => {
  if (isGameInProgress()) {
    dispatchGameIsFullActions(context);

    return;
  }

  connectSuccessfulUser(context, data);
};

const updateCurrentResultNumber = result => {
  currentResultNumber = result;
};

const getComputedResult = input =>
  Math.round((input + currentResultNumber) / 3);

const isResultValid = input => !!getComputedResult(input);

const isInputValid = input =>
  ACCEPTED_INPUTS.includes(input) && isResultValid(input);

const isClientTurn = context => {
  const client = getClient(context);

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
  const values = Array.from(clients.values());
  const selectedId = selectedClient.get('id');
  const foundClient = values.find(client => client.get('id') !== selectedId);
  const next = clients.get(foundClient.get('id'));

  next.set('turn', true);
  selectedClient.set('turn', false);
};

const dispatchTurnToClients = () => {
  for (let entry of clients.entries()) {
    dispatchClientTurn({
      dispatch: entry[1].get('context').dispatch,
      payload: entry[1].get('turn')
    });
  }
};

const addItemToEntries = ({ client, input }) => {
  entries.push({
    id: client.get('id'),
    teamName: client.get('teamName'),
    avatarId: client.get('avatarId'),
    move: input,
    computation: getComputation(input),
    result: getComputedResult(input),
    type: 'playerMove'
  });
};

const processInput = (context, action) => {
  const input = action.payload;

  if (!isInputValid(input)) {
    dispatchClientError({
      dispatch: context.dispatch,
      payload: 'invalid input'
    });

    return;
  }

  if (!isClientTurn(context)) {
    dispatchClientError({
      dispatch: context.dispatch,
      payload: 'not your turn yet'
    });

    return;
  }

  const client = getClient(context);

  addItemToEntries({ client, input });
  updateCurrentResultNumber(getComputedResult(input));
  setClientsTurn(client);
  dispatchTurnToClients();
  dispatchCurrentEntries(context.dispatchAll);
  // determine winner
};

module.exports = {
  connect,
  start,
  processInput,
  removePlayer
};
