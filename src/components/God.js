import React, { Component } from 'react';
import { connect } from 'react-redux';
import chatReducer from '../reducers/chat-reducer';
import ride from 'ride';

class God extends Component {
  traverseGOD = () => {
    let components = [];
    let dom = this._reactInternalInstance._renderedComponent
    recursiveTraverse(dom)
    console.log(this)
    console.log(components.slice(1))
    return components

    function recursiveTraverse(component) {
      const newComponent = {}

      // if component exists
      if (!component._currentElement) return

      // check if component is a DOM element or a react component
      newComponent.name = component._currentElement.type.name || component._currentElement.type
      newComponent.children = component._currentElement.props.children
      components.push(newComponent)
      
      // save a reference to the rendered children and iterate through them using recur function
      const componentChildren = component._renderedChildren
      if (componentChildren) {
        // loop through array of children
        for (let key in componentChildren) {
          recursiveTraverse(componentChildren[key])
        }
      }
      // loop through single child
      else if (component._renderedComponent) {
        recursiveTraverse(component._renderedComponent)
      }
    };
  }

  componentDidMount() {
    ride(React.Component.prototype, 'setState')
      .after(() => {
        // this.traverseGod()
        this.traverseGOD()
        // console.log('hello')
      });
      console.log(this)
  }

  componentDidUpdate() {
    // this.traverseGod()
    this.traverseGOD()    
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default God;
// export default connect(
//   state => ({ ...state }),
// )(God);
