import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as reduxModules from '#/redux/modules';
import { getResultImage } from '#/utils/misc';
import { LOSE, WIN, RESTART } from '#/utils/language';
import ResultOverlay from '#/components/Overlay/ResultOverlay';

class UnconnectedResultModal extends Component {
  onClick = () => {
    this.props.exitGameRequest(RESTART);
  };

  render() {
    const { result, show } = this.props;

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
  exitGameRequest: PropTypes.func,
  result: PropTypes.bool,
  show: PropTypes.bool
};

const mapStateToProps = state => ({
  result: state.socket.result,
  show: state.modal.show
});

const mapDispatchToProps = {
  exitGameRequest: reduxModules.socket.actions.exitGameRequest
};

const ResultModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedResultModal);

if (__TEST__) {
  ResultModal._test = {
    UnconnectedResultModal
  };
}

export default ResultModal;
