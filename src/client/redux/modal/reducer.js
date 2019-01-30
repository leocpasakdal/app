import { handleActions } from 'redux-actions';
import { CLOSE_MODAL, SHOW_MODAL } from './actions';

const initialState = {
  modalContent: {},
  modalType: 'GAME_RESULT',
  show: false
};

const closeModal = state => ({
  ...state,
  show: false
});

const showModal = (state, action) => ({
  ...state,
  modalContent: action.payload.modalContent,
  modalType: action.payload.modalType,
  show: true
});

const reducer = handleActions(
  {
    [CLOSE_MODAL]: closeModal,
    [SHOW_MODAL]: showModal
  },
  initialState
);

export default reducer;
