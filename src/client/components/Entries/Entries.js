import _get from 'lodash/get';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import PlayerEntry from '../PlayerEntry/PlayerEntry';
import { ENTRY_TYPE } from '../../utils/constants';

const ENTRY = {
  [ENTRY_TYPE.PLAYER_MOVE]: PlayerEntry
};

const getValidEntries = (entries = []) =>
  entries.reduce((acc, entry) => {
    const Comp = ENTRY[_get(entry, 'type')];

    if (!Comp) {
      return acc;
    }

    return [
      ...acc,
      {
        entry,
        Comp
      }
    ];
  }, []);

const Entries = ({ currentId, entries }) => (
  <Fragment>
    {getValidEntries(entries).map(({ Comp, entry }, index) => (
      <Comp currentId={currentId} entry={entry} key={index} />
    ))}
  </Fragment>
);

Entries.defaultProps = {
  entries: []
};

Entries.propTypes = {
  currentId: PropTypes.string,
  entries: PropTypes.array
};

export default Entries;
