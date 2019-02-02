const { getComputedResult, getComputation } = require('../helpers/utils');

module.exports = dispatchManager => {
  let entries = [];

  const add = ({ input, info, result }) => {
    const computation = getComputation({
      move: input,
      result: result
    });
    const computedResult = getComputedResult({
      input: input,
      result: result
    });

    entries.push({
      ...info,
      move: input,
      computation,
      result: computedResult,
      type: 'playerMove'
    });
  };

  const clear = () => {
    entries = [];
  };

  const dispatch = action => {
    dispatchManager.entries({
      dispatch: action,
      entries
    });
  };

  const addAndDispatch = ({ action, ...options }) => {
    add(options);
    dispatch(action);
  };

  return {
    add,
    addAndDispatch,
    clear,
    dispatch
  };
};
