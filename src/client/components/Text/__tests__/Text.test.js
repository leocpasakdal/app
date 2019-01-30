import { shallow } from 'enzyme';
import React from 'react';
import Text from '../Text';
import styles from '../text.scss';

describe('Text', () => {
  styles.banner = 'bannerCssValue';

  it('returns an instance of div with correct class name', () => {
    const wrapper = shallow(<Text type="banner" />);
    const child = wrapper.find('div');

    expect(child).toHaveLength(1);
    expect(child.props().className).toEqual('bannerCssValue');
  });
});
