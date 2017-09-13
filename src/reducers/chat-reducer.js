// the initial state
const initState = {
  messages: [],
};

// dispatch actions
const POST_MESSAGE = 'POST_MESSAGE';
const GET_MESSAGES = 'GET_MESSAGES';

// payload is the incoming message
export const postMessage = (message) => {
  console.log('post message reducer');
  return {
    type: POST_MESSAGE,
    payload: message,
  };
};

export const getMessages = (messages) => {
  console.log('getting messages from server and updating redux');
  return {
    type: GET_MESSAGES,
    payload: messages,
  };
};

// the first time this runs, it will set state to an empty array
export default (state = initState, action) => {
  switch (action.type) {
    case POST_MESSAGE:
      // this is our set state
      return { ...state, messages: state.messages.concat(action.payload) };
    case GET_MESSAGES:
      return { messages: action.payload }; // update application state
    default:
      return state;
  }
};
