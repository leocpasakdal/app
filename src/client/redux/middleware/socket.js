import * as reduxModules from '#/redux/modules';
import { MODAL_TYPE } from '#/utils/constants';

const socket = store => next => action => {
  if (action.type === reduxModules.socket.actions.GAME_FINISH_RESPONSE) {
    const parseEntriesAction = reduxModules.modal.actions.showModal({
      modalType: MODAL_TYPE.GAME_RESULT
    });

    store.dispatch(parseEntriesAction);
  }

  return next(action);
};

export default socket;
