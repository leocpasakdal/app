import { shallow } from 'enzyme';
import React from 'react';

import Text from '#/components/Text/Text';

import RadioButton from '../RadioButton';

describe('RadioButton', () => {
  it('renders a text an input component', () => {
    const wrapper = shallow(<RadioButton />);
    const textComp = wrapper.find(Text);
    const inputComp = wrapper.find('input');

    expect(textComp).toHaveLength(1);
    expect(inputComp).toHaveLength(1);
  });
});
