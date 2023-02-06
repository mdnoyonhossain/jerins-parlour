import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import google from '../../assets/icons/google.png'

const Login = () => {
    return (
        <section className='text-center container login-section'>
            <div className='logo'>
                <Link to='/'><img src={logo} className="img-fluid logo-login" alt="" /></Link>
            </div>
            <h3 className='fw-bold my-4'>Login With</h3>
            <div className='m-auto login-hover my-2' style={{border: '1px solid black',borderRadius: '15px', width: '250px'}}>
                <img src={google} className='review-star' alt="" />
                <button className='my-1 login-button'>Continue with Google</button>
            </div>
            <p style={{ color: 'black' }}>Don’t have an account? <Link to="/signup" style={{ textDecoration: 'none' }}><span className='primary-color'>Create an account</span></Link></p>
        </section>
    );
};

export default Login;