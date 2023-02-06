import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../assets/icons/google.png';
import facebook from '../../assets/icons/facebook.png'

const SignUp = () => {
    return (
        <section className='border w-50 m-auto py-5 rounded mt-4'>
            <form action="">
                <div className="mb-3 m-auto" style={{ width: '350px' }}>
                    <input type="text" className="w-100 signup-input mb-4" placeholder="First Name" />
                    <input type="text" className="w-100 signup-input mb-4" placeholder="Last Name" />
                    <input type="email" className="w-100 signup-input mb-4" placeholder="Username or Email" />
                    <input type="password" className="w-100 signup-input mb-4" placeholder="Password" />
                    <input type="password" className="w-100 signup-input mb-4" placeholder="Confrim Passowrd" />
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn text-white" style={{background: '#F63E7B'}} >Create an account</button>
                    </div>
                    <p className='text-center mt-2'>Already have an account? <Link to="/login" style={{ textDecoration: 'none'}}><span className='primary-color'>Login</span></Link></p>
                    <hr />
                </div>
            </form>
            <div className='m-auto login-hover my-2' style={{border: '1px solid black',borderRadius: '15px', width: '250px'}}>
                <img src={facebook} className='review-star' style={{marginLeft: '10px', background: 'green'}} alt="" />
                <button className='my-1 login-button'>Continue with Facebook</button>
            </div>
            <div className='m-auto login-hover my-2' style={{border: '1px solid black',borderRadius: '15px', width: '250px'}}>
                <img src={google} className='review-star' style={{marginLeft: '10px'}} alt="" />
                <button className='my-1 login-button'>Continue with Google</button>
            </div>
        </section>
    );
};

export default SignUp;