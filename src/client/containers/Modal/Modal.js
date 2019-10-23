import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as reduxModules from '../../redux/modules';
import { MODAL_TYPE } from '../../utils/constants';
import ResultModal from './ResultModal';

const modalMap = {
  [MODAL_TYPE.GAME_RESULT]: ResultModal
};

const UnconnectedModal = ({ modalType, show }) => {
  const Comp = modalMap[modalType];

  if (!Comp) {
    return null;
  }

  return <Comp show={show} />;
};

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

// istanbul ignore if
if (__TEST__) {
  Modal._test = {
    UnconnectedModal
  };
}

export default Modal;
