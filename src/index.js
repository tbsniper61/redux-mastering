import React from 'react';
import ReactDOM from 'react-dom';
import God from './components/God';
import App from './components/App';
import Chat from './components/Chat';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './reducers/store'


// console.log('*****')
// console.log(React)
// console.log(React.Component.prototype.setState)
// console.log('*****')


ReactDOM.render(
  <Provider store={store}>
    <God>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/chat" component={Chat} />
        </Switch>
      </BrowserRouter>
    </God>
  </Provider>
  ,
  document.getElementById('groot'),
);
