import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { ROUTES } from '../../utils/constants';
import Body from '../../components/Body/Body';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';

class UnconnectedLayout extends Component {
  componentDidUpdate() {}
  render() {
    const { children, connected } = this.props;

    if (!connected) {
      return <Redirect to={ROUTES.START} />;
    }

    return (
      <div>
        <Header />
        <Modal />
        <Body>{children}</Body>
        <Footer />
      </div>
    );
  }
}

UnconnectedLayout.propTypes = {
  children: PropTypes.node,
  connected: PropTypes.bool
};

const mapStateToProps = state => ({
  avatarId: state.player.avatarId,
  banner: state.player.banner,
  connected: state.socket.connected,
  teamName: state.player.teamName
});

const Layout = connect(mapStateToProps)(UnconnectedLayout);

export default Layout;
