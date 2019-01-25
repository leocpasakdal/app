import React from 'react';
import PropTypes from 'prop-types';

import Entry from './Entry';
import Text from '../Text/Text';

const UserEntry = ({ children }) => (
  <Entry type="circle">
    <Text type="move">{children}</Text>
  </Entry>
);

UserEntry.propTypes = {
  children: PropTypes.node
};

export default UserEntry;
