import './styles/style.css'

export const SignIn = ({changeStateSing}) => {
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
                        <input className="mail-input" placeholder="Mail" />
                        <input className="password-input" placeholder="Password" />
                    </div>
                    <div className="button-container">
                        <button>SUBMIT</button>
                    </div>
                </div>
            </div>
        </>
    )
}
