import React, { useState } from 'react'
import heart from '../../shareImg/heart.svg';


export const LoadMoviesHome = ({ movies }) => {


    const [like, setLike] = useState(true);


    return (
        <>



            {

                movies.map(movie => {



                    return <div className="mostview-movie" key={movie.id} style={{ backgroundImage: `url(${movie.img})` }}>
                        <div className="mostview-likebutton">
                            <a href="#">
                                <img src={heart} alt="buton" width='20rem' className={like ? 'filter-violet' : 'filter-grey'} />
                            </a>
                        </div>

                    </div>



                })
            }

            {
                movies.map(movie => {



                    return <div className="mostview-movie" key={movie.id} style={{ backgroundImage: `url(${movie.img})` }}>
                        <div className="mostview-likebutton">
                                <a href="#">
                                    <img src={heart} alt="buton" width='20rem' className={like ? 'filter-violet' : 'filter-grey'} />
                                </a>
                            </div>

                    </div>



                })




            }

        </>

    )
}
