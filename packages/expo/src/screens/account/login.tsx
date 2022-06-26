import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { Login } from '@tarot-viii/app';
import { ROUTES } from '../../navigation/config';
import React from 'react';
import { useRouter } from 'solito/router';

// const { error, loginWithEmailAndPassword, loginAnonymously } = useAuth();
const LoginScreen = () => {
    const p = {
        signin: ({ email, password }) => ({}),
        error: {
            message: ''
        }
    };

    const { push } = useRouter();

    const register = () => {
        push({ pathname: ROUTES.screens.SIGNUP.path });
    };

    const resetPassword = () => {
        push({ pathname: ROUTES.screens.FORGOT_PASSWORD.path });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Login
                signin={p.signin}
                signup={register}
                error={p.error}
                resetPassword={resetPassword}
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
