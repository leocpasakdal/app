import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as reduxModules from '#/redux/modules';
import ResultOverlay from '#/components/Overlay/ResultOverlay';
import { getResultImage } from '#/utils/misc';

class UnconnectedResultModal extends Component {
  onClick = () => {
    const { closeModal } = this.props;

    closeModal();
  };

  render() {
    const { show, won } = this.props;

    return (
      <ResultOverlay
        onClick={this.onClick}
        show={show}
        src={getResultImage(won ? 'WIN' : 'LOSE')}
      />
    );
  }
}

UnconnectedResultModal.propTypes = {
  closeModal: PropTypes.func,
  show: PropTypes.bool,
  won: PropTypes.bool
};

const mapStateToProps = state => ({
  show: state.modal.show,
  won: state.modal.won
});

const mapDispatchToProps = {
  closeModal: reduxModules.modal.actions.closeModal
};

const ResultModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedResultModal);

export default ResultModal;
