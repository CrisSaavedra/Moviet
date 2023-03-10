import React, { useState, useEffect } from 'react'
import heart from '../../shareImg/heart.svg';
import { useOutletContext } from 'react-router-dom';
import { setLikeMoviesOnClick } from '../../helpers/setLikeMoviesOnClick';

export const LoadPopularMovies = ({ movies, setMoviesTotal }) => {

    const [user, setUser] = useOutletContext();

    const isLikeMovie = (e, likeId) => {
        e.preventDefault()
        if (user.login) {
            setLikeMoviesOnClick(movies, user, likeId, setMoviesTotal, setUser);
        }
    };

    const loadLikeMovies = () => {
        const copyMov = movies;
        user.idMovies.map(id => {

            copyMov.map(mov => {

                if (mov.id == id) {
                    mov.like = !mov.like

                }
            })

        })
        setMoviesTotal(copyMov);
    }

    useEffect(() => {
        loadLikeMovies()
    }, [movies]);

    return (
        <>



            {

                movies.map(movie => {


                    
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
                movies.map(movie => {

                    

                    return <div className="mostview-movie" key={movie.id} style={{ backgroundImage: `url(${movie.img})` }}>
                        <div className="mostview-likebutton">
                            <a href="#" onClick={e => isLikeMovie(e, movie.id)} >
                                <img src={heart} alt="buton" width='20rem' className={movie.like ? 'filter-violet' : 'filter-grey'} />
                            </a>
                        </div>

                    </div>



                })




            }

        </>

    )
}
