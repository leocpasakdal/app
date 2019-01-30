import { shallow } from 'enzyme';
import React from 'react';
import Button from '../Button';
import InputButton from '../InputButton';

describe('InputButton', () => {
  it('returns an instance of Button component with correct props', () => {
    const wrapper = shallow(<InputButton disabled onClick={jest.fn()} />);
    const button = wrapper.find(Button);

    expect(button).toHaveLength(1);
    expect(button.props().disabled).toEqual(true);
    expect(button.props().type).toEqual('circle');
  });
});
