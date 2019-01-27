import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.scss';
import Avatar from '../Image/Avatar';
import Text from '../Text/Text';

const Header = ({ avatarId, banner, teamName }) => (
  <div className={styles.header}>
    <div className={styles.left}>
      <Avatar id={avatarId} />
    </div>
    <div className={styles.right}>
      <Text type="team">{teamName}</Text>
      <Text type="banner">{banner}</Text>
    </div>
  </div>
);

Header.propTypes = {
  avatarId: PropTypes.string,
  banner: PropTypes.string,
  teamName: PropTypes.string
};

export default Header;
