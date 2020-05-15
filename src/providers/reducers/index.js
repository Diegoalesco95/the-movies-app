import {GET_CATEGORIES, GET_SUGGESTIONS, SET_MOVIE} from '../types/index';

export default (state, action) => {
  switch (action.type) {
    case GET_CATEGORIES: {
      return {...state, categoriesList: action.payload};
    }
    case GET_SUGGESTIONS: {
      return {...state, suggestionList: action.payload};
    }
    case SET_MOVIE: {
      return {...state, selectedMovie: action.payload.movie};
    }
    default:
      return state;
  }
};
