import React from 'react';
import PropTypes from 'prop-types';

import PlayerEntry from '../PlayerEntry/PlayerEntry';
import { ENTRY_TYPE } from '../../utils/constants';

const DynamicEntry = ({ currentPlayerId, entry }) => {
  switch (entry.type) {
    case ENTRY_TYPE.PLAYER_MOVE:
      return <PlayerEntry currentPlayerId={currentPlayerId} entry={entry} />;
    case ENTRY_TYPE.NEW_ENTRY:
      return <div>Remove this case if new entry is needed</div>;

    default:
      return null;
  }
};

DynamicEntry.propTypes = {
  currentPlayerId: PropTypes.string,
  entry: PropTypes.object
};
export default DynamicEntry;
