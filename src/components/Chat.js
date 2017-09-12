import React, { Component } from 'react'

class Chat extends Component {
  render () {
    return (
     <div>
       <h1>CHAT CONTAINER COMONENT HERE</h1>
       <input type='text' placeholder="Message" />
       <button type='submit' value="Enter Message" />
      </div>
    )
  }
}

export default Chat