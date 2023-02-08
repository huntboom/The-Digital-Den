import { createStore } from 'redux';

const initialState = {
  coversTitles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_COVER_TITLES':
      return {
        ...state,
        coversTitles: action.payload
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
