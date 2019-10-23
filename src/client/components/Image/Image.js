import React from 'react';
import PropTypes from 'prop-types';

import styles from './image.scss';
import { joinArrayIgnoreInvalid } from '../../utils/misc';

const Image = ({ alt, className, src, type }) => {
  const classNames = joinArrayIgnoreInvalid(
    [styles.image, styles[type], className],
    ' '
  );

  return (
    <div>
      <img alt={alt} className={classNames} src={src} />
    </div>
  );
};

Image.defaultProps = {
  alt: '',
  src: ''
};

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.oneOf(['avatar', 'result']).isRequired
};

export default Image;
