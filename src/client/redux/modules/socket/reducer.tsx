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
  RESPONSE_TURN,
  SetFinish
} from './actions';

export interface Socket {
  clientErrorMessage: string;
  connected: boolean;
  entries: any[];
  finish: boolean;
  result: boolean;
  start: boolean;
  turn: boolean;
  socketId?: string;
  resultNumber?: number;
}

const initialState: Socket = {
  clientErrorMessage: '',
  connected: false,
  entries: [],
  finish: false,
  result: false,
  start: false,
  turn: false,
  socketId: undefined,
  resultNumber: undefined
};

const clearError = (state: Socket): Socket => ({
  ...state,
  clientErrorMessage: ''
});

const setConnection = (state: Socket, action: any): Socket => ({
  ...state,
  connected: action.payload.connected,
  socketId: action.payload.id
});

const setEntries = (state: Socket, action: any): Socket => ({
  ...state,
  entries: [...action.payload]
});

const setError = (state: Socket, action: any): Socket => ({
  ...state,
  clientErrorMessage: action.payload
});

const setFinish = (state: Socket, action: SetFinish): Socket => ({
  ...state,
  result: action.payload.result,
  finish: action.payload.finish
});

const setExit = (): Socket => initialState;

const setResult = (state: Socket, action: any): Socket => ({
  ...state,
  resultNumber: action.payload
});

const setStart = (state: Socket, action: any): Socket => ({
  ...state,
  start: action.payload
});

const setTurn = (state: Socket, action: any): Socket => ({
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
