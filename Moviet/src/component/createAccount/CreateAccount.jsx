import './styles/style.css'

export const CreateAccount = ({ changeStateCreate }) => {
    return (
        <>
            <div className='background-Create'>
                <div className='container-create'>
                    <div className='out-button'>
                        <a href='#' onClick={changeStateCreate}>X</a>
                    </div>
                    <div className='title-create'>
                        <h3>CREATE ACCOUNT</h3>
                    </div>
                    <div className='inputs-container-create'>
                        <input className="username-input" placeholder="Username" />
                        <input className="mail-input" placeholder="Mail" type='mail'/>
                        <input className="password-input" placeholder="Password" type='password'/>
                        <input className="password-2-input" placeholder="Repeat password"  type='password'/>
                    </div>
                    <div className="button-container">
                        <button>CREATE</button>
                    </div>
                </div>
            </div>
        </>
    )
}
