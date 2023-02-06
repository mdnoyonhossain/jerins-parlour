import React from 'react';
import SignUp from '../Pages/SignUp/SignUp';
import SignUpNavBar from '../Pages/SignUpNavBar/SignUpNavBar';

const SignUpLayout = () => {
    return (
        <div className='container'>
            <SignUpNavBar></SignUpNavBar>
            <SignUp></SignUp>
        </div>
    );
};

export default SignUpLayout;