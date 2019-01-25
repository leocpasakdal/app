export const noop = () => null;

export const joinArrayIgnoreInvalid = (items = [], delimiter = '') =>
  items.filter(Boolean).join(delimiter);
