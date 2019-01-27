import _isEmpty from 'lodash/isEmpty';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DynamicEntry from './DynamicEntry';

const Entries = ({ currentPlayerId, entries }) => {
  const entryComps = entries.reduce((acc, entry, index) => {
    if (_isEmpty(entry)) {
      return acc;
    }

    // TODO replace key with entry id
    return [
      ...acc,
      <DynamicEntry
        currentPlayerId={currentPlayerId}
        entry={entry}
        key={index}
      />
    ];
  }, []);

  return <Fragment>{entryComps}</Fragment>;
};

Entries.propTypes = {
  currentPlayerId: PropTypes.string,
  entries: PropTypes.array
};

export default Entries;
