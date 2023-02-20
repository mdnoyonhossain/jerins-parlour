import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/icons/google.png';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import NavBar from '../Shared/NavBar/NavBar';
import useToken from '../../hooks/useToken';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, signInWithGoogle, userProfileNameUpdate } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [createUserToken, setCreateUserToken] = useState('');
    const [token] = useToken(createUserToken);
    useTitle('Register')

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if(token){
        return navigate(from, { replace: true });
    }

    const handleSignUp = (data) => {
        setError('');
        if (data.password !== data.confirmPassword) {
            setError('Password Did not Match');
            return;
        }

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Create Successfull.');
                userNameUpdate(data.firstName, data.lastName);
                saveUser(data.firstName, data.lastName, data.email);
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message);
            })
    }

    const userNameUpdate = (fName, lName) => {
        const fullName = `${fName + ' ' + lName}`;
        const profile = {
            displayName: fullName
        }
        userProfileNameUpdate(profile)
            .then(() => { })
            .catch(() => {
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
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }

    const saveUser = (fName, lName, email) => {
        const userInfo = {
            name: fName + ' ' + lName,
            email: email
        }

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserToken(email);
            })
    }

    return (
        <section>
            <NavBar />
            <div className='border w-50 m-auto py-5 rounded mt-4 container'>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="mb-3 m-auto" style={{ width: '350px' }}>
                        <input type="text" {...register('firstName', { required: 'First Name Fill is Required' })} className="w-100 signup-input mb-4" placeholder="First Name" />
                        <input type="text" {...register('lastName', { required: 'Last Name Fill is Required' })} className="w-100 signup-input mb-4" placeholder="Last Name" />
                        <input type="email" {...register('email', { required: 'Email Fill is Required' })} className="w-100 signup-input mb-4" placeholder="Username or Email" />
                        <input type="password" {...register('password', { required: 'Password Fill is Required' })} className="w-100 signup-input mb-4" placeholder="Password" />
                        <input type="password" {...register('confirmPassword', { required: 'Confirm Password Fill is Required' })} className="w-100 signup-input mb-4" placeholder="Confrim Passowrd" />
                        {errors.firstName && <p className='text-warning'>{errors?.firstName?.message}</p>}
                        {errors.lastName && <p className='text-warning'>{errors?.lastName?.message}</p>}
                        {errors.email && <p className='text-warning'>{errors?.email?.message}</p>}
                        {errors.password && <p className='text-warning'>{errors?.password?.message}</p>}
                        {errors.confirmPassword && <p className='text-warning'>{errors?.confirmPassword?.message}</p>}
                        <p className='text-warning'>{error}</p>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn text-white" style={{ background: '#F63E7B' }} >Create an account</button>
                        </div>
                        <p className='text-center mt-2'>Already have an account? <Link to="/login" style={{ textDecoration: 'none' }}><span className='primary-color'>Login</span></Link></p>
                        <hr />
                    </div>
                </form>
                <div onClick={googleSignIn} className='m-auto login-hover my-2' style={{ border: '1px solid black', borderRadius: '15px', width: '250px' }}>
                    <img src={google} className='review-star' style={{ marginLeft: '10px' }} alt="" />
                    <button className='my-1 login-button'>Continue with Google</button>
                </div>
            </div>
        </section>
    );
};

export default SignUp;