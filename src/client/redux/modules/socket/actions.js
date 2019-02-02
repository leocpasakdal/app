import { REQUEST, RESPONSE } from '../../../../common/socketActions';
import { createAction } from 'redux-actions';
import { emitActions } from '#/redux/utils';

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

export const requestConnection = emitActions(REQUEST_CONNECTION);
export const requestExit = emitActions(REQUEST_EXIT);
export const requestInput = emitActions(REQUEST_INPUT);
export const requestStart = emitActions(REQUEST_START);

// response
export const setConnection = emitActions(RESPONSE_CONNECTION);
export const setEntries = emitActions(RESPONSE_ENTRIES);
export const setError = emitActions(RESPONSE_ERROR);
export const setExit = emitActions(RESPONSE_EXIT);
export const setFinish = emitActions(RESPONSE_FINISH);
export const setResult = emitActions(RESPONSE_RESULT);
export const setStart = emitActions(RESPONSE_START);
export const setTurn = emitActions(RESPONSE_TURN);
