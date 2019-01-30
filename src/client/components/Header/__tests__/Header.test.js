import { shallow } from 'enzyme';
import React from 'react';
import Header from '../Header';
import Avatar from '#/components/Image/Avatar';
import Text from '#/components/Text/Text';

describe('Header', () => {
  it('renders children components correctly', () => {
    const wrapper = shallow(<Header />);
    const avatarComponent = wrapper.find(Avatar);
    const textComponents = wrapper.find(Text);

    expect(avatarComponent).toHaveLength(1);
    expect(textComponents).toHaveLength(2);
  });
});
