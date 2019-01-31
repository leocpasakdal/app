import { handleActions } from 'redux-actions';
import { SET_PLAYER } from './actions';
import { DEFAULT_BANNER } from '#/utils/language';

const initialState = {
  avatarId: '',
  banner: DEFAULT_BANNER,
  currentPlayerId: '',
  teamName: ''
};

const setPlayer = (state, action) => ({
  ...state,
  avatarId: action.payload.avatarId,
  teamName: action.payload.teamName
});

const reducer = handleActions(
  {
    [SET_PLAYER]: setPlayer
  },
  initialState
);

export default reducer;
