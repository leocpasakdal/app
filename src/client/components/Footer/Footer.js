import React from 'react';
import PropTypes from 'prop-types';
import styles from './footer.scss';

const Footer = ({ children, show }) => (
  <div className={styles.footer}>{show && children}</div>
);

Footer.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool
};

export default Footer;
