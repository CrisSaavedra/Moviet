

const URL = 'https://api.themoviedb.org/3/'
const KEY = '?api_key=b810f50a3a5c617eb3f42a2c5bc7a4c4'
const IMG_PATH = 'https://image.tmdb.org/t/p/original'
const PAGE = '&page='
const SEARCH = '&query='

//https://api.themoviedb.org/3/discover/movie?api_key=b810f50a3a5c617eb3f42a2c5bc7a4c4&page=1 discover //movie
//https://api.themoviedb.org/3/search/movie?api_key=b810f50a3a5c617eb3f42a2c5bc7a4c4&query=batman&page=1   //search movie



export const getMovies = async (request) => {

  const { results, total_pages } = await fetch(request)
    .then(response => response.json())
    .then(data => data);

  const movies = results.map(res => {
    if (res.poster_path === null) {
      return null;
    }
    return ({
      id: res.id,
      title: res.original_title,
      img: IMG_PATH + res.poster_path,
    })

  })

  return { movies, total_pages }

}

