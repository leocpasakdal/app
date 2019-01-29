import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as reduxModules from '#/redux/modules';
import Entries from '#/components/Entries/Entries';
import Layout from '#/containers/Layout/Layout';
import Scrollable from '#/components/Scrollable/Scrollable';
import Texts from '#/components/Text/Text';

class UnconnectedGameArea extends Component {
  componentDidMount() {
    const {
      connected,
      resetClientErrorMessage,
      start,
      startGameRequest
    } = this.props;

    if (connected && !start) {
      startGameRequest();
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
        <Texts type="error">{clientErrorMessage}</Texts>
      </Layout>
    );
  }
}

UnconnectedGameArea.propTypes = {
  clientErrorMessage: PropTypes.string,
  connected: PropTypes.bool,
  entries: PropTypes.array,
  resetClientErrorMessage: PropTypes.func,
  socketId: PropTypes.string,
  start: PropTypes.bool,
  startGameRequest: PropTypes.func
};

const mapStateToProps = state => ({
  clientErrorMessage: state.socket.clientErrorMessage,
  socketId: state.socket.socketId,
  connected: state.socket.connected,
  entries: state.socket.entries
});

const mapDispatchToProps = {
  startGameRequest: reduxModules.socket.actions.startGameRequest,
  resetClientErrorMessage: reduxModules.socket.actions.resetClientErrorMessage
};

const GameArea = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedGameArea);

export default GameArea;
