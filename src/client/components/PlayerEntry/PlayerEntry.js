import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Image/Avatar';
import MoveEntry from '../Entry/MoveEntry';
import ResultEntry from '../Entry/ResultEntry';
import styles from './playerEntry.scss';
import { joinArrayIgnoreInvalid } from '../../utils/misc';

const PlayerEntry = ({
  currentId,
  entry: { avatarId, computation, move, id, result }
}) => {
  const compAlignment = styles[currentId === id ? 'left' : 'right'];
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
  currentId: PropTypes.string,
  entry: PropTypes.object
};

export default PlayerEntry;
