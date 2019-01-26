import { createAction } from 'redux-actions';

export const SET_PLAYER = 'player/setPlayer';
export const SET_TEAM_NAME = 'player/setTeamName';

export const setPlayer = createAction(SET_PLAYER);
