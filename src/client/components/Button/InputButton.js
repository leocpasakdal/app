import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class InputButton extends Component {
  onButtonClick = () => {
    const { onClick, value } = this.props;

    onClick(value);
  };

  render() {
    return (
      <Button
        disabled={this.props.disabled}
        onClick={this.onButtonClick}
        type="circle"
      >
        {this.props.value}
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
