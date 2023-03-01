import './styles/style.css';
import heart from '../../shareImg/heart.svg';
import { useEffect, useState } from 'react';
import { getMovies } from '../../api/getMovies';
import { LoadMoviesHome } from '../loadMoviesHome/LoadMoviesHome';
import { Loading } from '../loaderMovies/Loading';

export const HomeMovies = ({url,name}) => {

    const [moviesTotal, setMoviesTotal] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const copyImages = async () => {

        
        const { movies } = await getMovies(url);
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
                    {
                         name === 'view' ? <h3>THE MOST VIEWED</h3> : <h3>POPULAR</h3> 
                    }
                  
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
