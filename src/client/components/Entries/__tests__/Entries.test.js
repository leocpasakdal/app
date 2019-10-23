import { shallow } from 'enzyme';
import React from 'react';
import Entries from '../Entries';
import PlayerEntry from '../../PlayerEntry/PlayerEntry';

describe('Entries', () => {
  it('returns an array of components', () => {
    const entries = [
      {
        type: 'a'
      },
      { type: 'playerMove' }
    ];
    const wrapper = shallow(<Entries currentId="" entries={entries} />);
    const components = wrapper.find(PlayerEntry);

    expect(components).toHaveLength(1);
  });
});
