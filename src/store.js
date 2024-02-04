import { createStore } from 'redux';

const initialState = {
  coversTitles: [],
  bookText: null,
};

// Action types
const UPDATE_COVER_TITLES = 'UPDATE_COVER_TITLES';
const RESET_COVER_TITLES = 'RESET_COVER_TITLES';
const UPDATE_BOOK_TEXT = 'UPDATE_BOOK_TEXT';

// Action creators
const updateCoverTitles = (titles) => ({
  type: UPDATE_COVER_TITLES,
  payload: titles,
});

const resetCoverTitles = () => ({
  type: RESET_COVER_TITLES,
});

const updateBookText = (text) => ({
  type: UPDATE_BOOK_TEXT,
  payload: text,
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COVER_TITLES:
      return {
        ...state,
        coversTitles: action.payload,
      };
    case RESET_COVER_TITLES:
      return {
        ...state,
        coversTitles: [],
      };
    case UPDATE_BOOK_TEXT:
      return {
        ...state,
        bookText: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
export { updateCoverTitles, resetCoverTitles, updateBookText };
