const { LIMIT } = require('./constants');

const getRandomNumber = () => Math.ceil(Math.random() * LIMIT) + 1;

module.exports = {
  getRandomNumber
};
