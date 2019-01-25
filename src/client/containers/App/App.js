import React, { Component } from 'react';
import styles from './app.scss';

import avatar from '../../static/images/avatar1.png';
import win from '../../static/images/win.png';
import loss from '../../static/images/loss.png';
import Button from '../../components/Button/Button';
import Image from '../../components/Image/Image';
import Text from '../../components/Text/Text';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;

    return (
      <div>
        <Image alt="avtar" src={avatar} type="avatar" />
        <Image alt="winner" src={win} type="result" />
        <Image alt="loss" src={loss} type="result" />
        <Text type="circle">Text</Text>
        <Text type="team">TeamText</Text>
        <Text type="result">TeamText</Text>
        <Button type="circle">0</Button>
        <Button type="oblong">MainButton</Button>
      </div>
    );
  }
}
