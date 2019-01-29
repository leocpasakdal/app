import React from 'react';
import PropTypes from 'prop-types';

import Entry from './Entry';
import Text from '#/components/Text/Text';

const ResultEntry = ({ children }) => (
  <Entry type="rectangle">
    <Text type="entry">{children}</Text>
  </Entry>
);

ResultEntry.propTypes = {
  children: PropTypes.node
};

export default ResultEntry;
