import React from 'react';
import PropTypes from 'prop-types';
import styles from './text.scss';
import { joinArrayIgnoreInvalid } from '#/utils/misc';

const Text = ({ className, children, type }) => {
  const classNames = joinArrayIgnoreInvalid(
    [className, styles.text, styles[type]],
    ' '
  );

  return <div className={classNames}>{children}</div>;
};

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'banner',
    'circle',
    'entry',
    'error',
    'label',
    'move',
    'result',
    'team'
  ]).isRequired
};

export default Text;
