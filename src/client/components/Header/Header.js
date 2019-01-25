import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.scss';
import Image from '../Image/Image';
import Text from '../Text/Text';

const Header = ({ avatar, banner, teamName }) => (
  <div className={styles.header}>
    <div className={styles.left}>
      <Image src={avatar} type="avatar" />
    </div>
    <div className={styles.right}>
      <Text type="team">{teamName}</Text>
      <Text type="banner">{banner}</Text>
    </div>
  </div>
);

Header.propTypes = {
  avatar: PropTypes.string,
  banner: PropTypes.string,
  teamName: PropTypes.string
};

export default Header;
