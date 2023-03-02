import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { SignIn } from '../sign in/SignIn';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [sign, setSign] = useState(false);

    const navigate = useNavigate();

    const changeStateSing = () => {
        setSign(!sign)
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




    const changeStateOnClick = (state) => {
        setActiveLink(state)
    }



    return (
        <>
            {
               sign ? <SignIn changeStateSing={changeStateSing} /> : null
            }

            <nav className="navbar navbar-expand nav-container">
                <div className="container-fluid col-md-auto " >
                    <div className='name-page' >
                        <Link to="/" onClick={() => changeStateOnClick('home')}>Moviet</Link>
                    </div>

                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className= 'nav-link' onClick={() => {changeStateOnClick('')
                            setSign(!sign)}} aria-current="page">SIGN IN</a>
                            </li>
                            <li className="nav-item">
                                <Link className={activeLink === 'create' ? 'active nav-link' : ' nav-link'} onClick={() => changeStateOnClick('create')} aria-current="page" to="/create-account">CREATE ACCOUNT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={activeLink === 'discover' ? 'active nav-link' : ' nav-link'} onClick={() => changeStateOnClick('discover')} aria-current="page" to="/discover">DISCOVER</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className={activeLink === 'favorite' ? 'active nav-link' : 'nav-link'} to="/favorites" onClick={() => changeStateOnClick('favorite')} >FAVORITES</Link>
                            </li>
                        </ul>

                         <input className="form-control " type="search" placeholder="Search" aria-label="Search" onKeyDown={onInputChange} />


                    </div>

                </div>
            </nav>
        </>

    )
}
