import { shallow } from 'enzyme';
import React from 'react';
import TextBox from '../TextBox';

describe('TextBox', () => {
  it('returns an input component', () => {
    const wrapper = shallow(<TextBox type="banner" />);
    const child = wrapper.find('input');

    expect(child).toHaveLength(1);
  });
});
