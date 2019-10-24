import { createAction } from 'redux-actions';

export interface Emit {
  emit: boolean;
}

export const emitActions = <T extends string, P extends any>(actionType: T) =>
  createAction<P, Emit>(actionType, payload => payload, () => ({ emit: true }));
