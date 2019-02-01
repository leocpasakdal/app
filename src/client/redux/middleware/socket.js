import * as reduxModules from '#/redux/modules';
import { MODAL_TYPE } from '#/utils/constants';

const socket = store => next => action => {
  const {
    REQUEST_CONNECTION,
    RESPONSE_EXIT,
    RESPONSE_FINISH
  } = reduxModules.socket.actions;
  const { closeModal, showModal } = reduxModules.modal.actions;

  switch (action.type) {
    case RESPONSE_FINISH:
      store.dispatch(
        showModal({
          modalType: MODAL_TYPE.GAME_RESULT
        })
      );

      break;
    case RESPONSE_EXIT:
      store.dispatch(closeModal());

      break;
    case REQUEST_CONNECTION:
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
