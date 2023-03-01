import React from 'react'
import { HomeMovies } from '../component/homeMovies/HomeMovies'
import { HomePagePresentation } from '../component/presentation/HomePagePresentation'

const mostviewed = `https://api.themoviedb.org/3/movie/top_rated?api_key=b810f50a3a5c617eb3f42a2c5bc7a4c4`;
const popular =`https://api.themoviedb.org/3/movie/popular?api_key=b810f50a3a5c617eb3f42a2c5bc7a4c4`;

export const Home = () => {
    return (
        <>
            <div className='container-home' style={{marginBottom:'10rem'}}>
                <HomePagePresentation />
                <HomeMovies url={mostviewed} name='view'/>
                <HomeMovies url = {popular}name='popular'/>

            </div>


            {/* //inicio y presentacion
        //recientes
        //mejor valoradas */}

        </>
    )
}
