import { createAction } from 'redux-actions';

export const SET_GAME_IN_PROGRESS = 'game/SET_GAME_IN_PROGRESS';

export const setGameInProgress = createAction(SET_GAME_IN_PROGRESS);
