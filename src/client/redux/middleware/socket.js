import * as reduxModules from '#/redux/modules';
import { MODAL_TYPE } from '#/utils/constants';

const socket = store => next => action => {
  const {
    EXIT_GAME_RESPONSE,
    GAME_CONNECTION_REQUEST,
    GAME_FINISH_RESPONSE
  } = reduxModules.socket.actions;
  const { closeModal, showModal } = reduxModules.modal.actions;

  switch (action.type) {
    case GAME_FINISH_RESPONSE:
      store.dispatch(
        showModal({
          modalType: MODAL_TYPE.GAME_RESULT
        })
      );

      break;
    case EXIT_GAME_RESPONSE:
      store.dispatch(closeModal());

      break;
    case GAME_CONNECTION_REQUEST:
      store.dispatch(
        reduxModules.player.actions.setPlayer({
          avatarId: action.payload.avatarId,
          teamName: action.payload.teamName
        })
      );
      break;

    default:
      break;
  }

  return next(action);
};

export default socket;
