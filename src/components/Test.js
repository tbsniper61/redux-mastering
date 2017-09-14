import React, { Component } from 'react';
import { connect } from 'react-redux';
import chatReducer from '../reducers/chat-reducer';


class Test extends Component {
  render() {
    console.log(this);    
    return (
      <div>
        {this.props.children}
      </div>      
    )
  }
}

// export default Test;
export default connect(
  state => ({...state}),
)(Test);
