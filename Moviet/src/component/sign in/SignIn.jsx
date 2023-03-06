import { useState } from 'react'
import { signinValidate } from '../../helpers/signinValidate';
import './styles/style.css'

export const SignIn = ({ changeStateSing }) => {

    const [error, setError] = useState('noterror');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const validateInfo = () => {
        const validate=signinValidate(mail,password,setError);

        validate ? setError('noterror') : "haz otra cosa"
        
    }



    return (
        <>
            <div className='background-singin'>
                <div className='container-signin'>
                    <div className='out-button'>
                        <a href='#' onClick={changeStateSing}>X</a>
                    </div>
                    <div className='title-signin'>
                        <h3>SIGN IN</h3>
                    </div>
                    <div className='inputs-container'>
                        <input className="mail-input" placeholder="Mail" onChange={e => setMail(e.target.value)} />
                        <input className="password-input" placeholder="Password" onChange={e => setPassword(e.target.value)} />
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
