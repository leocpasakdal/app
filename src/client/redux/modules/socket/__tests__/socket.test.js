import { reducer, actions } from '..';

const initalState = {
  clientErrorMessage: '',
  connected: false,
  entries: [],
  finish: false,
  result: false,
  start: false,
  turn: false,
  socketId: undefined,
  resultNumber: undefined
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
