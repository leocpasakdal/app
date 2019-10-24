import { shallow } from 'enzyme';
import React from 'react';

import Avatar from '../../Image/Avatar';
import MoveEntry from '../../Entry/MoveEntry';
import ResultEntry from '../../Entry/ResultEntry';

import PlayerEntry from '../PlayerEntry';
import styles from '../playerEntry.scss';

describe('PlayerEntry', () => {
  styles.avatar = 'avatarCssValue';

  it('renders an avatar resultEntry and moveEntry component', () => {
    const wrapper = shallow(<PlayerEntry />);
    const avatarComp = wrapper.find(Avatar);
    const resultEntryComp = wrapper.find(ResultEntry);
    const moveEntryComp = wrapper.find(MoveEntry);

    expect(avatarComp).toHaveLength(1);
    expect(resultEntryComp).toHaveLength(2);
    expect(moveEntryComp).toHaveLength(1);
  });
});
