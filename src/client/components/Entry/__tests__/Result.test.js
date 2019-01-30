import { shallow } from 'enzyme';
import React from 'react';
import Entry from '../Entry';
import ResultEntry from '../ResultEntry';
import Text from '#/components/Text/Text';

describe('ResultEntry', () => {
  it('returns an instance of Entry and Text', () => {
    const wrapper = shallow(<ResultEntry />);
    const entryComp = wrapper.find(Entry);
    const textComp = wrapper.find(Text);

    expect(entryComp).toHaveLength(1);
    expect(entryComp.props().type).toEqual('rectangle');
    expect(textComp).toHaveLength(1);
    expect(textComp.props().type).toEqual('entry');
  });
});
