import { createAction } from 'redux-actions';
import { emitActions } from '#/redux/utils';

export const RESET_CLIENT_ERROR_MESSAGE = 'socket/RESET_CLIENT_ERROR_MESSAGE';

// request
export const GAME_CONNECTION_REQUEST = 'socket/GAME_CONNECTION_REQUEST';
export const START_GAME_REQUEST = 'socket/START_GAME_REQUEST';
export const INPUT_REQUEST = 'socket/INPUT_REQUEST';

// response
export const CLIENT_ERROR_RESPONSE = 'socket/CLIENT_ERROR_RESPONSE';
export const ENTRIES_RESPONSE = 'socket/ENTRIES_RESPONSE';
export const GAME_CONNECTION_RESPONSE = 'socket/GAME_CONNECTION_RESPONSE';
export const RESULT_NUMBER_RESPONSE = 'socket/RESULT_NUMBER_RESPONSE';
export const START_GAME_RESPONSE = 'socket/START_GAME_RESPONSE';
export const TURN_RESPONSE = 'socket/TURN_RESPONSE';
export const GAME_FINISH_RESPONSE = 'socket/GAME_FINISH_RESPONSE';

export const resetClientErrorMessage = createAction(RESET_CLIENT_ERROR_MESSAGE);

//request
export const gameConnectionRequest = emitActions(GAME_CONNECTION_REQUEST);
export const inputRequest = emitActions(INPUT_REQUEST);
export const startGameRequest = emitActions(START_GAME_REQUEST);

// response
export const clientErrorResponse = emitActions(CLIENT_ERROR_RESPONSE);
export const entriesReceived = emitActions(ENTRIES_RESPONSE);
export const gameConnectionResponse = emitActions(GAME_CONNECTION_RESPONSE);
export const resultNumberReponse = emitActions(RESULT_NUMBER_RESPONSE);
export const startGameResponse = emitActions(START_GAME_RESPONSE);
export const turnResponse = emitActions(START_GAME_RESPONSE);
export const gameFinishResponse = emitActions(GAME_FINISH_RESPONSE);
