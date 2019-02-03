const { ERROR } = require('../helpers/language');
const {
  dispatchConnectionStatus,
  dispatchError,
  dispatchExit,
  dispatchEntries,
  dispatchFinish,
  dispatchResult,
  dispatchStart,
  dispatchTurn
} = require('../helpers/dispatchers');

module.exports = () => {
  const error = ({ dispatch, message }) => {
    dispatchError({
      dispatch,
      payload: message
    });
  };

  const disabledTurn = dispatch => {
    error({ dispatch, message: ERROR.INVALID_INPUT });
  };

  const inProgress = dispatch => {
    error({ dispatch, message: ERROR.IN_PROGRESS });
  };

  const invalidClient = dispatch => {
    error({ dispatch, message: ERROR.INVALID_CLIENT });
  };

  const invalidInput = dispatch => {
    error({ dispatch, message: ERROR.INVALID_INPUT });
  };

  const result = ({ dispatch, result }) =>
    dispatchResult({
      dispatch,
      payload: result
    });

  const disconnect = ({ dispatch, message }) => {
    dispatchExit(dispatch);

    if (message) {
      error({ dispatch, message });
    }
  };

  const entries = ({ dispatch, entries }) => {
    dispatchEntries({
      dispatch,
      entries
    });
  };

  const turn = ({ dispatch, turn }) => {
    dispatchTurn({
      dispatch,
      payload: turn
    });
  };

  const start = ({ dispatch, dispatchAll, shouldStart }) => {
    dispatchStart({
      dispatch: dispatchAll,
      payload: shouldStart
    });

    turn({
      dispatch,
      turn: shouldStart
    });
  };

  const finish = ({ dispatch, winner }) =>
    dispatchFinish({
      dispatch,
      payload: winner
    });

  const connectionStatus = options => dispatchConnectionStatus(options);

  return {
    connectionStatus,
    disabledTurn,
    disconnect,
    entries,
    finish,
    inProgress,
    invalidClient,
    invalidInput,
    result,
    start,
    turn
  };
};
