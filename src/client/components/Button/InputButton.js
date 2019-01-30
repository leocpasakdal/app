import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class InputButton extends Component {
  onButtonClick = () => {
    const { onClick, value } = this.props;

    onClick(value);
  };

  render() {
    const { disabled, value } = this.props;

    return (
      <Button disabled={disabled} onClick={this.onButtonClick} type="circle">
        {value}
      </Button>
    );
  }
}

InputButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.number
};

export default InputButton;
