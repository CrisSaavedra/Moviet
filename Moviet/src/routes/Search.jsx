import { useEffect, useState } from "react";
import { getMovies } from "../api/getMovies";
import { LoadImgMovies } from "../component/loadimg/LoadImgMovies";
import { Loading } from '../component/loaderMovies/Loading';
import { useParams } from "react-router-dom";



export const Search = () => {

    const name = useParams().movie;
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    const copyImages = async () => {

        const mov = await getMovies('search', name);
        setMovies(mov);
        setIsLoading(false);

    }


    useEffect(() => {

        copyImages()


    }, [name]);

    return (

        <>
            <div className="container-res">



                <div className='container-title'>
                    <h2>Search</h2>
                </div>

                <div className="container-search">
                    {

                        isLoading ? <Loading /> : <LoadImgMovies movies={movies} />


                    }
                </div>
            </div>

        </>
    )
}
