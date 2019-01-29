import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import { getAvatar } from '#/utils/misc';

const Avatar = ({ id }) => <Image src={getAvatar(id)} type="avatar" />;

Avatar.propTypes = {
  id: PropTypes.string
};
export default Avatar;
