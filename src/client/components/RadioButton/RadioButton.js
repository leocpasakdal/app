import React from 'react';
import PropTypes from 'prop-types';

import { noop } from '#/utils/misc';
import Text from '#/components/Text/Text';
import styles from './radioButton.scss';

const RadioButton = ({ checked, disabled, onChange, text, value }) => {
  const onClickHandler =
    !disabled && onChange ? () => onChange({ target: { value } }) : noop;

  return (
    <div className={styles.wrapper} onClick={onClickHandler}>
      <Text type="label">
        <input
          checked={checked}
          className={styles.input}
          readOnly
          type="radio"
        />
        {text}
      </Text>
    </div>
  );
};

RadioButton.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  text: PropTypes.string,
  value: PropTypes.string
};
export default RadioButton;
