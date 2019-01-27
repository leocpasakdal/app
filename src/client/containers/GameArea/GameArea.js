import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Entries from '../../components/Entries/Entries';
import Scrollable from '../../components/Scrollable/Scrollable';
import Layout from '../Layout/Layout';

class UnconnectedGameArea extends Component {
  componentDidMount() {}

  render() {
    const { currentPlayerId, entries } = this.props;

    return (
      <Layout>
        <Scrollable scrollToBottomOnUpdate>
          <Entries currentPlayerId={currentPlayerId} entries={entries} />
        </Scrollable>
      </Layout>
    );
  }
}

UnconnectedGameArea.propTypes = {
  currentPlayerId: PropTypes.string,
  entries: PropTypes.array
};

const mapStateToProps = state => ({
  currentPlayerId: state.player.currentPlayerId,
  entries: state.game.entries
});

const GameArea = connect(mapStateToProps)(UnconnectedGameArea);

export default GameArea;
