import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import google from '../../assets/icons/google.png';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Login = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const {createLoginUser, signInWithGoogle} = useContext(AuthContext);
    const [loginUser, setLoginUser] = useState('');
    const [token] = useToken(loginUser)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if(token){
       navigate(from, {replace: true})
    }

    const handleLogin = (data) => {
        createLoginUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('User Login Successful.');
            setLoginUser(data.email);
        })
        .catch(error => {
            console.log(error);
            toast.error(error.message);
        })
    }

    const googleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('User Sign In Successful.');
        })
        .catch(error => {
            console.log(error);
            toast.error(error.message);
        })
    }

    return (
        <section className='text-center container login-section'>
            <div className='logo'>
                <Link to='/'><img src={logo} className="img-fluid logo-login" alt="" /></Link>
            </div>
            <h3 className='fw-bold my-4'>Login With</h3>

            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="mb-3 m-auto" style={{ width: '350px' }}>
                    <input type="email" {...register('email', {required: 'Email Must be input'})} className="w-100 signup-input mb-4" placeholder="Email Address" />
                    <input type="password" {...register('password', {required: 'Password must be requred'})} className="w-100 signup-input mb-4" placeholder="Password" />
                    {errors.email && <p className='text-danger flot-left'>{errors?.email?.message}</p>}
                    {errors.password && <p className='text-danger flot-left'>{errors?.password?.message}</p>}
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn text-white" style={{background: '#F63E7B'}} >Login</button>
                    </div>
                    <hr />
                </div>
            </form>

            <div onClick={googleSignIn} className='m-auto login-hover my-2' style={{border: '1px solid black',borderRadius: '15px', width: '250px'}}>
                <img src={google} className='review-star' alt="" />
                <button className='my-1 login-button'>Continue with Google</button>
            </div>
            <p style={{ color: 'black' }}>Don’t have an account? <Link to="/signup" style={{ textDecoration: 'none' }}><span className='primary-color'>Create an account</span></Link></p>
        </section>
    );
};

export default Login;