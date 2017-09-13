// dispatch actions
const POST_MESSAGE = 'POST_MESSAGE';
const GET_MESSAGES = 'GET_MESSAGES';
const DELETE_MESSAGE = 'DELETE_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';


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

export const deleteMessage = (message) => {
  console.log('dispatched deleted');
  return {
    type: DELETE_MESSAGE,
    payload: message,
  };
};

export const updateMessage = message => ({
  type: UPDATE_MESSAGE,
  payload: message,
});


// the first time this runs, it will set state to an empty array
export default (state = [], action) => {
  switch (action.type) {
    case POST_MESSAGE:
      return [...state, action.payload];

    case GET_MESSAGES:
      return action.payload; // update application state

    case DELETE_MESSAGE:
      const copy = state.slice();

      for (let i = 0; i < copy.length; i++) {
        if (copy[i]._id === action.payload._id) {
          copy.splice(i, 1);
          break;
        }
      }

      // test with deep freeze
      return copy;

    case UPDATE_MESSAGE:
      console.log('UPDATEMESSAGE')
      const copyUpdate = state.slice();
      let index;
      for (let i = 0; i < copyUpdate.length; i++) {
        if (copyUpdate[i]._id === action.payload._id) {
          copyUpdate[i] = action.payload;
          break;
        }
      }

      return copyUpdate;
    default:
      return state;
  }
};
