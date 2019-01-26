import React, { Component } from 'react';
import { connect } from 'react-redux';

import Scrollable from '../../components/Scrollable/Scrollable';
import Layout from '../Layout/Layout';

class UnconnectedGameArea extends Component {
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <Scrollable scrollToBottomOnUpdate />
      </Layout>
    );
  }
}

UnconnectedGameArea.propTypes = {};

const mapStateToProps = state => ({
  avatar: state.player.avatar,
  isGameInProgress: state.game.isGameInProgress,
  teamName: state.player.teamName
});

const GameArea = connect(mapStateToProps)(UnconnectedGameArea);

export default GameArea;
