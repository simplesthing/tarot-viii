import { Colors, EmailPassword } from '@tarot-viii/ui';
import { StyleSheet, View } from 'react-native';

import { Button } from 'react-native-elements';
import React from 'react';

type LoginProps = {
    signin: ({ email, password }) => void;
    signup: () => void;
    loginAnon: () => void;
    resetPassword: () => void;
    error: {
        type?: string;
        message: string;
    };
};

export default function Login({
    loginAnon,
    signin,
    signup,
    resetPassword,
    error
}: LoginProps) {
    return (
        <View style={styles.container}>
            <EmailPassword buttonLabel="Login" buttonPress={signin} error={error} />

            <View style={styles.formRow}>
                <Button
                    title="Signup"
                    buttonStyle={[styles.button, styles.signupButton]}
                    titleStyle={styles.signupTitleStyle}
                    accessibilityLabel="Signup"
                    onPress={signup}
                />
            </View>

            <View style={styles.formRow}>
                <Button
                    title="Log in Anonymously"
                    buttonStyle={[styles.button, styles.secondaryBtn]}
                    titleStyle={styles.signupTitleStyle}
                    accessibilityLabel="Log in Anonymously"
                    onPress={loginAnon}
                />
            </View>

            <View style={styles.formRow}>
                <Button
                    title="Forgot password"
                    type="clear"
                    titleStyle={styles.signupTitleStyle}
                    accessibilityLabel="Forgot password"
                    onPress={resetPassword}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20
    },
    formRow: {
        width: '100%',
        alignItems: 'stretch',
        marginTop: 10,
        marginBottom: 10
    },
    button: {
        height: 60,
        marginBottom: 20
    },
    signupButton: {
        backgroundColor: Colors.spanish_gray.shadow
    },
    signupTitleStyle: {
        fontWeight: '700',
        color: Colors.smoky_black.base
    },
    secondaryBtn: {
        backgroundColor: Colors.spanish_gray.base
    }
});
