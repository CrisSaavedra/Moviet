import { addNewMovie } from "../api/addNewMovie";


export const setLikeMoviesOnClick = (movies, user, newMovie, setMoviesTotal, setUser) => {
    const userMov =  user.idMovies
    userMov.push(newMovie);
    setUser({...user, idMovies : userMov});
    const mov = movies.map(movie => {
        if (movie.id === newMovie) {
            movie.like = !movie.like
        }
        return movie
    })
    setMoviesTotal(mov);
    addNewMovie(user.uid,newMovie);

}
