import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as reduxModules from '../../redux/modules';
import Button from '../../components/Button/Button';
import AvatarButton from '../../components/Button/AvatarButton';
import Text from '../../components/Text/Text';
import { AVATARS, ROUTES } from '../../utils/constants';
import { CHOOSE_AVATAR, SELECT_AVATAR, START } from '../../utils/language';

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

  onAvatarChange = evt => {
    const {
      target: {
        value: { id, name }
      }
    } = evt;

    this.setState({
      avatarId: id,
      teamName: name
    });
  };

  onClick = () => {
    const { avatarId, teamName } = this.state;

    if (!avatarId) {
      this.props.setError(SELECT_AVATAR);
    } else {
      this.props.requestConnection({
        avatarId,
        teamName
      });
    }
  };

  goToGame = () => this.props.history.replace(ROUTES.GAME);

  getAvatarSelections = () =>
    AVATARS.map(({ id, name }) => (
      <AvatarButton
        id={id}
        key={id}
        name={name}
        onClick={this.onAvatarChange}
        selected={this.state.avatarId === id}
      />
    ));

  render() {
    return (
      <div className={styles.startPage}>
        <div className={styles.elementsWrapper}>
          <Text className={styles.avatar} type="label">
            {CHOOSE_AVATAR}
          </Text>
          <div className={styles.avatarsWrapper}>
            {this.getAvatarSelections()}
          </div>
          <Button
            className={styles.button}
            onClick={this.onClick}
            type="oblong"
          >
            {START}
          </Button>
          <Text className={styles.text} type="error">
            {this.props.clientErrorMessage}
          </Text>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  connected: state.socket.connected,
  clientErrorMessage: state.socket.clientErrorMessage
});

const mapDispatchToProps = {
  requestConnection: reduxModules.socket.actions.requestConnection,
  setError: reduxModules.socket.actions.setError
};

const StartPage = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UnconnectedStartPage)
);

UnconnectedStartPage.propTypes = {
  clientErrorMessage: PropTypes.string,
  connected: PropTypes.bool,
  history: PropTypes.object,
  requestConnection: PropTypes.func,
  setError: PropTypes.func
};

// istanbul ignore if
if (__TEST__) {
  StartPage._test = {
    UnconnectedStartPage
  };
}

export default StartPage;
