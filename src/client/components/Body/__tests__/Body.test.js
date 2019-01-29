import { shallow } from 'enzyme';
import React from 'react';
import Body from '../Body';
import styles from '../body.scss';

describe('test describe', () => {
  styles.body = 'bodyCssValue';

  it('test it', () => {
    const wrapper = shallow(<Body />);
    const child = wrapper.find('div');

    expect(wrapper.find('div')).toHaveLength(1);
    expect(child.props().className).toEqual('bodyCssValue');
  });
});
