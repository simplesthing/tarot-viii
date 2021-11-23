import React from 'react';
import { Login } from '@tarot-viii/app';
import { useAuth } from '../hooks';
import { useEffect } from 'react';
import { useRouting } from 'expo-next-react-navigation';
// import analytics from '@react-native-firebase/analytics';

const LoginScreen = () => {
    const {
        user,
        createLoginWithEmailAndPassword,
        error,
        forgotPassword,
        loginWithEmailAndPassword,
        loginAnonymously
    } = useAuth();

    const { navigate } = useRouting();

    useEffect(() => {
        if (user) {
            navigate({
                routeName: 'start',
                params: {
                    emailAddress: user?.email
                }
            });
        }
    }, [user]);

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
