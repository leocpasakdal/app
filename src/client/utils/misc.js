import _get from 'lodash/get';
import { AVATARS } from './constants';

export const noop = () => null;

export const joinArrayIgnoreInvalid = (items = [], delimiter = '') =>
  items.filter(Boolean).join(delimiter);

export const getAvatar = avatarId =>
  _get(AVATARS.find(({ id }) => id === avatarId), 'avatar', '');
