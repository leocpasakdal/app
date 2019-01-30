import { shallow } from 'enzyme';
import React from 'react';
import Avatar from '../Avatar';
import Image from '../Image';

describe('Avatar', () => {
  it('renders an Image component with correct props', () => {
    const wrapper = shallow(<Avatar className="classNameValue" />);
    const child = wrapper.find(Image);

    expect(child).toHaveLength(1);
    expect(child.props().className).toEqual('classNameValue');
    expect(child.props().type).toEqual('avatar');
  });
});
