import './style.css'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg nav-container ">
            <div className="container-fluid col-md-auto " >
                <h3 className="navbar-brand" >Moviet</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" href="#">Favorites</Link>
                        </li>
                    </ul>

                    <input className="form-control " type="search" placeholder="Search" aria-label="Search" />


                </div>

            </div>
        </nav>

    )
}
