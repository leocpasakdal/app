import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderComponent from '#/components/Header/Header';

const UnconnectedHeader = ({ avatarId, banner, teamName }) => (
  <HeaderComponent avatarId={avatarId} banner={banner} teamName={teamName} />
);

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

// istanbul ignore if
if (__TEST__) {
  Header._test = {
    UnconnectedHeader
  };
}

export default Header;
