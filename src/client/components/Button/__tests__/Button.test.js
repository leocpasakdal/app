import { shallow } from 'enzyme';
import React from 'react';
import Button from '../Button';
import styles from '../button.scss';

import { noop } from '#/utils/misc';

describe('Button', () => {
  styles.button = 'buttonCssValue';
  styles.blue = 'colorCssValue';
  styles.circle = 'typeCssValue';
  styles.enabled = 'enabledValue';

  it('returns an instance of button with correct props', () => {
    const wrapper = shallow(
      <Button className="classNameValue" color="blue" type="circle" />
    );
    const button = wrapper.find('button');

    expect(button).toHaveLength(1);
    expect(button.props().className).toEqual(
      'classNameValue buttonCssValue colorCssValue typeCssValue enabledValue'
    );
    expect(button.props().onClick).toEqual(noop);
  });
});
