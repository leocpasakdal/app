import _get from 'lodash/get';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import PlayerEntry from '../PlayerEntry/PlayerEntry';
import { ENTRY_TYPE } from '../../utils/constants';

const ENTRY = {
  [ENTRY_TYPE.PLAYER_MOVE]: PlayerEntry
};

const getValidEntries = entries =>
  entries.reduce((acc, entry) => {
    const type = _get(entry, 'type');

    if (!type) {
      return acc;
    }

    // TODO replace key with entry id
    return [
      ...acc,
      {
        entry,
        Comp: ENTRY[type]
      }
    ];
  }, []);

const Entries = ({ currentPlayerId, entries }) => (
  <Fragment>
    {getValidEntries(entries).map(({ Comp, entry }, index) => (
      <Comp currentPlayerId={currentPlayerId} entry={entry} key={index} />
    ))}
  </Fragment>
);

Entries.defaultProps = {
  entries: []
};

Entries.propTypes = {
  currentPlayerId: PropTypes.string,
  entries: PropTypes.array
};

export default Entries;
