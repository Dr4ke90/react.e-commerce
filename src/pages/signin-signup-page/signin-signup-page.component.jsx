import React from 'react'

import './signin-signup-page.styles.scss'

import SingIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'


const SignInSignUpPage = () => (
        <div className='signInSingUp'>
                <SingIn />
                <SignUp />
        </div>
);

export default SignInSignUpPage;