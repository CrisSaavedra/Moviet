import axios from "axios";
const baseURL = 'http://127.0.0.1:4001/api/auth/reload'

export const reLoadUser = async(setUser,userId) => {
  
    const { ok, username, uid, idMovies } = await axios.post(baseURL, {
        _id: userId
    }).then(res => res.data)
        .catch(error => {
           return {
                ok: false
           }
        })

    setUser({
        login: ok,
        username,
        uid,
        idMovies
    })
}
