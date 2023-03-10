

export const LoadLikeMovies = (user,movies) => {
    const loadMov = movies;
    user.idMovies.map(id => {
        loadMov.map(mov => {
            if (mov.id == id) {
                mov.like = !mov.like
            }
        })
    })
    return {
        loadMov
    }
}
