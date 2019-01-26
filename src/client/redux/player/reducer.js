import { handleActions } from 'redux-actions';
import { SET_PLAYER } from './actions';
import { DEFAULT_BANNER } from '../../utils/language';

const initialState = {
  avatar: '',
  banner: DEFAULT_BANNER,
  teamName: ''
};

const setPlayer = (state, action) => ({
  ...state,
  avatar: action.payload.avatar,
  teamName: action.payload.teamName
});

const reducer = handleActions(
  {
    [SET_PLAYER]: setPlayer
  },
  initialState
);

export default reducer;
