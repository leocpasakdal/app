import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './scrollable.scss';

class Scrollable extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    if (this.props.scrollToBottomOnUpdate) {
      this.myRef.current.scrollTo(0, this.myRef.current.scrollHeight);
    }
  };

  render() {
    return (
      <div className={styles.scrollable} ref={this.myRef}>
        {this.props.children}
      </div>
    );
  }
}

Scrollable.propTypes = {
  children: PropTypes.node,
  scrollToBottomOnUpdate: PropTypes.bool
};

export default Scrollable;
