import { shallow } from 'enzyme';
import React from 'react';

import HeaderComponent from '../../../components/Header/Header';

import Header from '../Header';

const { UnconnectedHeader } = Header._test;

const defaultProps = {
  avatarId: 'avataridValue',
  banner: 'bannerValue',
  teamName: 'teamName'
};

const prepareTest = (props = defaultProps) => {
  const wrapper = shallow(<UnconnectedHeader {...props} />);
  const instance = wrapper.instance();

  return { instance, wrapper };
};

describe('Header', () => {
  describe('render', () => {
    it('renders the correct components', () => {
      const { wrapper } = prepareTest();
      const headerComp = wrapper.find(HeaderComponent);

      expect(headerComp).toHaveLength(1);
      expect(headerComp.props().avatarId).toEqual(defaultProps.avatarId);
      expect(headerComp.props().banner).toEqual(defaultProps.banner);
      expect(headerComp.props().teamName).toEqual(defaultProps.teamName);
    });
  });
});
