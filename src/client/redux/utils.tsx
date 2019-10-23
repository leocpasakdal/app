import { createAction } from 'redux-actions';

export interface Emit {
  emit: boolean;
}
// type CreateAction<T extends string> = <P extends any>(actionType: T, payloadCreator: ActionFunctionAny<P>, metaCreator: ActionFunctionAny<Emit>) => ActionFunctionAny<ActionMeta<P, Emit>>
// type EmitActions = <T extends string>(actionType: T) => CreateAction<T>

export const emitActions = <T extends string, P extends any>(actionType: T) =>
  createAction<P, Emit>(actionType, payload => payload, () => ({ emit: true }));
