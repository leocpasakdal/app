import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as reduxModules from '#/redux/modules';
import { MODAL_TYPE } from '#/utils/constants';
import ResultModal from './ResultModal';

class UnconnectedModal extends Component {
  modalType = {
    [MODAL_TYPE.GAME_RESULT]: ResultModal
  };
  render() {
    const { show, modalType } = this.props;
    const Comp = this.modalType[modalType];

    if (!Comp) {
      return null;
    }

    return <Comp show={show} />;
  }
}

UnconnectedModal.propTypes = {
  modalType: PropTypes.string,
  show: PropTypes.bool
};

const mapStateToProps = state => ({
  modalType: state.modal.modalType,
  show: state.modal.show
});

const mapDispatchToProps = {
  closeModal: reduxModules.modal.closeModal
};

const Modal = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedModal);

export default Modal;
