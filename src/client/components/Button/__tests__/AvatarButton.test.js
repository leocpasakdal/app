import { shallow } from 'enzyme';
import React from 'react';
import Button from '../Button';
import AvatarButton from '../AvatarButton';
import Avatar from '#/components/Image/Avatar';

describe('AvatarButton', () => {
  it('returns an instance of Button component with correct props', () => {
    const wrapper = shallow(<AvatarButton onClick={jest.fn()} />);
    const button = wrapper.find(Button);
    const avatar = wrapper.find(Avatar);

    expect(button).toHaveLength(1);
    expect(avatar).toHaveLength(1);
    expect(button.props().type).toEqual('image');
  });
});
