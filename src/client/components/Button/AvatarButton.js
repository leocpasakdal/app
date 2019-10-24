import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Avatar from '../Image/Avatar';
import styles from './button.scss';

class AvatarButton extends PureComponent {
  onButtonClick = () => {
    const { onClick, name, id } = this.props;

    onClick({
      target: {
        value: {
          id,
          name
        }
      }
    });
  };

  render() {
    const { selected, id } = this.props;

    return (
      <Button
        className={selected ? styles.selected : ''}
        onClick={this.onButtonClick}
        type="image"
      >
        <Avatar id={id} />
      </Button>
    );
  }
}

AvatarButton.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool
};

export default AvatarButton;
