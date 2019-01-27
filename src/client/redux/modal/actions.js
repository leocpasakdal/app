import { createAction } from 'redux-actions';

export const SHOW_MODAL = 'modal/SHOW_MODAL';
export const CLOSE_MODAL = 'modal/CLOSE_MODAL';

export const closeModal = createAction(CLOSE_MODAL);
export const showModal = createAction(SHOW_MODAL);
