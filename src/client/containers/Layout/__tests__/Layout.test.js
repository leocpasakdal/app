import { shallow } from 'enzyme';
import React from 'react';

import { Redirect } from 'react-router-dom';

import Body from '../../../components/Body/Body';
import HeaderContainer from '../../Header/Header';
import FooterContainer from '../../Footer/Footer';
import ModalContainer from '../../Modal/Modal';
import Layout from '../Layout';

const { UnconnectedLayout } = Layout._test;

const defaultProps = {
  connected: true
};

const prepareTest = (props = defaultProps) => {
  const wrapper = shallow(<UnconnectedLayout {...props} />);
  const instance = wrapper.instance();

  return { instance, wrapper };
};

describe('Layout', () => {
  describe('render', () => {
    it('renders the correct children', () => {
      const { wrapper } = prepareTest();
      const bodyComp = wrapper.find(Body);
      const headerContainer = wrapper.find(HeaderContainer);
      const modalContainer = wrapper.find(ModalContainer);
      const footerContainer = wrapper.find(FooterContainer);

      expect(bodyComp).toHaveLength(1);
      expect(headerContainer).toHaveLength(1);
      expect(modalContainer).toHaveLength(1);
      expect(footerContainer).toHaveLength(1);
    });

    it('returns a redirect component', () => {
      const { wrapper } = prepareTest({ connected: false });
      const child = wrapper.find(Redirect);

      expect(child).toHaveLength(1);
    });
  });
});
