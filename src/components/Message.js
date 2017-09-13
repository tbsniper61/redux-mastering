import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postMessage } from '../reducers/chat-reducer';

// component to be each message
const Message = ({ message, author, time }) => ( // <--- stateless uses parens
  <div className="message">
    <p className="m">{message}</p>
    <p className="a">{author}</p>
    <p className="t">{time}</p>
  </div>
);

// component to hold list of chat messages
class MessageList extends Component {
  render() {
    return (
      <div className="message-list" >
        {this.props.messages.messages.map(message => 
          <Message key={message._id} {...message} />
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
