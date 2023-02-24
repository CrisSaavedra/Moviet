import React, { useState } from 'react'

export const LoadMostViews = ({ movies }) => {


    const [like, setLike] = useState(true);


    return (
        <>



            {

              movies.map(movie => {

                    return <div className="mostview-movie" key={movie.id} style={{ backgroundImage: `url(${movie.img})` }}>
                        {/* <div className="mostview-likebutton">
                                <a href="#">
                                    <img src={heart} alt="buton" width='20rem' className={like ? 'filter-violet' : 'filter-grey'} />
                                </a>
                            </div> */}

                    </div>



                }) 

                
               

            }

        </>

    )
}
