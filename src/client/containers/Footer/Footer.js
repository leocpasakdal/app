import React, { Component } from 'react';
import { connect } from 'react-redux';
import FooterComponent from '../../components/Footer/Footer';
import InputButton from '../../components/Button/InputButton';
import * as reduxModules from '../../redux/modules';
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

const mapDispatchToProps = {
  sendInput: reduxModules.game.actions.sendInput
};

const Footer = connect(
  null,
  mapDispatchToProps
)(UnconnectedFooter);

export default Footer;
