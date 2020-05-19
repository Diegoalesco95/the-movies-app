import {
  GET_CATEGORIES,
  GET_SUGGESTIONS,
  SET_MOVIE,
  GET_MOVIES_FOR_CATEGORIES,
  SET_SEARCH_MOVIE,
  SET_ERROR_CATEGORIES,
  SET_ERROR_SUGGESTIONS,
  SET_ERROR_MOVIE,
  SET_ERROR_MOVIES_FOR_CATEGORIES,
  SET_LOADING_CATEGORIES,
  SET_LOADING_SUGGESTIONS,
  SET_LOADING_MOVIES_FOR_CATEGORIES,
} from '../types/index';

export default (state, action) => {
  switch (action.type) {
    case GET_CATEGORIES: {
      return {
        ...state,
        categoriesList: {...state.categoriesList, categories: action.payload},
      };
    }
    case GET_SUGGESTIONS: {
      return {
        ...state,
        suggestionList: {
          ...state.suggestionList,
          suggestions: action.payload,
        },
      };
    }
    case GET_MOVIES_FOR_CATEGORIES: {
      return {
        ...state,
        moviesForCategories: {
          ...state.moviesForCategories,
          categories: action.payload,
        },
      };
    }
    case SET_MOVIE: {
      return {
        ...state,
        selectedMovie: {...state.selectedMovie, ...action.payload},
      };
    }
    case SET_SEARCH_MOVIE: {
      return {
        ...state,
        selectedMovie: {...state.selectedMovie, ...action.payload},
      };
    }
    case SET_ERROR_CATEGORIES: {
      return {
        ...state,
        categoriesList: {...state.categoriesList, errorMsg: action.payload},
      };
    }
    case SET_ERROR_SUGGESTIONS: {
      return {
        ...state,
        suggestionList: {
          ...state.suggestionList,
          errorMsg: action.payload,
        },
      };
    }
    case SET_ERROR_MOVIE: {
      return {
        ...state,
        selectedMovie: {...state.selectedMovie, errorMsg: action.payload},
      };
    }
    case SET_ERROR_MOVIES_FOR_CATEGORIES: {
      return {
        ...state,
        moviesForCategories: {
          ...state.moviesForCategories,
          errorMsg: action.payload,
        },
      };
    }
    case SET_LOADING_CATEGORIES: {
      return {
        ...state,
        categoriesList: {
          ...state.categoriesList,
          loading: action.payload,
        },
      };
    }
    case SET_LOADING_SUGGESTIONS: {
      return {
        ...state,
        suggestionList: {
          ...state.suggestionList,
          loading: action.payload,
        },
      };
    }
    case SET_LOADING_MOVIES_FOR_CATEGORIES: {
      return {
        ...state,
        moviesForCategories: {
          ...state.moviesForCategories,
          loading: action.payload,
        },
      };
    }
    default:
      return state;
  }
};
