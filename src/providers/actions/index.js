import {
  getMovies,
  getSuggestion,
  searchMovie,
  getMoviesForCategories,
} from '../../services/api';
import {
  GET_CATEGORIES,
  GET_SUGGESTIONS,
  GET_MOVIES_FOR_CATEGORIES,
  SET_MOVIE,
  SET_SEARCH_MOVIE,
  SET_ERROR_CATEGORIES,
  SET_ERROR_SUGGESTIONS,
  SET_ERROR_MOVIE,
  SET_ERROR_MOVIES_FOR_CATEGORIES,
  SET_LOADING_CATEGORIES,
  SET_LOADING_SUGGESTIONS,
  SET_LOADING_MOVIES_FOR_CATEGORIES,
  SET_USER,
  REMOVE_USER,
} from '../types/index';

export const setCategoriesList = payload => ({
  type: GET_CATEGORIES,
  payload,
});
export const setSuggestionList = payload => ({
  type: GET_SUGGESTIONS,
  payload,
});

export const setMoviesForCategories = payload => ({
  type: GET_MOVIES_FOR_CATEGORIES,
  payload,
});

export const setMovie = payload => ({
  type: SET_MOVIE,
  payload: {movie: payload},
});

export const setSearchMovie = payload => ({
  type: SET_SEARCH_MOVIE,
  payload: {movies: payload},
});

export const setErrorCategories = payload => ({
  type: SET_ERROR_CATEGORIES,
  payload,
});
export const setErrorSuggestion = payload => ({
  type: SET_ERROR_SUGGESTIONS,
  payload,
});
export const setErrorMovie = payload => ({
  type: SET_ERROR_MOVIE,
  payload,
});
export const setErrorMoviesForCategories = payload => ({
  type: SET_ERROR_MOVIES_FOR_CATEGORIES,
  payload,
});
export const setLoadingcategories = payload => ({
  type: SET_LOADING_CATEGORIES,
  payload,
});
export const setLoadingSuggestions = payload => ({
  type: SET_LOADING_SUGGESTIONS,
  payload,
});
export const setLoadingMoviesForCategories = payload => ({
  type: SET_LOADING_MOVIES_FOR_CATEGORIES,
  payload,
});
export const setUser = payload => ({
  type: SET_USER,
  payload,
});
export const removeUser = payload => ({
  type: REMOVE_USER,
  payload,
});

export const getCategoriesList = () => {
  const fetchData = async () => {
    const categoriesList = await getMovies();
    return categoriesList;
  };
  return dispatch => {
    dispatch(setLoadingcategories(true));
    fetchData()
      .then(categoriesList => {
        dispatch(setCategoriesList(categoriesList));
      })
      .then(() => {
        dispatch(setErrorCategories(null));
      })
      .then(() => {
        dispatch(setLoadingcategories(false));
      })
      .catch(error => dispatch(setErrorCategories(error.message)))
      .then(() => {
        dispatch(setLoadingcategories(false));
      });
  };
};

export const getSuggestionList = payload => {
  const fetchData = async () => {
    const suggestionList = await getSuggestion(payload);
    return suggestionList;
  };
  return dispatch => {
    dispatch(setLoadingSuggestions(true));
    fetchData()
      .then(suggestionList => {
        dispatch(setSuggestionList(suggestionList));
      })
      .then(() => {
        dispatch(setErrorSuggestion(null));
      })
      .then(() => {
        dispatch(setLoadingSuggestions(false));
      })
      .catch(error => dispatch(setErrorSuggestion(error.message)))
      .then(() => {
        dispatch(setLoadingSuggestions(false));
      });
  };
};

export const getSearchMovie = payload => {
  const fetchData = async () => {
    const movie = await searchMovie(payload);
    return movie;
  };
  return dispatch => {
    fetchData()
      .then(movie => {
        dispatch(setSearchMovie(movie));
        dispatch(setMovie(movie[0]));
      })
      .then(() => {
        dispatch(setErrorMovie(null));
      })
      .catch(error => dispatch(setErrorMovie(error.message)));
  };
};

export const getMoviesForCategoriesList = payload => {
  const fetchData = async () => {
    const moviesCategoriesList = await getMoviesForCategories(payload);
    return moviesCategoriesList;
  };
  return dispatch => {
    dispatch(setLoadingMoviesForCategories(true));
    fetchData()
      .then(moviesCategoriesList => {
        dispatch(setMoviesForCategories(moviesCategoriesList));
      })
      .then(() => {
        dispatch(setErrorMoviesForCategories(null));
      })
      .then(() => {
        dispatch(setLoadingMoviesForCategories(false));
      })
      .catch(error => dispatch(setErrorMoviesForCategories(error.message)))
      .then(() => {
        dispatch(setLoadingMoviesForCategories(false));
      });
  };
};
