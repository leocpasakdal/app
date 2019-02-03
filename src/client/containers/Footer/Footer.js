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
    const { clearError, requestInput } = this.props;

    clearError();
    requestInput(input);
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
  clearError: PropTypes.func,
  finish: PropTypes.bool,
  requestInput: PropTypes.func,
  turn: PropTypes.bool
};

const mapStateToProps = state => ({
  finish: state.socket.finish,
  turn: state.socket.turn
});

const mapDispatchToProps = {
  clearError: reduxModules.socket.actions.clearError,
  requestInput: reduxModules.socket.actions.requestInput
};

const Footer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedFooter);

// istanbul ignore if
if (__TEST__) {
  Footer._test = {
    UnconnectedFooter
  };
}

export default Footer;
