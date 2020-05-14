import {GET_CATEGORIES, GET_SUGGESTIONS} from '../types/index';

export default (state, action) => {
  switch (action.type) {
    case GET_CATEGORIES: {
      return {...state, categoriesList: action.payload};
    }
    case GET_SUGGESTIONS: {
      return {...state, suggestionList: action.payload};
    }
    default:
      return state;
  }
};
