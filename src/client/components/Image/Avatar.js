import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import { getAvatar } from '#/utils/misc';

const Avatar = ({ id, className }) => (
  <Image className={className} src={getAvatar(id)} type="avatar" />
);

Avatar.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string
};
export default Avatar;
