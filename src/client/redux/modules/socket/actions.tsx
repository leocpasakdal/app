import { REQUEST, RESPONSE } from '../../../../common/socketActions';
import { createAction } from 'redux-actions';
import { emitActions } from '../../utils';

export const REQUEST_EXIT = REQUEST.EXIT;
export const REQUEST_CONNECTION = REQUEST.CONNECTION;
export const REQUEST_INPUT = REQUEST.INPUT;
export const REQUEST_START = REQUEST.START;

export const RESPONSE_CONNECTION = RESPONSE.CONNECTION;
export const RESPONSE_ENTRIES = RESPONSE.ENTRIES;
export const RESPONSE_ERROR = RESPONSE.ERROR;
export const RESPONSE_EXIT = RESPONSE.EXIT;
export const RESPONSE_FINISH = RESPONSE.FINISH;
export const RESPONSE_RESULT = RESPONSE.RESULT;
export const RESPONSE_START = RESPONSE.START;
export const RESPONSE_TURN = RESPONSE.TURN;

export const RESET_CLIENT_ERROR_MESSAGE = 'socket/RESET_CLIENT_ERROR_MESSAGE';
export const clearError = createAction(RESET_CLIENT_ERROR_MESSAGE);

//request
export interface RequestConnectionPayload {
  avatarId: string;
  teamName: string;
}

export const requestConnection = emitActions<
  typeof REQUEST_CONNECTION,
  RequestConnectionPayload
>(REQUEST_CONNECTION);

export type RequestConnection = ReturnType<typeof requestConnection>;

export const requestExit = emitActions(REQUEST_EXIT);
export const requestInput = emitActions(REQUEST_INPUT);
export const requestStart = emitActions(REQUEST_START);

// response
export const setConnection = emitActions(RESPONSE_CONNECTION);
export const setEntries = emitActions(RESPONSE_ENTRIES);

export const setError = (payload: string) => ({
  type: RESPONSE_ERROR,
  payload
});
export type SetError = ReturnType<typeof setError>;

export const setExit = emitActions<typeof RESPONSE_FINISH, any>(RESPONSE_EXIT);
export type SetExit = ReturnType<typeof setExit>;

interface SetFinishPayload {
  result: boolean;
  finish: boolean;
}

export const setFinish = emitActions<typeof RESPONSE_FINISH, SetFinishPayload>(
  RESPONSE_FINISH
);
export type SetFinish = ReturnType<typeof setFinish>;

export const setResult = emitActions<typeof RESPONSE_RESULT, number>(
  RESPONSE_RESULT
);
export type SetResult = ReturnType<typeof setResult>;

export const setStart = emitActions<typeof RESPONSE_START, boolean>(
  RESPONSE_START
);
export type SetStart = ReturnType<typeof setStart>;

export const setTurn = emitActions<typeof RESPONSE_TURN, boolean>(
  RESPONSE_TURN
);
export type SetTurn = ReturnType<typeof setTurn>;
