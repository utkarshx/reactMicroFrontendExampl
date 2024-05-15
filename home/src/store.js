import { createStore } from 'redux';

// Define reducer
const reducer = (state = { text: 'Initial Text' }, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;