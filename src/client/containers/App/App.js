import React, { Component } from 'react';
import './app.scss';

import avatar from '../../static/images/avatar1.png';
import win from '../../static/images/win.png';
import loss from '../../static/images/loss.png';
import Button from '../../components/Button/Button';
import Entry from '../../components/Entry/Entry';
import Image from '../../components/Image/Image';
import Header from '../../components/Header/Header';
import ResultOverlay from '../../components/Overlay/ResultOverlay';
import ResultEntry from '../../components/Entry/ResultEntry';
import Text from '../../components/Text/Text';
import TextBox from '../../components/TextBox/TextBox';
import UserEntry from '../../components/Entry/UserEntry';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    return (
      <div>
        <TextBox
          autoFocus
          name="teamName"
          onChange={() => {}}
          placeholder="Your Team Name"
        />
        <Header
          avatar={avatar}
          banner="Win the game or win the job"
          teamName="Scoober Team"
        />
        <Entry type="rectangle" />
        <Image alt="avtar" src={avatar} type="avatar" />
        <ResultEntry>[(-1 + 19) / 3] = 6</ResultEntry>
        <Image alt="winner" src={win} type="result" />
        <Image alt="loss" src={loss} type="result" />
        <Text type="circle">Text</Text>
        <Text type="team">TeamText</Text>
        <Text type="result">TeamText</Text>
        <Button type="circle">0</Button>
        <Button type="oblong">MainButton</Button>
        <UserEntry>+1</UserEntry>
        <ResultOverlay onClick={() => {}} result="You won" show src={win} />
      </div>
    );
  }
}
