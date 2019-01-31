import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FooterComponent from '#/components/Footer/Footer';
import InputButton from '#/components/Button/InputButton';

import * as reduxModules from '#/redux/modules';
import { INPUTS } from '#/utils/constants';

class UnconnectedFooter extends Component {
  getButtons = () =>
    // TODO move to server
    INPUTS.map(value => (
      <InputButton
        disabled={!this.props.turn}
        key={value}
        onClick={this.onClick}
        value={value}
      />
    ));

  onClick = input => {
    const { inputRequest, resetClientErrorMessage } = this.props;

    resetClientErrorMessage();
    inputRequest(input);
  };

  render() {
    return (
      <FooterComponent show={!this.props.finish}>
        {this.getButtons()}
      </FooterComponent>
    );
  }
}

UnconnectedFooter.propTypes = {
  finish: PropTypes.bool,
  inputRequest: PropTypes.func,
  resetClientErrorMessage: PropTypes.func,
  turn: PropTypes.bool
};

const mapStateToProps = state => ({
  finish: state.socket.finish,
  turn: state.socket.turn
});

const mapDispatchToProps = {
  inputRequest: reduxModules.socket.actions.inputRequest,
  resetClientErrorMessage: reduxModules.socket.actions.resetClientErrorMessage
};

const Footer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedFooter);

if (__TEST__) {
  Footer._test = {
    UnconnectedFooter
  };
}

export default Footer;
