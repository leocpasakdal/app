import { handleActions } from 'redux-actions';
import { EXIT_GAME, FINISH_GAME, SEND_INPUT, START_GAME } from './actions';

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
  entries: [testData1, testData2, testData1, testData2],
  isGameInProgress: false,
  result: '',
  won: false
};

const startGame = state => ({
  ...state,
  entries: [],
  isGameInProgress: true,
  won: false
});

const exitGame = state => ({
  ...state,
  entries: [],
  isGameInProgress: false,
  won: false
});

const sendInput = (state, action) => ({
  ...state,
  entries: [...state.entries, action.payload],
  won: false
});

const finishGame = (state, action) => ({
  ...state,
  won: action.payload
});

const reducer = handleActions(
  {
    [EXIT_GAME]: exitGame,
    [FINISH_GAME]: finishGame,
    [SEND_INPUT]: sendInput,
    [START_GAME]: startGame
  },
  initialState
);

export default reducer;
