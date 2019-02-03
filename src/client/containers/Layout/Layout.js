import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { ROUTES } from '#/utils/constants';
import Body from '#/components/Body/Body';
import Header from '#/containers/Header/Header';
import Footer from '#/containers/Footer/Footer';
import Modal from '#/containers/Modal/Modal';

const UnconnectedLayout = ({ children, connected }) => {
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
};

UnconnectedLayout.propTypes = {
  children: PropTypes.node,
  connected: PropTypes.bool
};

const mapStateToProps = state => ({
  connected: state.socket.connected
});

const Layout = connect(mapStateToProps)(UnconnectedLayout);

// istanbul ignore if
if (__TEST__) {
  Layout._test = {
    UnconnectedLayout
  };
}

export default Layout;
