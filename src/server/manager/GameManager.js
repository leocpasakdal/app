const { ERROR } = require('../helpers/language');
const {
  getRandomNumber,
  isInputValid,
  getComputedResult,
  getContextId
} = require('../helpers/utils');

module.exports = ({ dispatchManager, playerManager, entryManager }) => {
  let currentResultNumber = 0;

  const updateCurrentResultNumber = result => {
    currentResultNumber = result;
  };

  const removePlayer = id => {
    playerManager.removePlayer(id);
  };

  const startGame = context => {
    const { dispatch, dispatchAll } = context;

    if (!playerManager.isPlayerListFull()) {
      return;
    }

    entryManager.clear();
    entryManager.dispatch(dispatchAll);
    dispatchManager.start({ dispatch, dispatchAll, shouldStart: true });
  };

  const disconnect = ({ dispatch, payload }) => {
    if (dispatch) {
      dispatchManager.disconnect({ dispatch, message: payload });
      playerManager.clear();
    }
  };

  const hasInputErrors = ({ input, context }) => {
    const { dispatch, dispatchAll } = context;

    if (!playerManager.isPlayerListFull()) {
      disconnect({ dispatch: dispatchAll, payload: ERROR.PLAYER_LEFT_GAME });

      return true;
    }

    if (
      !isInputValid({
        input,
        result: currentResultNumber
      })
    ) {
      dispatchManager.invalidInput(dispatch);

      return true;
    }

    if (!playerManager.isPlayerTurn(getContextId(context))) {
      dispatchManager.disabledTurn(dispatch);

      return true;
    }

    return false;
  };

  const processInput = (context, action) => {
    const { payload } = action;
    const { dispatchAll } = context;
    const hasErrors = hasInputErrors({
      input: action.payload,
      context
    });

    if (hasErrors) {
      return;
    }

    const id = getContextId(context);
    const result = getComputedResult({
      input: payload,
      result: currentResultNumber
    });

    entryManager.addAndDispatch({
      action: dispatchAll,
      info: playerManager.getPlayerInfo(id),
      input: payload,
      result: currentResultNumber
    });

    updateCurrentResultNumber(result);
    playerManager.sendStatus({ id, hasWinner: result === 1 });
  };

  const connect = (context, action) => {
    const { dispatch } = context;
    const canUserConnect = !playerManager.isPlayerListFull();

    if (canUserConnect) {
      playerManager.addPlayer(context, action.payload);
    } else {
      dispatchManager.inProgress(dispatch);
    }

    dispatchManager.connectionStatus({
      dispatch,
      payload: {
        connected: canUserConnect,
        id: getContextId(context)
      }
    });
  };

  const exit = (id, payload) => {
    const { dispatchAll } = playerManager.getPlayerContext(id);

    disconnect({
      dispatch: dispatchAll,
      payload
    });
  };

  const setInitialValues = context => {
    const id = getContextId(context);

    if (playerManager.isLastConnectedPlayer(id)) {
      updateCurrentResultNumber(getRandomNumber());
      playerManager.sendResult({ id, result: currentResultNumber });
    }
  };

  const start = context => {
    const isPlayerValid = playerManager.isPlayerValid(getContextId(context));

    if (isPlayerValid) {
      setInitialValues(context);
      startGame(context);

      return;
    }

    dispatchManager.invalidClient(context.dispatch);
  };

  return {
    connect,
    exit,
    processInput,
    start,
    removePlayer
  };
};
