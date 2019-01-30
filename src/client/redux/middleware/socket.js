import * as reduxModules from '#/redux/modules';
import { MODAL_TYPE } from '#/utils/constants';

const socket = store => next => action => {
  if (action.type === reduxModules.socket.actions.GAME_FINISH_RESPONSE) {
    const showModalAction = reduxModules.modal.actions.showModal({
      modalType: MODAL_TYPE.GAME_RESULT
    });

    store.dispatch(showModalAction);
  }

  if (action.type === reduxModules.socket.actions.EXIT_GAME_RESPONSE) {
    const closeModalAction = reduxModules.modal.actions.closeModal();

    store.dispatch(closeModalAction);
  }

  return next(action);
};

export default socket;
