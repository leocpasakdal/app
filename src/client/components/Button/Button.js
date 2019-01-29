import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.scss';
import { joinArrayIgnoreInvalid, noop } from '#/utils/misc';

const Button = ({ children, color, disabled, hoverColor, onClick, type }) => {
  const className = joinArrayIgnoreInvalid(
    [
      styles.button,
      styles[color],
      styles[type],
      hoverColor && styles[`${hoverColor}HoverType`],
      disabled ? styles.disabled : styles.enabled
    ],
    ' '
  );

  return (
    <button className={className} onClick={disabled ? noop : onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'main',
  disabled: false,
  hoverColor: 'main',
  onClick: noop
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  hoverColor: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['circle', 'oblong']).isRequired
};

export default Button;
