import React from 'react';
import PropTypes from 'prop-types';

import Button from '#/components/Button/Button';
import Image from '#/components/Image/Image';
import Text from '#/components/Text/Text';
import Overlay from './Overlay';
import { NEW_GAME } from '#/utils/language';

const ResultOverlay = ({ onClick, result, show, src }) => (
  <Overlay show={show} type="result">
    <Image src={src} type="result" />
    <Text type="result">{result}</Text>
    <Button onClick={onClick} type="oblong">
      {NEW_GAME}
    </Button>
  </Overlay>
);

ResultOverlay.propTypes = {
  onClick: PropTypes.func,
  result: PropTypes.string,
  show: PropTypes.bool,
  src: PropTypes.string
};
export default ResultOverlay;
