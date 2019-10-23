import avatar1 from '../static/images/avatar1.png';
import avatar2 from '../static/images/avatar2.png';
import win from '../static/images/win.png';
import lose from '../static/images/lose.png';

export const AVATARS = [
  { avatar: avatar1, id: 'geek', name: 'Geek' },
  { avatar: avatar2, id: 'star', name: 'Star' }
];

export const INPUTS = [-1, 0, 1];
export const ROUTES = {
  GAME: '/game',
  START: '/'
};

export const MODAL_TYPE = {
  GAME_RESULT: 'GAME_RESULT'
};

export const ENTRY_TYPE = {
  NEW_ENTRY: 'newEntry',
  PLAYER_MOVE: 'playerMove'
};

export const RESULT_IMAGE = {
  WIN: win,
  LOSE: lose
};
