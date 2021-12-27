import { Login } from '@tarot-viii/app';
import React from 'react';
import { useAuth } from '../../hooks';

const LoginScreen = () => {
    const {
        createLoginWithEmailAndPassword,
        error,
        forgotPassword,
        loginWithEmailAndPassword,
        loginAnonymously
    } = useAuth();
    return (
        <Login
            signin={loginWithEmailAndPassword}
            signup={createLoginWithEmailAndPassword}
            error={error}
            forgotPassword={forgotPassword}
            loginAnon={loginAnonymously}
        />
    );
};

export default LoginScreen;
