import { shallow } from 'enzyme';
import React from 'react';

import Button from '../../Button/Button';
import Image from '../../Image/Image';
import Text from '../../Text/Text';

import ResultOverlay from '../ResultOverlay';
import Overlay from '../Overlay';

describe('ResultOverlay', () => {
  it('returns an overlay with image text and button components', () => {
    const wrapper = shallow(<ResultOverlay show />);
    const overlayComp = wrapper.find(Overlay);
    const buttonComp = wrapper.find(Button);
    const imageComp = wrapper.find(Image);
    const textComp = wrapper.find(Text);

    expect(overlayComp).toHaveLength(1);
    expect(overlayComp.props().type).toEqual('result');
    expect(overlayComp.props().show).toEqual(true);

    expect(imageComp).toHaveLength(1);
    expect(imageComp.props().src).toEqual('');
    expect(imageComp.props().type).toEqual('result');

    expect(textComp).toHaveLength(1);
    expect(textComp.props().type).toEqual('result');

    expect(buttonComp).toHaveLength(1);
    expect(buttonComp.props().type).toEqual('oblong');
  });
});
