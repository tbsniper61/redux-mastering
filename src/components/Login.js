import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isLoggedIn: false
  }

  handleChange = (evt) => {
    this.setState( { username: evt.target.value } )
  }
  handlePassword = (evt) => {
    this.setState( { password: evt.target.value } )
  }

  handleButton = (e) => {
    e.preventDefault();
    console.log('hello')
    if (this.state.username === 'hello' && this.state.password === 'world') {
      this.setState({
        isLoggedIn: true
      })
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Redirect to='/chat'/>
      )
    }
    return (
      <div className="login">
        <form>
          <input type="text" placeholder="username" ref={this.state.username} onChange={this.handleChange} />
          <input type="password" placeholder="password" ref={this.state.password} onChange={this.handlePassword} />
          <button type="submit" onClick={this.handleButton}>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;
