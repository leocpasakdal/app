import * as reduxModules from '#/redux/modules';
import { MODAL_TYPE } from '#/utils/constants';
import socket from '../socket';

beforeEach(() => {
  jest
    .spyOn(reduxModules.modal.actions, 'showModal')
    .mockReturnValue('showModalAction');

  jest
    .spyOn(reduxModules.modal.actions, 'closeModal')
    .mockReturnValue('closeModalAction');

  jest
    .spyOn(reduxModules.player.actions, 'setPlayer')
    .mockReturnValue('setPlayerAction');
});

afterEach(() => {
  reduxModules.modal.actions.showModal.mockRestore();
  reduxModules.modal.actions.closeModal.mockRestore();
  reduxModules.player.actions.setPlayer.mockRestore();
});

describe('socket middleware', () => {
  const next = jest.fn();
  const store = {
    dispatch: jest.fn(),
    getState: jest.fn()
  };

  it('calls the expected functions when the action is reduxModules.socket.RESPONSE_FINISH.', () => {
    const action = {
      type: reduxModules.socket.actions.RESPONSE_FINISH
    };

    socket(store)(next)(action);

    expect(reduxModules.modal.actions.showModal.mock.calls).toEqual([
      [
        {
          modalType: MODAL_TYPE.GAME_RESULT
        }
      ]
    ]);
    expect(next.mock.calls).toEqual([[action]]);
    expect(store.dispatch.mock.calls).toEqual([['showModalAction']]);
  });

  it('calls the expected functions when the action is reduxModules.socket.RESPONSE_EXIT.', () => {
    const action = {
      type: reduxModules.socket.actions.RESPONSE_EXIT
    };

    socket(store)(next)(action);

    expect(reduxModules.modal.actions.closeModal.mock.calls).toEqual([[]]);
    expect(next.mock.calls).toEqual([[action]]);
    expect(store.dispatch.mock.calls).toEqual([['closeModalAction']]);
  });

  it('calls the expected functions when the action is reduxModules.socket.RESPONSE_CONNECTION.', () => {
    const action = {
      type: reduxModules.socket.actions.REQUEST_CONNECTION,
      payload: { avatarId: 'avatarIdValue', teamName: 'teamNameValue' }
    };

    socket(store)(next)(action);

    expect(reduxModules.player.actions.setPlayer.mock.calls).toEqual([
      [
        {
          avatarId: 'avatarIdValue',
          teamName: 'teamNameValue'
        }
      ]
    ]);
    expect(next.mock.calls).toEqual([[action]]);
    expect(store.dispatch.mock.calls).toEqual([['setPlayerAction']]);
  });
});
