import React from 'react';
import PropTypes from 'prop-types';
import styles from './text.scss';
import { joinArrayIgnoreInvalid } from '#/utils/misc';

const Text = ({ children, type }) => {
  const className = joinArrayIgnoreInvalid([styles.text, styles[type]], ' ');

  return <div className={className}>{children}</div>;
};

Text.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['banner', 'circle', 'entry', 'move', 'result', 'team'])
    .isRequired
};

export default Text;
