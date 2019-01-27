import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Image/Avatar';
import MoveEntry from '../Entry/MoveEntry';
import ResultEntry from '../Entry/ResultEntry';
import styles from './playerEntry.scss';
import { joinArrayIgnoreInvalid } from '../../utils/misc';

const PlayerEntry = ({
  currentPlayerId,
  entry: { avatarId, computation, move, playerId },
  result
}) => {
  const compAlignment = styles[currentPlayerId === playerId ? 'left' : 'right'];
  const moveClass = joinArrayIgnoreInvalid([styles.move, compAlignment], ' ');
  const entryClass = joinArrayIgnoreInvalid([styles.entry, compAlignment], ' ');

  return (
    <div className={styles.playerEntry}>
      <div className={moveClass}>
        <Avatar id={avatarId} />
        <MoveEntry>{move}</MoveEntry>
      </div>
      <div className={entryClass}>
        <ResultEntry>{computation}</ResultEntry>
      </div>
      <div className={entryClass}>
        <ResultEntry>{result}</ResultEntry>
      </div>
    </div>
  );
};

PlayerEntry.propTypes = {
  currentPlayerId: PropTypes.string,
  entry: PropTypes.object,

  result: PropTypes.string
};

export default PlayerEntry;
