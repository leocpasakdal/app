import { handleActions } from 'redux-actions';
import { SET_GAME_IN_PROGRESS } from './actions';

const initialState = {
  isGameInProgress: false
};

const setGameInProgress = state => ({
  ...state,
  isGameInProgress: true
});

const reducer = handleActions(
  {
    [SET_GAME_IN_PROGRESS]: setGameInProgress
  },
  initialState
);

export default reducer;
