import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.scss';
import { joinArrayIgnoreInvalid, noop } from '../../utils/misc';
import { pure } from 'recompose';

const OrigButton = ({
  children,
  className,
  color,
  disabled,
  hoverColor,
  onClick,
  type
}) => {
  const classNames = joinArrayIgnoreInvalid(
    [
      className,
      styles.button,
      styles[color],
      styles[type],
      hoverColor && styles[`${hoverColor}HoverType`],
      disabled ? styles.disabled : styles.enabled
    ],
    ' '
  );

  return (
    <button className={classNames} onClick={disabled ? noop : onClick}>
      {children}
    </button>
  );
};

OrigButton.defaultProps = {
  color: 'main',
  disabled: false,
  hoverColor: 'main',
  onClick: noop
};

OrigButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  hoverColor: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['circle', 'image', 'oblong']).isRequired
};

const Button = pure(OrigButton);

// istanbul ignore if
if (__TEST__) {
  Button._test = {
    OrigButton
  };
}

export default Button;
