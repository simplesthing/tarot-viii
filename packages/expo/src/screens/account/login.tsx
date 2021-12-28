import { Login } from '@tarot-viii/app';
import { ROUTES } from '../../navigation/config';
import React from 'react';
import { useAuth } from '../../hooks';
import { useRouting } from 'expo-next-react-navigation';

const LoginScreen = () => {
    const { error, loginWithEmailAndPassword, loginAnonymously } = useAuth();

    const { navigate } = useRouting();

    const register = () => {
        navigate({ routeName: ROUTES.screens.SIGNUP.name });
    };

    const resetPassword = () => {
        navigate({ routeName: ROUTES.screens.FORGOT_PASSWORD.name });
    };

    return (
        <Login
            signin={loginWithEmailAndPassword}
            signup={register}
            error={error}
            loginAnon={loginAnonymously}
            resetPassword={resetPassword}
        />
    );
};

export default LoginScreen;
