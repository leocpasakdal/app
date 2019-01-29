import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as reduxModules from '#/redux/modules';
import Entries from '#/components/Entries/Entries';
import Scrollable from '#/components/Scrollable/Scrollable';
import Layout from '#/containers/Layout/Layout';
import Texts from '#/components/Text/Text';

class UnconnectedGameArea extends Component {
  componentDidMount() {
    if (this.props.connected && !this.props.start) {
      this.props.startGameRequest();
    }

    this.props.resetClientErrorMessage();
  }

  render() {
    const { socketId, entries } = this.props;

    return (
      <Layout>
        <Scrollable scrollToBottomOnUpdate>
          <Entries currentId={socketId} entries={entries} />
        </Scrollable>
        <Texts type="error">{this.props.clientErrorMessage}</Texts>
      </Layout>
    );
  }
}

UnconnectedGameArea.propTypes = {
  entries: PropTypes.array,
  socketId: PropTypes.string
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
