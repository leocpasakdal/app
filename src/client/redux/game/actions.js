import { createAction } from 'redux-actions';

export const FINISH_GAME = 'game/FINISH_GAME';
export const SEND_INPUT = 'game/SEND_INPUT';
export const START_GAME = 'game/START_GAME';
export const EXIT_GAME = 'game/EXIT_GAME';

export const exitGame = createAction(EXIT_GAME);
export const finishGame = createAction(FINISH_GAME);
export const sendInput = createAction(SEND_INPUT);
export const startGame = createAction(START_GAME);
