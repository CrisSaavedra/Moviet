import './style.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
  

    const changeStateOnClick = (state) => {
        setActiveLink(state)
    }



    return (
        <nav className="navbar navbar-expand nav-container s">
            <div className="container-fluid col-md-auto " >
                <h3 className="navbar-brand" >Moviet</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className={activeLink === 'home'? 'active nav-link' : ' nav-link'} onClick={() => changeStateOnClick('home') } aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className={activeLink === 'favorite' ? 'active nav-link' : 'nav-link'} to="/favorites" onClick={() => changeStateOnClick('favorite') } >Favorites</Link>
                        </li>
                    </ul>

                    <input className="form-control " type="search" placeholder="Search" aria-label="Search" />


                </div>

            </div>
        </nav>

    )
}
