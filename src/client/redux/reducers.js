import forEach from 'lodash/forEach';
import reduce from 'lodash/reduce';
import { combineReducers } from 'redux';

import * as modules from './modules';

const createAndAddRootSelector = (module, moduleName) => {
  const setRootSelector =
    (module.selectors && module.selectors.setRootSelector) ||
    module.setRootSelector;

  if (setRootSelector) {
    setRootSelector(state => state[moduleName]);
  }
};

forEach(modules, createAndAddRootSelector);

const extractReducers = collection =>
  reduce(
    collection,
    (acc, module, name) => {
      if (!module || !module.reducer) {
        return acc;
      }

      return {
        ...acc,
        [name]: module.reducer
      };
    },
    {}
  );

const moduleReducers = extractReducers(modules);

const combinedReducers = combineReducers({
  ...moduleReducers
});

export default combinedReducers;
