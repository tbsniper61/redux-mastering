import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevtools } from 'redux-devtools-extension';
import ChatReducer from './chat-reducer';

const allReducers = combineReducers({
  messages: ChatReducer,
});

export default createStore(
  allReducers,
  composeWithDevtools(applyMiddleware(thunk),
  ),
);
