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
  entries: [],
  clientErrorMessage: '',
  connected: false,
  result: false,
  start: false,
  turn: false,
  finish: false,
  socketId: null
};

const responseConnection = (state, action) => ({
  ...state,
  connected: action.payload.connected,
  socketId: action.payload.id
});

const responseError = (state, action) => ({
  ...state,
  clientErrorMessage: action.payload
});

const responseEntries = (state, action) => ({
  ...state,
  entries: [...action.payload]
});

const responseExit = () => ({
  ...initialState
});

const responseFinish = (state, action) => ({
  ...state,
  result: action.payload.result,
  finish: action.payload.finish
});

const responseResult = (state, action) => ({
  ...state,
  resultNumber: action.payload
});

const responseStart = (state, action) => ({
  ...state,
  start: action.payload
});

const responseTurn = (state, action) => ({
  ...state,
  turn: action.payload
});

const resetClientErrorMessage = state => ({
  ...state,
  clientErrorMessage: ''
});

const reducer = handleActions(
  {
    [RESPONSE_CONNECTION]: responseConnection,
    [RESPONSE_ENTRIES]: responseEntries,
    [RESPONSE_ERROR]: responseError,
    [RESPONSE_EXIT]: responseExit,
    [RESPONSE_FINISH]: responseFinish,
    [RESPONSE_RESULT]: responseResult,
    [RESPONSE_START]: responseStart,
    [RESPONSE_TURN]: responseTurn,
    [RESET_CLIENT_ERROR_MESSAGE]: resetClientErrorMessage
  },
  initialState
);

export default reducer;
