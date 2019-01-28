import { createAction } from 'redux-actions';

export const emitActions = actionType =>
  createAction(actionType, payload => payload, () => ({ emit: true }));
