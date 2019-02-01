import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as reduxModules from '#/redux/modules';
import Entries from '#/components/Entries/Entries';
import Layout from '#/containers/Layout/Layout';
import Scrollable from '#/components/Scrollable/Scrollable';
import Text from '#/components/Text/Text';

import styles from './gameArea.scss';

class UnconnectedGameArea extends Component {
  componentDidMount() {
    const {
      connected,
      resetClientErrorMessage,
      start,
      requestStart
    } = this.props;

    if (connected && !start) {
      requestStart();
    }

    resetClientErrorMessage();
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
  clientErrorMessage: PropTypes.string,
  connected: PropTypes.bool,
  entries: PropTypes.array,
  requestStart: PropTypes.func,
  resetClientErrorMessage: PropTypes.func,
  socketId: PropTypes.string,
  start: PropTypes.bool
};

const mapStateToProps = state => ({
  clientErrorMessage: state.socket.clientErrorMessage,
  connected: state.socket.connected,
  entries: state.socket.entries,
  socketId: state.socket.socketId
});

const mapDispatchToProps = {
  requestStart: reduxModules.socket.actions.requestStart,
  resetClientErrorMessage: reduxModules.socket.actions.resetClientErrorMessage
};

const GameArea = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedGameArea);

if (__TEST__) {
  GameArea._test = {
    UnconnectedGameArea
  };
}

export default GameArea;
