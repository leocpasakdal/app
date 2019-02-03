import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as reduxModules from '#/redux/modules';
import Entries from '#/components/Entries/Entries';
import Layout from '#/containers/Layout/Layout';
import Scrollable from '#/components/Scrollable/Scrollable';
import Text from '#/components/Text/Text';

import { WAIT_OTHER_PLAYER, WAIT_TURN } from '#/utils/language';
import styles from './gameArea.scss';

class UnconnectedGameArea extends Component {
  componentDidMount() {
    const { clearError, connected, requestStart, setError, start } = this.props;

    clearError();

    if (connected && !start) {
      setError(WAIT_OTHER_PLAYER);
      requestStart();
    }
  }

  componentDidUpdate(prevProps) {
    const { clientErrorMessage, connected, start, turn } = this.props;
    const shoudlStartGame = connected && prevProps.start !== start;
    const shouldClearMessage =
      clientErrorMessage === prevProps.clientErrorMessage;

    if (shoudlStartGame || (turn && shouldClearMessage)) {
      this.props.clearError();
    }

    if (connected && start && !turn) {
      this.props.setError(WAIT_TURN);
    }
  }

  render() {
    const { clientErrorMessage, entries, socketId } = this.props;

    return (
      <Layout>
        <Scrollable scrollToBottomOnUpdate>
          <Entries currentId={socketId} entries={entries} />
        </Scrollable>
        <Text className={styles.gameError} type="label">
          {clientErrorMessage}
        </Text>
      </Layout>
    );
  }
}

UnconnectedGameArea.propTypes = {
  clearError: PropTypes.func,
  clientErrorMessage: PropTypes.string,
  connected: PropTypes.bool,
  entries: PropTypes.array,
  requestStart: PropTypes.func,
  setError: PropTypes.func,
  socketId: PropTypes.string,
  start: PropTypes.bool,
  turn: PropTypes.bool
};

const mapStateToProps = state => ({
  clientErrorMessage: state.socket.clientErrorMessage,
  connected: state.socket.connected,
  entries: state.socket.entries,
  socketId: state.socket.socketId,
  start: state.socket.start,
  turn: state.socket.turn
});

const mapDispatchToProps = {
  clearError: reduxModules.socket.actions.clearError,
  requestStart: reduxModules.socket.actions.requestStart,
  setError: reduxModules.socket.actions.setError
};

const GameArea = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedGameArea);

// istanbul ignore if
if (__TEST__) {
  GameArea._test = {
    UnconnectedGameArea
  };
}

export default GameArea;
