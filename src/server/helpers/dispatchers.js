const { RESPONSE } = require('../../common/socketActions');

const dispatchError = ({ dispatch, payload }) =>
  dispatch({
    type: RESPONSE.ERROR,
    payload
  });

const dispatchResult = ({ dispatch, payload }) =>
  dispatch({
    type: RESPONSE.RESULT,
    payload
  });

const dispatchEntries = ({ dispatch, entries }) => {
  dispatch({
    type: RESPONSE.ENTRIES,
    payload: entries
  });
};

const dispatchTurn = ({ dispatch, payload }) =>
  dispatch({
    type: RESPONSE.TURN,
    payload
  });

const dispatchConnectionStatus = ({ dispatch, payload }) =>
  dispatch({
    type: RESPONSE.CONNECTION,
    payload
  });

const dispatchStart = ({ dispatch, payload }) =>
  dispatch({
    type: RESPONSE.START,
    payload: payload
  });

const dispatchFinish = ({ dispatch, payload }) =>
  dispatch({
    type: RESPONSE.FINISH,
    payload: { result: payload, finish: true }
  });

const dispatchExit = dispatch =>
  dispatch({
    type: RESPONSE.EXIT
  });

module.exports = {
  dispatchConnectionStatus,
  dispatchError,
  dispatchEntries,
  dispatchExit,
  dispatchFinish,
  dispatchResult,
  dispatchStart,
  dispatchTurn
};
