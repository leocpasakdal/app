import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FooterComponent from '../../components/Footer/Footer';
import InputButton from '../../components/Button/InputButton';
import * as reduxModules from '../../redux/modules';
import { INPUTS, MODAL_TYPE } from '../../utils/constants';

class UnconnectedFooter extends Component {
  componentDidUpdate() {
    console.log(this.props.start);
  }
  getButtons = () =>
    INPUTS.map(value => (
      <InputButton
        disabled={!this.props.start}
        key={value}
        onClick={this.onClick}
        value={value}
      />
    ));

  onClick = input => {
    this.props.inputRequest(input);
    // this.props.showModal({ modalType: MODAL_TYPE.GAME_RESULT });
  };

  render() {
    return (
      <FooterComponent>
        <div>{this.props.clientErrorMessage}</div>
        {this.getButtons()}{' '}
      </FooterComponent>
    );
  }
}

UnconnectedFooter.propTypes = {
  showModal: PropTypes.func
};

const mapStateToProps = state => ({
  entries: state.socket.entries,
  start: state.socket.start,
  clientErrorMessage: state.socket.clientErrorMessage
});

const mapDispatchToProps = {
  showModal: reduxModules.modal.actions.showModal,
  inputRequest: reduxModules.socket.actions.inputRequest
};

const Footer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedFooter);

export default Footer;
