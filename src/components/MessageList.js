import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postMessage } from '../reducers/chat-reducer';
import MessageItem from './MessageItem';

// component to hold list of chat messages
class MessageList extends Component {
  render() {
    return (
      <div className="message-list" >
        {this.props.messages.map(message => 
          <MessageItem key={message._id} {...message} />
        )}
      </div>
    );
  }
}

// this line is making a props called messages from the state
export default connect(
  (state) => ({ messages: state.messages }),
  { postMessage }
)(MessageList);
