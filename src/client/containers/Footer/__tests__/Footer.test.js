import { shallow } from 'enzyme';
import React from 'react';

import FooterComponent from '#/components/Footer/Footer';
import Footer from '../Footer';

const { UnconnectedFooter } = Footer._test;

const defaultProps = {
  inputRequest: jest.fn(),
  resetClientErrorMessage: jest.fn()
};

const prepareTest = (props = defaultProps) => {
  const wrapper = shallow(<UnconnectedFooter {...props} />);
  const instance = wrapper.instance();

  return { instance, wrapper };
};

describe('Footer', () => {
  describe('renders ', () => {
    it('renders the correct component', () => {
      const { wrapper } = prepareTest();
      const child = wrapper.find(FooterComponent);

      expect(child).toHaveLength(1);
    });
  });

  describe('onClick', () => {
    it('calls scrollToBottom', () => {
      const { instance } = prepareTest();

      instance.onClick('test');

      expect(defaultProps.inputRequest.mock.calls).toEqual([['test']]);
      expect(defaultProps.resetClientErrorMessage).toHaveBeenCalled();
    });
  });
});
