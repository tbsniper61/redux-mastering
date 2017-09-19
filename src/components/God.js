import React, { Component } from 'react';
import { connect } from 'react-redux';
import chatReducer from '../reducers/chat-reducer';
import ride from 'ride';
import Tree from './Tree';
import D3Tree from './D3Tree'
import Page from './Page';
// import Tree from 'react-d3-tree';
// import TreeD3 from './treeD3';

class God extends Component {
  state = {
    toggle: false,
  }

  traverseGOD = () => {
    console.log(this)
    let components = [];
    let dom = this._reactInternalInstance._renderedComponent

    recursiveTraverse(dom, components)
    console.log(components)
    const sendData = { type: "FROM_PAGE", text: 'hello from postMessage' }
    return components


    function recursiveTraverse(component, parentArr) {
      let newComponent = {}
      if (!component._currentElement) return
      newComponent.name = component._currentElement.type.name || component._currentElement.type
      newComponent.children = [];

      // track state
      if (component) {
        if (component._instance) {
          if (component._instance.state) {
            console.log('STATE !!!!!', component._instance.state)
          }    
        }
      }

      const componentChildren = component._renderedChildren
      parentArr.push(newComponent);
      if (componentChildren) {
        for (let key in componentChildren) {
          recursiveTraverse(componentChildren[key], newComponent.children)
        }
      }
      else if (component._renderedComponent) {
        recursiveTraverse(component._renderedComponent, newComponent.children)
      }
    };
  }

  componentDidMount() {
    this.traverseGOD()
    this.setState({
      toggle: true,
    })
  }
  componentDidUpdate() {
    this.traverseGOD()

    ride(React.Component.prototype, 'setState')
      .after(() => {
        this.traverseGOD();
      })
  }

  render() {
    return (
      <div>
        {this.state.toggle &&
          <D3Tree traverse={this.traverseGOD} />
        }
        {this.props.children}
      </div>
    )
  }
}

export default God;
