import { shallow } from 'enzyme';
import React from 'react';
import Image from '../Image';
import styles from '../image.scss';

describe('Image', () => {
  styles.avatar = 'avatarCssValue';

  it('renders an image with correct props', () => {
    const wrapper = shallow(
      <Image alt="altValue" src="srcValue" type="avatar" />
    );
    const child = wrapper.find('img');

    expect(child).toHaveLength(1);
    expect(child.props().className).toEqual('avatarCssValue');
    expect(child.props().alt).toEqual('altValue');
    expect(child.props().src).toEqual('srcValue');
  });
});
