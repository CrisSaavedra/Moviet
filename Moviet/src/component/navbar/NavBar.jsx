import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { SignIn } from '../sign in/SignIn';
import { CreateAccount } from '../createAccount/CreateAccount';
import userImg from '../../shareImg/user.svg';

export const NavBar = ({setUser,user}) => {

    const [activeLink, setActiveLink] = useState('home');
    const [sign, setSign] = useState(false);
    const [create, setCreate] = useState(false);
   


    const navigate = useNavigate();

    const changeStateSing = () => {
        setSign(!sign);
    }

    const changeStateCreate = () => {
        setCreate(!create);
    }
  

    const onInputChange = (e) => {
        let rep = String(e.target.value);
        if (e.key === 'Enter' && rep.length > 0) {
            rep = rep.replace(/ /g, "-");
            setActiveLink('');
            const nav = '/search/' + rep
            e.target.value = '';
            navigate(nav);
        }
    }

    const onLogOut = () => {
        setUser({ login: false });
        changeStateOnClick('');
        localStorage.clear();
    }




    const changeStateOnClick = (state) => {
        setActiveLink(state)
    }



    return (
        <>
            {
                sign ? <SignIn changeStateSing={changeStateSing} setUser={setUser} /> : null
            }

            {
                create ? <CreateAccount changeStateCreate={changeStateCreate} changeStateLogin={changeStateLogin} /> : null
            }

            <nav className="navbar navbar-expand nav-container">
                <div className="container-fluid col-md-auto " >
                    <div className='name-page' >
                        <Link to="/" onClick={() => changeStateOnClick('home')}>Moviet</Link>
                    </div>

                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ">

                            {
                                !user.login ? <><li className="nav-item">
                                    <a className='nav-link' onClick={() => {
                                        changeStateOnClick('')
                                        setSign(!sign)
                                    }} aria-current="page">SIGN IN</a>
                                </li>
                                    <li className="nav-item">
                                        <a className='nav-link' onClick={() => {
                                            changeStateOnClick('')
                                            setCreate(!create)
                                        }} aria-current="page">CREATE ACCOUNT</a>
                                    </li></> : null
                            }

                            <li className="nav-item">
                                <Link className={activeLink === 'discover' ? 'active nav-link' : ' nav-link'} onClick={() => changeStateOnClick('discover')} aria-current="page" to="/discover">DISCOVER</Link>
                            </li>
                            {
                                user.login ? <>
                                    <li className="nav-item ">
                                        <Link className={activeLink === 'favorite' ? 'active nav-link' : 'nav-link'} to="/favorites" onClick={() => changeStateOnClick('favorite')} > MY FAVORITES</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className='nav-link' to='/' onClick={onLogOut } > LOGOUT</Link>
                                    </li>
                                </> : null
                            }

                        </ul>


                        <input className="form-control " type="search" placeholder="Search" aria-label="Search" onKeyDown={onInputChange} />


                    </div>

                </div>
                {
                    user.login ? <div className='nameUser'>
                        <img src={userImg} alt="userimg" width={25} />
                        <h3>{user.username}</h3>
                    </div>
                        : null
                }

            </nav>
        </>

    )
}
