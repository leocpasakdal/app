import _get from 'lodash/get';
import { AVATARS, RESULT_IMAGE } from './constants';

export const noop = () => null;

export const joinArrayIgnoreInvalid = (items = [], delimiter = '') =>
  items.filter(Boolean).join(delimiter);

export const getAvatar = avatarId =>
  _get(AVATARS.find(({ id }) => id === avatarId), 'avatar', '');

export const getResultImage = result => RESULT_IMAGE[result];
