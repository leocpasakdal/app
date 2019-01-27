import React from 'react';
import PropTypes from 'prop-types';

import Entry from './Entry';
import Text from '../Text/Text';

const MoveEntry = ({ children }) => (
  <Entry type="circle">
    <Text type="move">{children}</Text>
  </Entry>
);

MoveEntry.propTypes = {
  children: PropTypes.node
};

export default MoveEntry;
