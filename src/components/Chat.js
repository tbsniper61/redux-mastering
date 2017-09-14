import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postMessage, getMessages } from '../reducers/chat-reducer';
import axios from 'axios';
import MessageList from './MessageList';

// component to type in message and post to database
class Chat extends Component {
  state = { text: '' }

  componentDidMount() {
    this.getData();
    // console.log('**** chat ****')
    // console.log(this);
  }

  handleChange = (evt) => {
    this.setState({ text: evt.target.value });
  }

  getData = () => {
    axios.get('/chat')
    .then((res) => {
      this.props.getMessages(res.data);
    })
  }

  postData = () => {
    axios.post('/chat', {message: this.state.text, author: 'will'})
    .then((res) => {
      this.props.postMessage(res.data);
    });
  }

  render() {
    return (
      <div>
        <MessageList />          
        <input type='text' placeholder="Message"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button type='submit' value="Enter Message" onClick={this.postData} />
      </div>
    )
  }
}

// connect the component to the store (aka make this component see the state)
export default connect(
  // REDUX - MAKE REDUX STATE A REACT PROP
  (state) => ({ messages: state.messages }), // connect messages from redux to this component
  // REDUX - MAKE DISPATCH FUNCTION A PROP
  { postMessage, getMessages } // bind this function to this component
)(Chat); // invoke the function to make a chat component
