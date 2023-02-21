import { key } from "localforage";
import { useState } from "react";

const URL = 'https://api.themoviedb.org/3/'
const KEY = '?api_key=b810f50a3a5c617eb3f42a2c5bc7a4c4'
const IMG_PATH = 'https://image.tmdb.org/t/p/original'
const PARAMS = '&page='

//https://api.themoviedb.org/3/discover/movie?api_key=b810f50a3a5c617eb3f42a2c5bc7a4c4&page=1

export const getMovies = async (type_fetch,page) => {
  //type_fetch = discover / search
  const url = URL + type_fetch+ '/movie' + KEY + PARAMS + page;
  
  const { results } = await fetch(url)
    .then(response => response.json())
    .then(data => data);



  const movies = results.map(res => ({

    id: res.id,
    title: res.original_title,
    img: IMG_PATH + res.poster_path,
  }))

  return movies

}

