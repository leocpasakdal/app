import React from 'react';
import PropTypes from 'prop-types';

import { joinArrayIgnoreInvalid, noop } from '#/utils/misc';

import commonStyles from '#/scss/_common.scss';
import styles from './textbox.scss';

const TextBox = ({
  autoFocus,
  isValid,
  name,
  onChange,
  placeholder,
  value
}) => {
  const wrapperClass = joinArrayIgnoreInvalid(
    [styles.wrapper, !isValid && styles.error],
    ' '
  );

  return (
    <div className={wrapperClass}>
      <input
        autoFocus={autoFocus}
        className={`${styles.textbox} ${commonStyles.textInput}`}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

TextBox.defaultProps = {
  autoFocus: false,
  onChange: noop,
  value: ''
};

TextBox.propTypes = {
  autoFocus: PropTypes.bool,
  isValid: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default TextBox;
