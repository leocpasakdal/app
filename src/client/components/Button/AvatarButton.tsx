import React, { PureComponent, ReactNode } from 'react';
import Button from './Button';
import Avatar from '../Image/Avatar';
import styles from './button.scss';

interface Props {
  onClick: (event: any) => void;
  name: string;
  id: string;
  selected: boolean;
}

class AvatarButton extends PureComponent<Props> {
  onButtonClick = (): void => {
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

  render(): ReactNode {
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

export default AvatarButton;
