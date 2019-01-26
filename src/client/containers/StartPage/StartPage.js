import React, { Component } from 'react';
import _get from 'lodash/get';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as reduxModules from '../../redux/modules';

import Button from '../../components/Button/Button';
import RadioButton from '../../components/RadioButton/RadioButton';
import TextBox from '../../components/TextBox/TextBox';
import { AVATARS, ROUTES } from '../../utils/constants';
import { START } from '../../utils/language';

import styles from './startPage.scss';

class UnconnectedStartPage extends Component {
  state = {
    avatarId: '',
    teamName: ''
  };

  onTeamNameChange = evt => {
    this.setState({
      teamName: evt.target.value
    });
  };

  onAvatarChange = evt => {
    this.setState({
      avatarId: evt.target.value
    });
  };

  onClick = () => {
    this.setGameInfo();
    this.goToGame();
  };

  setGameInfo = () => {
    const { avatarId, teamName } = this.state;
    const { setGameInProgress, setPlayer } = this.props;
    const avatar = _get(
      AVATARS.find(({ id }) => id === avatarId),
      'avatar',
      ''
    );

    setGameInProgress();
    setPlayer({
      avatar,
      teamName
    });
  };

  goToGame = () => this.props.history.replace(ROUTES.GAME);

  getAvatars = () =>
    AVATARS.map(({ id, name }) => (
      <RadioButton
        checked={this.state.avatarId === id}
        key={id}
        onChange={this.onAvatarChange}
        text={name}
        value={id}
      />
    ));

  render() {
    const { avatarId, teamName } = this.state;
    const enableButton = teamName && avatarId;

    return (
      <div className={styles.startPage}>
        <div className={styles.elementsWrapper}>
          {this.getAvatars()}
          <TextBox
            isValid={!!teamName}
            onChange={this.onTeamNameChange}
            value={teamName}
          />
          <Button disabled={!enableButton} onClick={this.onClick} type="oblong">
            {START}
          </Button>
        </div>
      </div>
    );
  }
}

UnconnectedStartPage.propTypes = {
  history: PropTypes.object,
  setGameInProgress: PropTypes.func,
  setPlayer: PropTypes.func
};

const mapDispatchToProps = {
  setPlayer: reduxModules.player.actions.setPlayer,
  setGameInProgress: reduxModules.game.actions.setGameInProgress
};

const StartPage = withRouter(
  connect(
    null,
    mapDispatchToProps
  )(UnconnectedStartPage)
);

export default StartPage;
