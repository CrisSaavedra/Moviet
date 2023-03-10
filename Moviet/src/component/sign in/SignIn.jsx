import { useState } from 'react'
import { getUser } from '../../api/getUser';
import { signinValidate } from '../../helpers/signinValidate';
import './styles/style.css'

export const SignIn = ({ changeStateSing, setUser }) => {

    const [error, setError] = useState('noterror');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const validateInfo = async () => {
        const validate = signinValidate(mail, password, setError);
        if (!validate) {
            setError('noterror');
        } else {

            const { ok,username, uid, idMovies } = await getUser(mail, password)
            if (ok) {
                localStorage.setItem('uid' ,uid)
                setUser({
                    login:true,
                    username,
                    uid,
                    idMovies
                })
                changeStateSing(false);
            } else {
                setError('THE EMAIL OR PASSWORD IS NOT VALID')
            }

        }
    }



    return (
        <>
            <div className='background-singin'>
                <div className='container-signin'>
                    <div className='out-button'>
                        <a onClick={changeStateSing}>X</a>
                    </div>
                    <div className='title-signin'>
                        <h3>SIGN IN</h3>
                    </div>
                    <div className='inputs-container'>
                        <input className="mail-input" type="email" placeholder="Mail" onChange={e => setMail(e.target.value)} />
                        <input className="password-input" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        <p className={error != 'noterror' ? 'error-msg' : 'error-msg invisible'}>{error}</p>
                    </div>
                    <div className="button-container">
                        <button onClick={validateInfo}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </>
    )
}
