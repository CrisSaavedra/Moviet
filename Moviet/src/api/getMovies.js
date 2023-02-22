import { key } from "localforage";
import { useState } from "react";

const URL = 'https://api.themoviedb.org/3/'
const KEY = '?api_key=b810f50a3a5c617eb3f42a2c5bc7a4c4'
const IMG_PATH = 'https://image.tmdb.org/t/p/original'
const DISCOVER = '&page='
const SEARCH = '&query='

//https://api.themoviedb.org/3/discover/movie?api_key=b810f50a3a5c617eb3f42a2c5bc7a4c4&page=1 discover //movie
//https://api.themoviedb.org/3/search/movie?api_key=b810f50a3a5c617eb3f42a2c5bc7a4c4&query=batman  //search movie



export const getMovies = async (type_fetch, search) => {
  //type_fetch = discover / search
  const url = type_fetch === 'discover' ? URL + type_fetch + '/movie' + KEY + DISCOVER + search : URL + type_fetch + '/movie' + KEY + SEARCH + search
 
  const { results } = await fetch(url)
    .then(response => response.json())
    .then(data => data);



  const movies = results.map(res => {
   if( res.poster_path === null){
      return null;
   }
    return ({
      id: res.id,
      title: res.original_title,
      img: IMG_PATH + res.poster_path,
    })
    
  })

  return movies

}

