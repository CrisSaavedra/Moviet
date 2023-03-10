import '../homeMovies/styles/style.css';
import { useEffect, useState } from 'react';
import { getMovies } from '../../api/getMovies';
import { Loading } from '../loaderMovies/Loading';
import { useOutletContext } from 'react-router-dom';
import { LoadPopularMovies } from '../loadPopularmovies/LoadPopularMovies';


export const PopularMovies = ({ url }) => {

    const [moviesTotal, setMoviesTotal] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [user] = useOutletContext();


    const copyMovies = async () => {
        const { movies } = await getMovies(url);
        if (user.login) {
            setMoviesTotal(movies);
        } else {
            setMoviesTotal(movies);
        }
        setIsLoading(false);
    }





    useEffect(() => {
        copyMovies();

    }, []);


    return (
        <>
            <div className='cont-most'>
                <div className='title-mostview'>
                    <h3>POPULAR</h3>
                </div>
                <div className="mostview">
                    <div className="mostview-container">

                        {

                            isLoading ? <Loading /> : <LoadPopularMovies movies={moviesTotal} setMoviesTotal={setMoviesTotal}/>
                        }

                    </div>
                </div>

            </div>
        </>

    )
}
