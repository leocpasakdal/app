import React, { Component } from 'react';
import FooterComponent from '../../components/Footer/Footer';
import InputButton from '../../components/Button/InputButton';
import { INPUTS } from '../../utils/constants';

class UnconnectedFooter extends Component {
  componentDidUpdate() {}
  getButtons = () =>
    INPUTS.map(value => (
      <InputButton key={value} onClick={this.onClick} value={value} />
    ));

  onClick = input => {
    console.info(input);
  };

  render() {
    return <FooterComponent>{this.getButtons()}</FooterComponent>;
  }
}

export default UnconnectedFooter;
