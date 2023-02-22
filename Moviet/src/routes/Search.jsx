// import { useEffect, useState } from "react";
// import { getMovies } from "../api/getMovies";
// import { LoadImgMovies } from "../component/loadimg/LoadImgMovies";
// import { Loading } from '../component/loaderMovies/Loading';
// import { useParams } from "react-router-dom";


import { Movies } from "../component/movies/Movies";

const TYPE = 'search'

export const Search = () => {

    return (

        <>

            <Movies type={TYPE} />

        </>
    )
}
