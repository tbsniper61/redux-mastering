import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Chat from './components/Chat';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './reducers/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('groot'));
