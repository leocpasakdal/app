import { shallow } from 'enzyme';
import React from 'react';
import Entry from '../Entry';
import MoveEntry from '../MoveEntry';
import Text from '../../Text/Text';

describe('MoveEntry', () => {
  it('returns an instance of Entry and Text', () => {
    const wrapper = shallow(<MoveEntry />);
    const entryComp = wrapper.find(Entry);
    const textComp = wrapper.find(Text);

    expect(entryComp).toHaveLength(1);
    expect(entryComp.props().type).toEqual('circle');
    expect(textComp).toHaveLength(1);
    expect(textComp.props().type).toEqual('move');
  });
});
