import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as reduxModules from '#/redux/modules';
import Button from '#/components/Button/Button';
import RadioButton from '#/components/RadioButton/RadioButton';
import TextBox from '#/components/TextBox/TextBox';
import Text from '#/components/Text/Text';
import { AVATARS, ROUTES } from '#/utils/constants';
import { START } from '#/utils/language';

import styles from './startPage.scss';

class UnconnectedStartPage extends Component {
  state = {
    avatarId: '',
    teamName: ''
  };

  componentDidUpdate(prevProps) {
    const { connected } = this.props;

    if (connected && prevProps.connected !== connected) {
      this.goToGame();
    }
  }

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
    const { avatarId, teamName } = this.state;

    this.props.gameConnectionRequest({
      avatarId,
      teamName
    });
  };

  goToGame = () => this.props.history.replace(ROUTES.GAME);

  getAvatarSelections = () =>
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
          {this.getAvatarSelections()}
          <TextBox
            isValid={!!teamName}
            onChange={this.onTeamNameChange}
            value={teamName}
          />
          <Button disabled={!enableButton} onClick={this.onClick} type="oblong">
            {START}
          </Button>
          <Text type="error">{this.props.clientErrorMessage}</Text>
        </div>
      </div>
    );
  }
}

UnconnectedStartPage.propTypes = {
  clientErrorMessage: PropTypes.string,
  connected: PropTypes.bool,
  gameConnectionRequest: PropTypes.func,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  connected: state.socket.connected,
  clientErrorMessage: state.socket.clientErrorMessage
});

const mapDispatchToProps = {
  gameConnectionRequest: reduxModules.socket.actions.gameConnectionRequest
};

const StartPage = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UnconnectedStartPage)
);

if (__TEST__) {
  StartPage._test = {
    UnconnectedStartPage
  };
}

export default StartPage;
