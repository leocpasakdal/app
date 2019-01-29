import _get from 'lodash/get';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import PlayerEntry from '#/components/PlayerEntry/PlayerEntry';
import { ENTRY_TYPE } from '#/utils/constants';

const ENTRY = {
  [ENTRY_TYPE.PLAYER_MOVE]: PlayerEntry
};

const getValidEntries = entries =>
  entries.reduce((acc, entry) => {
    const type = _get(entry, 'type');

    if (!type) {
      return acc;
    }

    return [
      ...acc,
      {
        entry,
        Comp: ENTRY[type]
      }
    ];
  }, []);

const Entries = ({ currentId, entries }) => (
  <Fragment>
    {getValidEntries(entries).map(({ Comp, entry }) => (
      <Comp currentId={currentId} entry={entry} key={entry.id} />
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
