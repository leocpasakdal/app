import { shallow } from 'enzyme';
import React from 'react';

import Button from '#/components/Button/Button';
import { ROUTES } from '#/utils/constants';
import StartPage from '../StartPage';
import styles from '../startPage.scss';

const { UnconnectedStartPage } = StartPage._test;

const defaultProps = {
  history: {
    replace: jest.fn()
  },
  requestConnection: jest.fn(),
  teamName: jest.fn()
};

const prepareTest = (props = defaultProps) => {
  const wrapper = shallow(<UnconnectedStartPage {...props} />);
  const instance = wrapper.instance();

  return { instance, wrapper };
};

describe('StartPage', () => {
  styles.startPage = 'startPageCssValue';
  styles.elementsWrapper = 'elementWrapperCssValue';
  styles.avatarsWrapper = 'avatarsWrapperCssValue';

  describe('render', () => {
    it('renders the children correct', () => {
      const { wrapper } = prepareTest();
      const parentWrapper = wrapper.find('.startPageCssValue');
      const elementWrapper = wrapper.find('.elementWrapperCssValue');
      const avatarsWrapper = wrapper.find('.avatarsWrapperCssValue');
      const buttonComp = wrapper.find(Button);

      expect(parentWrapper).toHaveLength(1);
      expect(elementWrapper).toHaveLength(1);
      expect(avatarsWrapper).toHaveLength(1);
      expect(buttonComp).toHaveLength(1);
    });
  });

  describe('goToGame', () => {
    it('redirects to Game page', () => {
      const { instance } = prepareTest();

      instance.goToGame();

      expect(defaultProps.history.replace.mock.calls).toEqual([[ROUTES.GAME]]);
    });
  });

  describe('onClick', () => {
    it('calls requestConnection with correct values', () => {
      const { instance } = prepareTest();

      instance.setState({
        avatarId: 'avatarIdValue',
        teamName: 'teamNameValue'
      });

      instance.onClick();

      expect(defaultProps.requestConnection.mock.calls).toEqual([
        [
          {
            avatarId: 'avatarIdValue',
            teamName: 'teamNameValue'
          }
        ]
      ]);
    });
  });

  describe('onAvatarChange', () => {
    it('set avatarId state', () => {
      const { instance } = prepareTest();

      instance.onAvatarChange({
        target: {
          value: {
            id: 'avatarId',
            name: 'avatarName'
          }
        }
      });

      expect(instance.state.avatarId).toEqual('avatarId');
      expect(instance.state.teamName).toEqual('avatarName');
    });
  });

  describe('componentDidUpdate', () => {
    it('calls goToGame when the game is connected', () => {
      const { instance } = prepareTest({ ...defaultProps, connected: true });

      jest.spyOn(instance, 'goToGame');

      instance.componentDidUpdate({ connected: false });

      expect(instance.goToGame).toHaveBeenCalled();
    });
  });
});
