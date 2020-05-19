const BASE_API = 'https://yts.mx/api/v2/';

export const getMovies = async () => {
  const query = await fetch(`${BASE_API}list_movies.json?limit=50`).then(
    response =>
      response
        .json()
        .then(({data}) => data.movies)
        .then(list =>
          list.map(item => {
            return {
              id: item.id,
              genres: item.genres[0],
              cover: item.medium_cover_image,
            };
          }),
        )
        .then(list => {
          const newList = list.reduce(
            (tempList, element) =>
              tempList.includes(element.genres)
                ? tempList
                : [...tempList, element, element.genres],
            [],
          );
          return newList;
        })
        .then(list =>
          list.filter(item => {
            if (item.id) {
              return item;
            }
          }),
        ),
  );
  return query;
};
export const getSuggestion = async id => {
  const query = await fetch(
    `${BASE_API}movie_suggestions.json?movie_id=${id}`,
  ).then(response => response.json().then(({data}) => data.movies));
  return query;
};
export const searchMovie = async title => {
  const query = await fetch(
    `${BASE_API}list_movies.json?limit=1&sort_by=rating&query_term=${title}`,
  ).then(response => response.json().then(({data}) => data.movies));
  return query;
};
export const getMoviesForCategories = async category => {
  const query = await fetch(
    `${BASE_API}list_movies.json?genre=${category}`,
  ).then(response => response.json().then(({data}) => data.movies));
  return query;
};
