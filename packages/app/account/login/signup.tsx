import { StyleSheet, View } from 'react-native';

import { EmailPassword } from '@tarot-viii/ui';
import React from 'react';

type SignupProps = {
    signup: ({ email, password }) => void;
    error: {
        type?: string;
        message: string;
    };
};

export default function Signup({ signup, error }: SignupProps) {
    return (
        <View style={styles.container}>
            <View style={styles.loginForm}>
                <EmailPassword
                    buttonPress={signup}
                    buttonLabel="Sign up &amp; Login"
                    error={error}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginForm: {
        width: '100%',
        padding: 20
    }
});
