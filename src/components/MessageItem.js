import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { deleteMessage, updateMessage } from '../reducers/chat-reducer';


class MessageItem extends Component {

  state= { text: '' }

  onHandleDelete = () => {
    axios.delete(`/chat/${this.props._id}`)
    .then((res) => {
      this.props.deleteMessage(res.data)
      this.setState({
        text: ''
      })
    })
  }

  onKeyPress = (event) => {
    if(event.keyCode === 13) {
      axios.patch(`/chat/${this.props._id}`, { message: this.state.text })
      .then((res) => {
        this.props.updateMessage(res.data)
      })
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value})
  }

  render() {
    return (
      <div>
        <p>{this.props.message}</p>
        <p>{this.props.author}</p>
        <p>{this.props.time}</p>
        <input placeholder="input" type="text" value={this.state.text} onChange={this.handleChange} onKeyUp={this.onKeyPress}></input>
        <button onClick = { this.onHandleDelete }>Delete</button>
      </div>
    )
  }
}

export default connect(
  (state) => ({ messages: state.messages }), 
  { deleteMessage, updateMessage } 
)(MessageItem)

