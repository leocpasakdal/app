import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import openSocket from 'socket.io-client';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
  }
  componentDidMount() {
    console.log('component did mount');

    const socket = openSocket('http://localhost:3000');

    this.setState({
      id: Math.random(),
      messages: [],
      socket
    });

    socket.on('message', message => {
      console.log('new message received from server', message);
      this.addMessage(message);
    });
  }
  addMessage(message) {
    this.setState(prevState => ({
      messages: [...prevState.messages, message]
    }));
  }

  onClick = event => {
    event.preventDefault();
    console.log('on click');
    this.state.socket.emit('new-message', {
      id: this.state.id,
      value: `message ${Date.now()}`
    });
  };

  render() {
    console.log('render');

    return (
      <div>
        <h1>Index Rendered</h1>
        {this.state.messages.map((message, index) => (
          <div key={index}>
            {message.id}: {message.value}
          </div>
        ))}
        <button onClick={this.onClick.bind(this)}>{this.state.id}</button>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('index'));
