
import { useMovies } from '../../hooks/useMovies'
import './styles/style.css'


export const Movies = () => {

    const { movies, isLoading } = useMovies('discover');


    return (
        <div className="container-movies">

            <div className="card-Movie">
                <div className="movie">
                    <div className="img">
                        <div className="box" style={{ backgroundColor: 'white', height: '25rem', width: '16rem' }}> box img</div>
                    </div>
                </div>
            </div>

            <div className="card-Movie">
                <div className="movie">
                    <div className="img">
                        <div className="box" style={{ backgroundColor: 'white', height: '25rem', width: '16rem' }}> box img</div>
                    </div>
                </div>
            </div>
            <div className="card-Movie">
                <div className="movie">
                    <div className="img">
                        <div className="box" style={{ backgroundColor: 'white', height: '25rem', width: '16rem' }}> box img</div>
                    </div>
                </div>
            </div>
            <div className="card-Movie">
                <div className="movie">
                    <div className="img">
                        <div className="box" style={{ backgroundColor: 'white', height: '25rem', width: '16rem' }}> box img</div>
                    </div>
                </div>
            </div>
            <div className="card-Movie">
                <div className="movie">
                    <div className="img">
                        <div className="box" style={{ backgroundColor: 'white', height: '25rem', width: '16rem' }}> box img</div>
                    </div>
                </div>
            </div>
            <div className="card-Movie">
                <div className="movie">
                    <div className="img">
                        <div className="box" style={{ backgroundColor: 'white', height: '25rem', width: '16rem' }}> box img</div>
                    </div>
                </div>
            </div>

            <div className="card-Movie">
                <div className="movie">
                    <div className="img">
                        <div className="box" style={{ backgroundColor: 'white', height: '25rem', width: '16rem' }}> box img</div>
                    </div>
                </div>
            </div>

            <div className="card-Movie">
                <div className="movie">
                    <div className="img">
                        <div className="box" style={{ backgroundColor: 'white', height: '25rem', width: '16rem' }}> box img</div>
                    </div>
                </div>
            </div>

            <div className="card-Movie">
                <div className="movie">
                    <div className="img">
                        <div className="box" style={{ backgroundColor: 'white', height: '25rem', width: '16rem' }}> box img</div>
                    </div>
                </div>
            </div>

            <div className="card-Movie">
                <div className="movie">
                    <div className="img">
                        <div className="box" style={{ backgroundColor: 'white', height: '25rem', width: '16rem' }}> box img</div>
                    </div>
                </div>
            </div>

            <div className="card-Movie">
                <div className="movie">
                    <div className="img">
                        <div className="box" style={{ backgroundColor: 'white', height: '25rem', width: '16rem' }}> box img</div>
                    </div>
                </div>
            </div>



        </div>



    )
}
