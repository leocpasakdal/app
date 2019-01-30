import { shallow } from 'enzyme';
import React from 'react';
import Entry from '../Entry';
import styles from '../entry.scss';

describe('Entry', () => {
  styles.entry = 'entryCssValue';
  styles.circle = 'circleCssValue';

  it('returns an instance of div with correct class name', () => {
    const wrapper = shallow(<Entry type="circle" />);
    const child = wrapper.find('div');

    expect(child).toHaveLength(1);
    expect(child.props().className).toEqual('entryCssValue circleCssValue');
  });
});
