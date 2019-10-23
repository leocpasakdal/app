import { reducer, actions } from '..';
import { DEFAULT_BANNER } from '../../../../utils/language';

describe('player reducer', () => {
  it('contains the expected initial state', () => {
    const actualState = reducer(undefined, {});

    expect(actualState).toEqual({
      avatarId: '',
      currentPlayerId: '',
      banner: DEFAULT_BANNER,
      teamName: ''
    });
  });

  describe('setPlayer', () => {
    it('sets avatarId and teamName', () => {
      const result = reducer(
        undefined,
        actions.setPlayer({
          avatarId: 'avatarIdValue',
          teamName: 'teamNameValue'
        })
      );

      expect(result).toEqual({
        avatarId: 'avatarIdValue',
        banner: DEFAULT_BANNER,
        currentPlayerId: '',
        teamName: 'teamNameValue'
      });
    });
  });
});
