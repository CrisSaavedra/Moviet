
import { useState } from 'react';
import heart from './assets/heart.svg';

export const LoadImgMovies = ({ movies }) => {

    const [like, setLike] = useState(true);

    return (

        <>
            <div className="container-movies">
                {
                    movies.map(movie => {
                        return <div className="card-Movie" key={movie.id}>
                            <div className="movie">
                                <div className="buttons">
                                    <div className="add">
                                        <a href="#">
                                            <img src={heart} alt="buton" width='20rem'  className={like ? 'filter-violet' : 'filter-grey'}/>
                                        </a>

                                    </div>
                                   
                                </div>
                                <div className="img">
                                    <img src={movie.img} alt="movie img" />
                                </div>
                            </div>
                        </div>

                    })
                }

            </div>

        </>
    )
}
