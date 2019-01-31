import { shallow } from 'enzyme';
import React from 'react';

import { Redirect } from 'react-router-dom';

import { MODAL_TYPE } from '#/utils/constants';
import ResultModal from '../ResultModal';
import Modal from '../Modal';

const { UnconnectedModal } = Modal._test;

const defaultProps = {
  modalType: MODAL_TYPE.GAME_RESULT
};

const prepareTest = (props = defaultProps) => {
  const wrapper = shallow(<UnconnectedModal {...props} />);
  const instance = wrapper.instance();

  return { instance, wrapper };
};

describe('Modal', () => {
  describe('render', () => {
    it('renders the correct Modal', () => {
      const { wrapper } = prepareTest();
      const modalResult = wrapper.find(ResultModal);

      expect(modalResult).toHaveLength(1);
    });

    it('does not render a modal when type is not in the mappings', () => {
      const { wrapper } = prepareTest({ modalType: 'test' });
      const modalResult = wrapper.find(Redirect);

      expect(modalResult).toHaveLength(0);
    });
  });
});
