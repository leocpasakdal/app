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
  SetResult,
  SetStart,
  SetTurn,
  SetFinish,
  SetError
} from './actions';
import { Emit } from '../../utils';

export interface SocketInterface {
  clientErrorMessage: string;
  connected: boolean;
  entries: any[];
  finish: boolean;
  result: boolean;
  start: boolean;
  turn: boolean;
  socketId?: any;
  resultNumber?: number;
}

const initialState: SocketInterface = {
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

const clearError = (state: SocketInterface): SocketInterface => ({
  ...state,
  clientErrorMessage: ''
});
const setConnection = (
  state: SocketInterface,
  action: any
): SocketInterface => ({
  ...state,
  connected: action.payload.connected,
  socketId: action.payload.id
});

const setEntries = (state: SocketInterface, action: any): SocketInterface => ({
  ...state,
  entries: [...action.payload]
});

const setError = (
  state: SocketInterface,
  action: SetError
): SocketInterface => ({
  ...state,
  clientErrorMessage: action.payload
});

const setFinish = (
  state: SocketInterface,
  action: SetFinish
): SocketInterface => ({
  ...state,
  result: action.payload.result,
  finish: action.payload.finish
});

const setExit = (): SocketInterface => ({
  ...initialState
});

const setResult = (
  state: SocketInterface,
  action: SetResult
): SocketInterface => ({
  ...state,
  resultNumber: action.payload
});

const setStart = (
  state: SocketInterface,
  action: SetStart
): SocketInterface => ({
  ...state,
  start: action.payload
});

const setTurn = (state: SocketInterface, action: SetTurn): SocketInterface => ({
  ...state,
  turn: action.payload
});

const reducer = handleActions<SocketInterface, any, Emit>(
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
