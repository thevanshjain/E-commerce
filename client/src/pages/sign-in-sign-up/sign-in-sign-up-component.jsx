import React from 'react';
import SignIn from '../../Components/sign-in/sign-in-component';
import './sign-in-sign-up-styles.scss';
import SignUp from '../../Components/sign-up/sign-up-component';

const SignInSignUp = () => (
    <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
    </div>
);

export default SignInSignUp;
