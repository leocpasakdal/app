import React from 'react';
import PropTypes from 'prop-types';
import { joinArrayIgnoreInvalid } from '#/utils/misc';
import styles from './entry.scss';

const Entry = ({ children, type }) => {
  const className = joinArrayIgnoreInvalid([styles.entry, styles[type]], ' ');

  return <div className={className}>{children}</div>;
};

Entry.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['circle', 'rectangle']).isRequired
};
export default Entry;
