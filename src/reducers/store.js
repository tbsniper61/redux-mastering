import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import ChatReducer from './chat-reducer';

// this is the state of each component, all combined into one through CombineReducers
const allReducers = combineReducers({
  messages: ChatReducer,
});

export default createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk),
  ),
);
