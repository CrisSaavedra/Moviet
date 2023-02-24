import './styles/style.css';
import heart from '../../shareImg/heart.svg';
import { useEffect, useState } from 'react';
import { getMovies } from '../../api/getMovies';
import { LoadMoviesHome } from '../loadMoviesHome/LoadMoviesHome';
import { Loading } from '../loaderMovies/Loading';

export const MostViews = () => {

    const [moviesTotal, setMoviesTotal] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const copyImages = async () => {

        let req = `https://api.themoviedb.org/3/movie/top_rated?api_key=b810f50a3a5c617eb3f42a2c5bc7a4c4`
        const { movies } = await getMovies(req);
        setMoviesTotal(movies);
        setIsLoading(false);
        return movies;

    }


    useEffect(() => {
        setMoviesTotal(copyImages());

    }, []);


    return (
        <>
            <div className='cont-most'>
                <div className='title-mostview'>
                    <h3>THE MOST VIEWED</h3>
                </div>
                <div className="mostview">
                    <div className="mostview-container">

                        {

                            isLoading ? <Loading /> : <LoadMoviesHome movies={moviesTotal} />
                        }

                    </div>
                </div>

            </div>
        </>

    )
}
