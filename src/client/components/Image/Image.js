import React from 'react';
import PropTypes from 'prop-types';

import styles from './image.scss';
import { joinArrayIgnoreInvalid } from '../../utils/misc';

const Image = ({ alt, src, type }) => {
  const className = joinArrayIgnoreInvalid([styles.image, styles[type]], ' ');

  return (
    <div>
      <img alt={alt} className={className} src={src} />
    </div>
  );
};

Image.defaultProps = {
  alt: '',
  src: ''
};

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.oneOf(['avatar', 'result'])
};

export default Image;
