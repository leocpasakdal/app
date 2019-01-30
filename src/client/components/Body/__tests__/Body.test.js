import { shallow } from 'enzyme';
import React from 'react';
import Body from '../Body';
import styles from '../body.scss';

describe('Body', () => {
  styles.body = 'bodyCssValue';

  it('returns an instance of div with correct class name', () => {
    const wrapper = shallow(<Body />);
    const child = wrapper.find('div');

    expect(child).toHaveLength(1);
    expect(child.props().className).toEqual('bodyCssValue');
  });
});
