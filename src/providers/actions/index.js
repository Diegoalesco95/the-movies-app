import {getMovies, getSuggestion} from '../../services/api';
import {GET_CATEGORIES, GET_SUGGESTIONS, SET_MOVIE} from '../types/index';

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

export const getCategoriesList = () => {
  const fetchData = async () => {
    const categoriesList = await getMovies();
    return categoriesList;
  };
  return dispatch => {
    fetchData().then(categoriesList => {
      dispatch(setCategoriesList(categoriesList));
    });
  };
};

export const getSuggestionList = payload => {
  const fetchData = async () => {
    const suggestionList = await getSuggestion(payload);
    return suggestionList;
  };
  return dispatch => {
    fetchData().then(suggestionList => {
      dispatch(setSuggestionList(suggestionList));
    });
  };
};
