import React from 'react';
import PropTypes from 'prop-types';
import styles from './overlay.scss';
import { joinArrayIgnoreInvalid } from '#/utils/misc';

const Overlay = ({ children, show, type }) => {
  const className = joinArrayIgnoreInvalid(
    [styles.overlay, styles[type], show && styles.show],
    ' '
  );

  return <div className={className}>{children}</div>;
};

Overlay.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  type: PropTypes.oneOf(['result'])
};

export default Overlay;
