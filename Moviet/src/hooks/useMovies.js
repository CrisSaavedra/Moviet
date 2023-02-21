import { useEffect, useState } from "react";
import { getMovies } from "../api/getMovies";

export const useMovies = (type_fetch) => {
    const [movies, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const copyImages = async () => {
      const mov = await getMovies(type_fetch); // await por que getgift devuelve una promesa!!
      setImages(mov);
        setIsLoading(false);
    }
  
    useEffect(() => {
      copyImages();
    }, [])

    console.log(movies)

    return{
        movies,
        isLoading
    }

    //aca esta el error  buscaar mañana
}