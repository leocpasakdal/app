import { shallow } from 'enzyme';
import React from 'react';
import Overlay from '../Overlay';
import styles from '../overlay.scss';

describe('Overlay', () => {
  styles.result = 'resultCssValue';
  styles.show = 'showCssValue';

  it('returns an instance of div with correct class name', () => {
    const wrapper = shallow(<Overlay show type="result" />);
    const child = wrapper.find('div');

    expect(child).toHaveLength(1);
    expect(child.props().className).toEqual('resultCssValue showCssValue');
  });
});
