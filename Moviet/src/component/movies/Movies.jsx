
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from '../../api/getMovies';
import { Loading } from '../loaderMovies/Loading';
import { LoadImgMovies } from '../loadimg/LoadImgMovies';
import './styles/style.css'




export const Movies = ({ type }) => {


    const name = useParams().movie;
    const [page, setPage] = useState(1);
    const [totalPages, settotalPages] = useState(0);
    const [moviesTotal, setMoviesTotal] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const selectPage = (num) => {
       

        if (page < totalPages && page > 0) {
            setPage(page + num);

        }

    };

    const copyImages = async () => {
        
        if (type === 'discover') {
            let req = `https://api.themoviedb.org/3/discover/movie?api_key=b810f50a3a5c617eb3f42a2c5bc7a4c4&page=${page}`;
            const { movies, total_pages } = await getMovies(req);
            setMoviesTotal(movies);
            settotalPages(total_pages);
            setIsLoading(false);

        } else {
            let req = `https://api.themoviedb.org/3/search/movie?api_key=b810f50a3a5c617eb3f42a2c5bc7a4c4&query=${name}&page=${page}`
            const { movies, total_pages } = await getMovies(req);
            setMoviesTotal(movies);
            settotalPages(total_pages);
            setIsLoading(false);

        }

    }

    useEffect(() => {

        setPage(1);

    }, [name]);

    useEffect(() => {

        copyImages()

    }, [page, name]);







    return (

        <>
            <div className='container-res'>


                <div className='container-title'>
                    {
                        type === 'discover' ? <h2>Discover</h2> : <h2>Search</h2>
                    }
                </div>

                {
                    isLoading ? <Loading /> : <LoadImgMovies movies={moviesTotal} />
                }

                {
                    totalPages > 1 ?
                        <div className='next-back-button'>
                            <div className={page > 1 ? 'back-button' : 'back-button offVisible'}>
                                <button type="button" className="btn btn-lg" onClick={() => selectPage(-1)}>Back</button>
                            </div>


                            <div className='next-button'>
                                <button type="button" className="btn  btn-lg" onClick={() => selectPage(1)}>Next</button>

                            </div>
                        </div>

                        : null
                }

            </div>




        </>
    )
}
