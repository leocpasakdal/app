import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { ROUTES } from '../../utils/constants';
import Body from '../../components/Body/Body';
import Header from '../../components/Header/Header';
import Footer from '../Footer/Footer';

const UnconnectedLayout = props => {
  const { avatarId, banner, children, isGameInProgress, teamName } = props;

  if (!isGameInProgress) {
    return <Redirect to={ROUTES.START} />;
  }

  return (
    <div>
      <Header avatarId={avatarId} banner={banner} teamName={teamName} />
      <Body>{children}</Body>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  avatarId: state.player.avatarId,
  banner: state.player.banner,
  isGameInProgress: state.game.isGameInProgress,
  teamName: state.player.teamName
});

UnconnectedLayout.propTypes = {
  avatarId: PropTypes.string,
  banner: PropTypes.string,
  children: PropTypes.node,
  isGameInProgress: PropTypes.bool,
  teamName: PropTypes.string
};

const Layout = connect(mapStateToProps)(UnconnectedLayout);

export default Layout;
