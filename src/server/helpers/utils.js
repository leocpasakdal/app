const { LIMIT, DIVISOR, INPUTS } = require('./constants');

const getRandomNumber = () => Math.ceil(Math.random() * LIMIT) + 1;

const getComputedResult = ({ input, result }) =>
  Math.round((input + result) / DIVISOR);

const isResultValid = ({ input, result }) =>
  !!getComputedResult({ input, result });

const isInputValid = ({ input, result }) =>
  INPUTS.includes(input) && isResultValid({ input, result });

const getContextId = context => context.client.id;

const getComputation = ({ move, result }) =>
  `[(${move}) + ${result}) / ${DIVISOR}] = ${getComputedResult({
    input: move,
    result
  })}`;

module.exports = {
  getRandomNumber,
  isInputValid,
  getComputation,
  getContextId,
  getComputedResult
};
