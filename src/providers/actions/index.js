import {getMovies, getSuggestion, searchMovie} from '../../services/api';
import {
  GET_CATEGORIES,
  GET_SUGGESTIONS,
  SET_MOVIE,
  SET_SEARCH_MOVIE,
  SET_ERROR_CATEGORIES,
  SET_ERROR_SUGGESTIONS,
  SET_ERROR_MOVIE,
  SET_LOADING_CATEGORIES,
  SET_LOADING_SUGGESTIONS,
} from '../types/index';

export const setCategoriesList = payload => ({
  type: GET_CATEGORIES,
  payload,
});
export const setSuggestionList = payload => ({
  type: GET_SUGGESTIONS,
  payload,
});

export const setMovie = payload => ({
  type: SET_MOVIE,
  payload: {movie: payload},
});

export const setSearchMovie = payload => ({
  type: SET_SEARCH_MOVIE,
  payload: {movie: payload},
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
export const setLoadingcategories = payload => ({
  type: SET_LOADING_CATEGORIES,
  payload,
});
export const setLoadingSuggestions = payload => ({
  type: SET_LOADING_SUGGESTIONS,
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
    return movie[0];
  };
  return dispatch => {
    fetchData()
      .then(movie => {
        dispatch(setSearchMovie(movie));
      })
      .then(() => {
        dispatch(setErrorMovie(null));
      })
      .catch(error => dispatch(setErrorMovie(error.message)));
  };
};
