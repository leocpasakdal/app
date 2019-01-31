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

  describe('clientErrorResponse', () => {
    it('sets clientErrorMessage', () => {
      const result = reducer(
        undefined,
        actions.clientErrorResponse('clientErrorMessageValue')
      );

      expect(result).toEqual({
        ...initalState,
        clientErrorMessage: 'clientErrorMessageValue'
      });
    });
  });

  describe('resetClientErrorMessage', () => {
    it('resets clientErrorMessage', () => {
      const result = reducer(undefined, actions.resetClientErrorMessage());

      expect(result).toEqual(initalState);
    });
  });
});
