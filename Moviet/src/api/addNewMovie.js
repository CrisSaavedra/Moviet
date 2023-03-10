import axios from "axios";


const baseURL = 'http://127.0.0.1:4001/api/movie/add'


export const addNewMovie = async (uid, idMovie) => {


    await axios.put(baseURL, {
        uid,
        idMovie
    }).then(res => res.data)
        .catch(error => {
            return false;
        })

    return true;
}
