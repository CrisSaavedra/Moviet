
import { useEffect, useState } from 'react';
import { getMovies } from '../../api/getMovies';
import { Loading } from '../loaderMovies/Loading';
import { LoadImgMovies } from '../loadimg/LoadImgMovies';
import './styles/style.css'




export const Movies = () => {

    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const selectPage = (num) => {
        setPage(page + num);
    };

    const copyImages = async () => {
        const mov = await getMovies('discover', page); // await por que getgift devuelve una promesa!!
        setMovies(mov);
        setIsLoading(false);
    }


    useEffect(() => {

        copyImages()

    }, [page]);



    return (

        <>
            <div className='container-title'>
                <h2>Discover</h2>
            </div>
            {

            }


            {
                isLoading ? <Loading /> : <LoadImgMovies movies={movies} />
            }

            <div className='next-back-button'>

                <div className={page > 1 ? 'back-button' : 'back-button offVisible'}>
                    <button type="button" className="btn btn-lg" onClick={() => selectPage(-1)}>Back</button>
                </div>


                <div className='next-button'>
                    <button type="button" className="btn  btn-lg" onClick={() => selectPage(1)}>Next</button>

                </div>
            </div>




        </>
    )
}
