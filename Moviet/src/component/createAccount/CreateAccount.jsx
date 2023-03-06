import { useState } from 'react'
import { createAccountValidator } from '../../helpers/createAccountValidate';
import './styles/style.css'



export const CreateAccount = ({ changeStateCreate,changeStateLogin }) => {

    const [errorUsarname, setErrorUsarname] = useState('noterror');
    const [errorMail, setErrorMail] = useState('noterror');
    const [errorPassword, setErrorPassword] = useState('noterror');
    const [errorPassword2, setErrorPassword2] = useState('noterror');

    const [username, setUsername] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');


    const submitButton = () => {
        const validate = createAccountValidator(username,mail,password,password2,setErrorUsarname,setErrorMail,setErrorPassword,setErrorPassword2);
        if(validate){
            changeStateLogin(true);
            changeStateCreate(false);
        }
    }




    return (
        <>
            <div className='background-Create'>
                <div className='container-create'>
                    <div className='out-button'>
                        <a onClick={changeStateCreate}>X</a>
                    </div>
                    <div className='title-create'>
                        <h3>CREATE ACCOUNT</h3>
                    </div>
                    <div className='inputs-container-create'>
                        <input className="username-input" placeholder="Username"  onChange={e =>setUsername(e.target.value)}/>
                        <p className={errorUsarname != 'noterror' ? 'error-msg' : 'error-msg invisible'}>{errorUsarname}</p>
                        <input className="mail-input" placeholder="Mail" type='mail' onChange={e => setMail(e.target.value)}/>
                        <p className={errorMail != 'noterror' ? 'error-msg' : 'error-msg invisible'}>{errorMail}</p>
                        <input className="password-input" placeholder="Password" type='password' onChange={e =>setPassword(e.target.value)} />
                        <p className={errorPassword != 'noterror' ? 'error-msg' : 'error-msg invisible'}>{errorPassword}</p>
                        <input className="password-2-input" placeholder="Repeat password" type='password' onChange={e =>setPassword2(e.target.value)} />
                        <p className={errorPassword2 != 'noterror' ? 'error-msg' : 'error-msg invisible'}>{errorPassword2}</p>
                    </div>
                    <div className="button-container">
                        <button onClick={submitButton}>CREATE</button>
                    </div>
                </div>
            </div>
        </>
    )
}
