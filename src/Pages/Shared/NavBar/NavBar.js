import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../NavBar/NavBar.css';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const NavBar = () => {
    const { user, userSignOut } = useContext(AuthContext);

    const signOutUser = () => {
        userSignOut()
            .then(() => {
                toast.success('Sign Out Successful.');
                localStorage.removeItem('jerinsToken')
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className='section-background'>
            <nav className="navbar navbar-expand-lg pt-3 container">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img className='img-fluid w-25' src={logo} alt="" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-2">
                                <NavLink className="fw-semibold text-decoration-none" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="fw-semibold text-decoration-none" aria-current="page" to="/our-team">Our Team</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="fw-semibold text-decoration-none" aria-current="page" to="/contact-us">Contact Us</NavLink>
                            </li>
                            {
                                user?.uid ?
                                    <>
                                        <li className="nav-item mx-2">
                                            <NavLink className="fw-semibold text-decoration-none" aria-current="page" to="/dashboard">Dashboard</NavLink>
                                        </li>
                                        <li onClick={signOutUser} className="nav-item mx-2">
                                            <Link className="primary-button text-white px-2 py-2 text-decoration-none" aria-current="page" to="/">Sign Out</Link>
                                        </li>
                                    </>
                                    :
                                    <li className="nav-item mx-2">
                                        <Link className="nav-NavLink primary-button text-white px-3 py-2 text-decoration-none" aria-current="page" to="/login">Login</Link>
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