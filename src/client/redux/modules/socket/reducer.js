import { handleActions } from 'redux-actions';
import {
  CLIENT_ERROR_RESPONSE,
  ENTRIES_RESPONSE,
  EXIT_GAME_RESPONSE,
  GAME_CONNECTION_RESPONSE,
  GAME_FINISH_RESPONSE,
  RESET_CLIENT_ERROR_MESSAGE,
  RESULT_NUMBER_RESPONSE,
  START_GAME_RESPONSE,
  TURN_RESPONSE
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

const clientErrorResponse = (state, action) => ({
  ...state,
  clientErrorMessage: action.payload
});

const gameConnectionReponse = (state, action) => ({
  ...state,
  connected: action.payload.connected,
  socketId: action.payload.id
});

const gameFinishResponse = (state, action) => ({
  ...state,
  result: action.payload.result,
  finish: action.payload.finish
});

const entriesResponse = (state, action) => ({
  ...state,
  entries: [...action.payload]
});

const exitGameResponse = () => ({
  ...initialState
});

const resetClientErrorMessage = state => ({
  ...state,
  clientErrorMessage: ''
});

const resultNumberResponse = (state, action) => ({
  ...state,
  resultNumber: action.payload
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
    [TURN_RESPONSE]: turnResponse,
    [RESET_CLIENT_ERROR_MESSAGE]: resetClientErrorMessage,
    [GAME_FINISH_RESPONSE]: gameFinishResponse,
    [EXIT_GAME_RESPONSE]: exitGameResponse
  },
  initialState
);

export default reducer;
