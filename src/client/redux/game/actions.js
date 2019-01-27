import { createAction } from 'redux-actions';

export const SET_GAME_IN_PROGRESS = 'game/SET_GAME_IN_PROGRESS';
export const SEND_INPUT = 'game/SEND_INPUT';

export const sendInput = createAction(SEND_INPUT);
export const setGameInProgress = createAction(SET_GAME_IN_PROGRESS);
