import React from 'react';
import { Signup } from '@tarot-viii/app';
// import { useAuth } from '../../hooks';

const SignupScreen = () => {
    // const { error, createLoginWithEmailAndPassword } = useAuth();

    return <Signup error={{ message: '' }} signup={() => ({})} />;
};

export default SignupScreen;
