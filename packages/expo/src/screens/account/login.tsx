import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { Login } from '@tarot-viii/app';
import { ROUTES } from '../../navigation/config';
import React from 'react';
import { useRouter } from 'solito/router';

const LoginScreen = () => {
    const p = {
        signin: ({ email, password }) => ({}),
        loginAnon: () => ({}),
        resetPassword: () => ({}),
        error: {
            message: ''
        }
    };

    const { push } = useRouter();

    const register = () => {
        push({ pathname: ROUTES.screens.SIGNUP.path });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Login
                signin={p.signin}
                signup={register}
                error={p.error}
                loginAnon={p.loginAnon}
                resetPassword={p.resetPassword}
            />
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
