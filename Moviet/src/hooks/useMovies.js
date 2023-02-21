import { useEffect, useState } from "react";
import { getMovies } from "../api/getMovies";

export const useMovies = (type_fetch, page) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const copyImages = async () => {
    const mov = await getMovies(type_fetch,page); // await por que getgift devuelve una promesa!!
    setMovies(mov);
    setIsLoading(false);
  
  }

  useEffect(() => {
    copyImages();
  }, [])



  return {
    movies,
    isLoading
  }


}