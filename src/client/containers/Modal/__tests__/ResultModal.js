import { shallow } from 'enzyme';
import React from 'react';

import ResultModal from '../ResultModal';
import ResultOverlay from '#/components/Overlay/ResultOverlay';

const { UnconnectedResultModal } = ResultModal._test;

const defaultProps = {
  exitGameRequest: jest.fn()
};

const prepareTest = (props = defaultProps) => {
  const wrapper = shallow(<UnconnectedResultModal {...props} />);
  const instance = wrapper.instance();

  return { instance, wrapper };
};

describe('ResultModal', () => {
  describe('render', () => {
    it('renders a ResultOverlay', () => {
      const { wrapper } = prepareTest();
      const overlayComp = wrapper.find(ResultOverlay);

      expect(overlayComp).toHaveLength(1);
    });

    it('onClick', () => {
      const { instance } = prepareTest();

      instance.onClick();

      expect(defaultProps.exitGameRequest).toHaveBeenCalled();
    });
  });
});
