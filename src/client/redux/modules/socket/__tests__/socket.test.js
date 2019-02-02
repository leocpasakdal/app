import { reducer, actions } from '..';

const initalState = {
  entries: [],
  clientErrorMessage: '',
  connected: false,
  result: false,
  start: false,
  turn: false,
  finish: false,
  socketId: null
};

describe('socket reducer', () => {
  it('contains the expected initial state', () => {
    const actualState = reducer(undefined, {});

    expect(actualState).toEqual(initalState);
  });

  describe('setError', () => {
    it('sets clientErrorMessage', () => {
      const result = reducer(
        undefined,
        actions.setError('clientErrorMessageValue')
      );

      expect(result).toEqual({
        ...initalState,
        clientErrorMessage: 'clientErrorMessageValue'
      });
    });
  });

  describe('clearError', () => {
    it('resets clientErrorMessage', () => {
      const result = reducer(undefined, actions.clearError());

      expect(result).toEqual(initalState);
    });
  });
});
