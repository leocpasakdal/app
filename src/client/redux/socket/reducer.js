import { handleActions } from 'redux-actions';
import {
  GAME_CONNECTION_RESPONSE,
  ENTRIES_RESPONSE,
  CLIENT_ERROR_RESPONSE,
  RESULT_NUMBER_RESPONSE,
  START_GAME_RESPONSE,
  TURN_RESPONSE
} from './actions';

const initialState = {
  socketId: null,
  entries: [],
  connected: false,
  start: false,
  turn: false,
  clientErrorMessage: ''
};

const entriesResponse = (state, action) => ({
  ...state,
  entries: [...action.payload]
});

const clientErrorResponse = (state, action) => ({
  ...state,
  connected: false,
  clientErrorMessage: action.payload
});

const resultNumberResponse = (state, action) => ({
  ...state,
  resultNumber: action.payload
});

const gameConnectionReponse = (state, action) => ({
  ...state,
  connected: action.payload.connected,
  socketId: action.payload.id
});

const startGameResponse = (state, action) => ({
  ...state,
  start: action.payload
});

const turnResponse = (state, action) => ({
  ...state,
  turn: action.payload
});

const reducer = handleActions(
  {
    [CLIENT_ERROR_RESPONSE]: clientErrorResponse,
    [ENTRIES_RESPONSE]: entriesResponse,
    [GAME_CONNECTION_RESPONSE]: gameConnectionReponse,
    [RESULT_NUMBER_RESPONSE]: resultNumberResponse,
    [START_GAME_RESPONSE]: startGameResponse,
    [TURN_RESPONSE]: turnResponse
  },
  initialState
);

export default reducer;
