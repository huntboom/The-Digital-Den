import { createStore } from 'redux';

const initialState = {
  coverTitles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_COVER_TITLES':
      return {
        ...state,
        coverTitles: action.payload
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
