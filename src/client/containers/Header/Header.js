import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderComponent from '#/components/Header/Header';

class UnconnectedHeader extends Component {
  componentDidUpdate() {}

  render() {
    const { avatarId, banner, teamName } = this.props;

    return (
      <HeaderComponent
        avatarId={avatarId}
        banner={banner}
        teamName={teamName}
      />
    );
  }
}

UnconnectedHeader.propTypes = {
  avatarId: PropTypes.string,
  banner: PropTypes.string,
  teamName: PropTypes.string
};

const mapStateToProps = state => ({
  avatarId: state.player.avatarId,
  banner: state.player.banner,
  teamName: state.player.teamName
});

const Header = connect(mapStateToProps)(UnconnectedHeader);

export default Header;
