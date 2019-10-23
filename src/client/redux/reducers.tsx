import forEach from 'lodash/forEach';
import reduce from 'lodash/reduce';
import { combineReducers } from 'redux';

import * as modules from './modules';
import { SocketInterface } from './modules/socket/reducer';

const createAndAddRootSelector = (module: any, moduleName: any) => {
  const setRootSelector =
    (module.selectors && module.selectors.setRootSelector) ||
    module.setRootSelector;

  if (setRootSelector) {
    setRootSelector((state: any) => state[moduleName]);
  }
};

forEach(modules, createAndAddRootSelector);

const extractReducers = (collection: any) =>
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

export type AppState = {
  socket: SocketInterface;
};

export default combinedReducers;
