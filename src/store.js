import { createStore } from 'redux';

const initialState = {
  coversTitles: [],
  bookText: null, // added this line
};

// Action type
const UPDATE_BOOK_TEXT = 'UPDATE_BOOK_TEXT';

// Action creator
const updateBookText = (text) => ({
  type: UPDATE_BOOK_TEXT,
  payload: text,
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_COVER_TITLES':
      return {
        ...state,
        coversTitles: action.payload
      };
    case UPDATE_BOOK_TEXT:
      return {
        ...state,
        bookText: action.payload
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
export { updateBookText };
