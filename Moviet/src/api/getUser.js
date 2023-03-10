import axios from "axios";


const baseURL = 'http://127.0.0.1:4001/api/auth'


export const getUser = async (mail, password) => {


    const { ok, username, uid, idMovies } = await axios.post(baseURL, {
        email: mail,
        password,
    }).then(res => res.data)
        .catch(error => {
            return ({
                ok: false
            })
        })

    return ({
        ok,
        username,
        uid,
        idMovies
    })

}
