import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FooterComponent from '../../components/Footer/Footer';
import InputButton from '../../components/Button/InputButton';
import * as reduxModules from '../../redux/modules';
import { INPUTS, MODAL_TYPE } from '../../utils/constants';

class UnconnectedFooter extends Component {
  componentDidUpdate() {}
  getButtons = () =>
    INPUTS.map(value => (
      <InputButton key={value} onClick={this.onClick} value={value} />
    ));

  onClick = input => {
    console.info(input);
    this.props.showModal({ modalType: MODAL_TYPE.GAME_RESULT });
  };

  render() {
    return <FooterComponent>{this.getButtons()}</FooterComponent>;
  }
}

UnconnectedFooter.propTypes = {
  showModal: PropTypes.showModal
};

const mapDispatchToProps = {
  showModal: reduxModules.modal.actions.showModal
};

const Footer = connect(
  null,
  mapDispatchToProps
)(UnconnectedFooter);

export default Footer;
