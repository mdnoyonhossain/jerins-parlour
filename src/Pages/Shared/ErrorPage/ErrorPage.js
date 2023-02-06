import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const ErrorPage = () => {
    return (
        <section className='text-center container login-section'>
            <div className='logo'>
                <Link to='/'><img src={logo} className="img-fluid logo-login" alt="" /></Link>
            </div>
            <h1 className='fw-bold my-4 primary-color'>404 Page Not Found!</h1>
            
            <p style={{ color: 'black' }}><Link to="/" style={{ textDecoration: 'none' }}> <button className='primary-button text-white px-5 py-2'>Home</button> </Link></p>
        </section>
    );
};

export default ErrorPage;