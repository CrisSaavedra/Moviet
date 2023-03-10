import React, { useState, useEffect } from 'react'
import heart from '../../shareImg/heart.svg';
import { useOutletContext } from 'react-router-dom';
import { setLikeMoviesOnClick } from '../../helpers/setLikeMoviesOnClick';

export const LoadMoviesHome = ({ MostViewMovies, setMostViewMovies }) => {

    const [user, setUser] = useOutletContext();
    const [like, setLike] = useState(false);



    const isLikeMovie = (e, likeId) => {
        e.preventDefault()
        if (user.login) {
            setLikeMoviesOnClick(MostViewMovies, user, likeId, setMostViewMovies, setUser);
        }
    };


    return (
        <>

            {

                MostViewMovies.map(movie => {

                    return <div className="mostview-movie" key={movie.id} style={{ backgroundImage: `url(${movie.img})` }}>
                        <div className="mostview-likebutton">
                            <a href="#" onClick={e => isLikeMovie(e, movie.id)}>
                                <img src={heart} alt="buton" width='20rem' className={movie.like ? 'filter-violet' : 'filter-grey'} />
                            </a>
                        </div>

                    </div>

                })
            }

            {
                MostViewMovies.map(movie => {



                    return <div className="mostview-movie" key={movie.id} style={{ backgroundImage: `url(${movie.img})` }}>
                        <div className="mostview-likebutton">
                            <a href="#" onClick={e => isLikeMovie(e, movie.id)} >
                                <img src={heart} alt="buton" width='20rem' className={like ? 'filter-violet' : 'filter-grey'} />
                            </a>
                        </div>

                    </div>



                })





            }

        </>

    )
}


