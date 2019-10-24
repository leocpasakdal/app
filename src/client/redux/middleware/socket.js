import * as reduxModules from '../modules';
import { MODAL_TYPE } from '../../utils/constants';

const responseFinish = store => {
  store.dispatch(
    reduxModules.modal.actions.showModal({
      modalType: MODAL_TYPE.GAME_RESULT
    })
  );
};

const responseExit = store => {
  store.dispatch(reduxModules.modal.actions.closeModal());
};

const requestConnection = (store, action) => {
  store.dispatch(
    reduxModules.player.actions.setPlayer({
      avatarId: action.payload.avatarId,
      teamName: action.payload.teamName
    })
  );
};

const socket = store => next => action => {
  const {
    REQUEST_CONNECTION,
    RESPONSE_EXIT,
    RESPONSE_FINISH
  } = reduxModules.socket.actions;

  switch (action.type) {
    case RESPONSE_FINISH:
      responseFinish(store);

      break;
    case RESPONSE_EXIT:
      responseExit(store);

      break;
    case REQUEST_CONNECTION:
      requestConnection(store, action);
      break;

    default:
      break;
  }

  return next(action);
};

export default socket;
