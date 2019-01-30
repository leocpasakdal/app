import { shallow } from 'enzyme';
import React from 'react';
import Footer from '../Footer';
import styles from '../footer.scss';

describe('Footer', () => {
  styles.footer = 'footerCssValue';

  it('returns an instance of div with correct class name', () => {
    const wrapper = shallow(<Footer />);
    const child = wrapper.find('div');

    expect(child).toHaveLength(1);
    expect(child.props().className).toEqual('footerCssValue');
  });
});
