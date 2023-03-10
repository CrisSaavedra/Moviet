import React, { useEffect, useState } from 'react'
import { HomeMovies } from '../component/homeMovies/HomeMovies'
import { PopularMovies } from '../component/popularMovies/PopularMovies';
import { HomePagePresentation } from '../component/presentation/HomePagePresentation'

const mostviewed = `https://api.themoviedb.org/3/movie/top_rated?api_key=b810f50a3a5c617eb3f42a2c5bc7a4c4`;
const popular =`https://api.themoviedb.org/3/movie/popular?api_key=b810f50a3a5c617eb3f42a2c5bc7a4c4`;

export const Home = () => {
    const [MostViewMovies, setMostViewMovies] = useState([]);
    return (
        <>
            <div className='container-home' style={{marginBottom:'10rem'}}>
                <HomePagePresentation />
                <HomeMovies url={mostviewed} MostViewMovies={MostViewMovies} setMostViewMovies={setMostViewMovies} />
                {/* <PopularMovies url={popular}/> */}
            </div>

        </>
    )
}
