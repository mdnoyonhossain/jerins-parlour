import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const NavBar = () => {
    const { user, userSignOut } = useContext(AuthContext);

    const signOutUser = () => {
        userSignOut()
            .then(() => {
                toast.success('Sign Out Successful.')
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className='section-background'>
            <nav className="navbar navbar-expand-lg pt-3 container">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img className='img-fluid w-25' src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/our-portfolio">Our Portfolio</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/our-team">Our Team</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/contact-us">Contact Us</Link>
                            </li>
                            {
                                user?.uid ?
                                    <>
                                        <li className="nav-item mx-2">
                                            <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
                                        </li>
                                        <li onClick={signOutUser} className="nav-item mx-2">
                                            <Link className="nav-link active  primary-button text-white px-4" aria-current="page" to="/">Sign Out</Link>
                                        </li>
                                    </>
                                    :
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link active  primary-button text-white px-4" aria-current="page" to="/login">Login</Link>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;