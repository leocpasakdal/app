import React, { FunctionComponent } from 'react';
import { joinArrayIgnoreInvalid } from '../../utils/misc';
import styles from './entry.scss';

export enum Shape {
  Circle = 'circle',
  Rectangle = 'rectangle'
}
interface Props {
  type: Shape;
}
const Entry: FunctionComponent<Props> = ({ children, type }) => {
  const className = joinArrayIgnoreInvalid([styles.entry, styles[type]], ' ');

  return <div className={className}>{children}</div>;
};

export default Entry;
