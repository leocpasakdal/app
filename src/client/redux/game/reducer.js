import { handleActions } from 'redux-actions';
import { SEND_INPUT, SET_GAME_IN_PROGRESS } from './actions';

const testData1 = {
  type: 'playerMove',
  playerId: '12345',
  avatarId: 'avatar2',
  computation: '1 + 1 = 2',
  move: '1',
  result: '6'
};

const testData2 = {
  type: 'playerMove',
  playerId: '123456',
  avatarId: 'avatar1',
  computation: '1 + 1 = 2',
  move: '1',
  result: '6'
};

const initialState = {
  isGameInProgress: false,
  entries: [testData1, testData2, testData1, testData2]
};

const setGameInProgress = state => ({
  ...state,
  isGameInProgress: true
});

const sendInput = (state, action) => ({
  ...state,
  entries: [...state.entries, action.payload]
});

const reducer = handleActions(
  {
    [SET_GAME_IN_PROGRESS]: setGameInProgress,
    [SEND_INPUT]: sendInput
  },
  initialState
);

export default reducer;
