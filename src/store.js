import { createStore } from 'redux';

const initialState = {
  shelves: {},
  bookText: {},
};

// Action types
const UPDATE_SHELF = 'UPDATE_SHELF';
const RESET_SHELF = 'RESET_SHELF';
const UPDATE_BOOK_TEXT = 'UPDATE_BOOK_TEXT';

// Action creators
const updateShelf = (genre, titles) => ({
  type: UPDATE_SHELF,
  payload: { genre, titles },
});

const resetShelf = (genre) => ({
  type: RESET_SHELF,
  payload: genre,
});

const updateBookText = (payload) => ({
  type: UPDATE_BOOK_TEXT,
  payload,
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SHELF:
      return {
        ...state,
        shelves: {
          ...state.shelves,
          [action.payload.genre]: action.payload.titles,
        },
      };
    case RESET_SHELF:
      return {
        ...state,
        shelves: {
          ...state.shelves,
          [action.payload]: [],
        },
      };
    case UPDATE_BOOK_TEXT:
      return {
        ...state,
        bookText: {
          ...state.bookText,
          [action.payload.genre]: action.payload.text,
        },
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
export { updateShelf, resetShelf, updateBookText };
