import { shallow } from 'enzyme';
import React from 'react';

import Entries from '#/components/Entries/Entries';
import Layout from '#/containers/Layout/Layout';
import Scrollable from '#/components/Scrollable/Scrollable';
import Text from '#/components/Text/Text';

import GameArea from '../GameArea';

const { UnconnectedGameArea } = GameArea._test;

const defaultProps = {
  startGameRequest: jest.fn(),
  resetClientErrorMessage: jest.fn()
};

const prepareTest = (props = defaultProps) => {
  const wrapper = shallow(<UnconnectedGameArea {...props} />);
  const instance = wrapper.instance();

  return { instance, wrapper };
};

describe('GameArea', () => {
  describe('renders', () => {
    it('renders the correct components', () => {
      const { wrapper } = prepareTest();
      const layoutComp = wrapper.find(Layout);
      const entriesComp = wrapper.find(Entries);
      const scrollable = wrapper.find(Scrollable);
      const textComp = wrapper.find(Text);

      expect(layoutComp).toHaveLength(1);
      expect(entriesComp).toHaveLength(1);
      expect(textComp).toHaveLength(1);
      expect(scrollable).toHaveLength(1);
    });
  });

  describe('componentDidMount', () => {
    it('calls startGameRequest if connected and game is not yet started', () => {
      const { instance } = prepareTest({
        ...defaultProps,
        connected: true,
        start: false
      });

      instance.componentDidMount();

      expect(defaultProps.startGameRequest).toHaveBeenCalled();
      expect(defaultProps.resetClientErrorMessage).toHaveBeenCalled();
    });

    it('does not call startGamRequest if game has already started', () => {
      const { instance } = prepareTest({
        ...defaultProps,
        connected: true,
        start: true
      });

      instance.componentDidMount();

      expect(defaultProps.startGameRequest).not.toHaveBeenCalled();
      expect(defaultProps.resetClientErrorMessage).toHaveBeenCalled();
    });
  });
});
