import React from 'react'
import { MostViews } from '../component/mostviews/MostViews'
import { HomePagePresentation } from '../component/presentation/HomePagePresentation'

export const Home = () => {
    return (
        <>
            <div className='container-home'>
                <HomePagePresentation />
                <MostViews />

            </div>


            {/* //inicio y presentacion
        //recientes
        //mejor valoradas */}

        </>
    )
}
