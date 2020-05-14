const BASE_API = 'https://yts.mx/api/v2/';

export const getSuggestion = async id => {
  const query = await fetch(
    `${BASE_API}movie_suggestions.json?movie_id=${id}`,
  ).then(response => response.json().then(({data}) => data.movies));
  return query;
};
export const getMovies = async () => {
  const query = await fetch(`${BASE_API}list_movies.json`).then(response =>
    response.json().then(({data}) => data.movies),
  );
  return query;
};
