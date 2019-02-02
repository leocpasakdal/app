import { handleActions } from 'redux-actions';
import {
  RESPONSE_ERROR,
  RESPONSE_ENTRIES,
  RESPONSE_EXIT,
  RESPONSE_CONNECTION,
  RESPONSE_FINISH,
  RESET_CLIENT_ERROR_MESSAGE,
  RESPONSE_RESULT,
  RESPONSE_START,
  RESPONSE_TURN
} from './actions';

const initialState = {
  clientErrorMessage: '',
  connected: false,
  entries: [],
  finish: false,
  result: false,
  start: false,
  turn: false,

  socketId: null
};

const clearError = state => ({
  ...state,
  clientErrorMessage: ''
});
const setConnection = (state, action) => ({
  ...state,
  connected: action.payload.connected,
  socketId: action.payload.id
});

const setEntries = (state, action) => ({
  ...state,
  entries: [...action.payload]
});

const setError = (state, action) => ({
  ...state,
  clientErrorMessage: action.payload
});

const setFinish = (state, action) => ({
  ...state,
  result: action.payload.result,
  finish: action.payload.finish
});

const setExit = () => ({
  ...initialState
});

const setResult = (state, action) => ({
  ...state,
  resultNumber: action.payload
});

const setStart = (state, action) => ({
  ...state,
  start: action.payload
});

const setTurn = (state, action) => ({
  ...state,
  turn: action.payload
});

const reducer = handleActions(
  {
    [RESPONSE_CONNECTION]: setConnection,
    [RESPONSE_ENTRIES]: setEntries,
    [RESPONSE_ERROR]: setError,
    [RESPONSE_EXIT]: setExit,
    [RESPONSE_FINISH]: setFinish,
    [RESPONSE_RESULT]: setResult,
    [RESPONSE_START]: setStart,
    [RESPONSE_TURN]: setTurn,
    [RESET_CLIENT_ERROR_MESSAGE]: clearError
  },
  initialState
);

export default reducer;
