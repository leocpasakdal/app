import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as reduxModules from '#/redux/modules';
import ResultOverlay from '#/components/Overlay/ResultOverlay';
import { getResultImage } from '#/utils/misc';
import { WIN, LOSE } from '#/utils/language';

class UnconnectedResultModal extends Component {
  onClick = () => {
    const { closeModal } = this.props;

    closeModal();
  };

  render() {
    const { show, result } = this.props;

    return (
      <ResultOverlay
        onClick={this.onClick}
        result={result ? WIN : LOSE}
        show={show}
        src={getResultImage(result ? 'WIN' : 'LOSE')}
      />
    );
  }
}

UnconnectedResultModal.propTypes = {
  closeModal: PropTypes.func,
  result: PropTypes.bool,
  show: PropTypes.bool
};

const mapStateToProps = state => ({
  show: state.modal.show,
  result: state.socket.result
});

const mapDispatchToProps = {
  closeModal: reduxModules.modal.actions.closeModal
};

const ResultModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedResultModal);

export default ResultModal;
