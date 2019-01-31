import { shallow } from 'enzyme';
import React from 'react';

import Scrollable from '../Scrollable';
import styles from '../scrollable.scss';

const prepareTest = props => {
  const wrapper = shallow(<Scrollable {...props} />);
  const instance = wrapper.instance();

  return { instance, wrapper };
};

describe('Scrollable', () => {
  styles.scrollable = 'scrollableCssValue';

  describe('render', () => {
    it('renders a div', () => {
      const { wrapper } = prepareTest();
      const child = wrapper.find('div');

      expect(child).toHaveLength(1);
      expect(child.props().className).toEqual('scrollableCssValue');
    });
  });

  describe('componentDidMount', () => {
    it('calls scrollToBottom', () => {
      const { instance } = prepareTest();

      jest.spyOn(instance, 'scrollToBottom');

      instance.componentDidMount();

      expect(instance.scrollToBottom).toHaveBeenCalled();
    });
  });

  describe('componentDidUpdate', () => {
    it('calls scrollToBottom', () => {
      const { instance } = prepareTest();

      jest.spyOn(instance, 'scrollToBottom');

      instance.componentDidUpdate();

      expect(instance.scrollToBottom).toHaveBeenCalled();
    });
  });
});
