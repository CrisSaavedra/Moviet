import './styles/style.css';
import { useEffect, useState } from 'react';
import { getMovies } from '../../api/getMovies';
import { LoadMoviesHome } from '../loadMoviesHome/LoadMoviesHome';
import { Loading } from '../loaderMovies/Loading';
import { useOutletContext } from 'react-router-dom';
import { LoadLikeMovies } from '../../helpers/LoadLikeMovies';


export const HomeMovies = ({ url, MostViewMovies, setMostViewMovies}) => {

    
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useOutletContext();


    const copyMovies = async () => {
        const { movies } = await getMovies(url);
        setMostViewMovies(movies);
        setIsLoading(false);
    }

    const loadMov = async () => {
       
        const { movies } = await getMovies(url);
        const { loadMov } = LoadLikeMovies(user, movies);
        setMostViewMovies(loadMov);
        setIsLoading(false);
    }


    useEffect(() => {
        if (!user.login) {
            copyMovies();
            
        } else {
            loadMov()
        }
    }, [ , user.login]);



    return (
        <>
            <div className='cont-most'>
                <div className='title-mostview'>
                    <h3>THE MOST VIEWED</h3>
                </div>
                <div className="mostview">
                    <div className="mostview-container">

                        {

                            isLoading ? <Loading /> : <LoadMoviesHome MostViewMovies= {MostViewMovies} setMostViewMovies={setMostViewMovies} />
                        }

                    </div>
                </div>

            </div>
        </>

    )
}
