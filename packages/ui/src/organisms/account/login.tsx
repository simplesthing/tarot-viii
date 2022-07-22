import { StyleSheet, View } from 'react-native';

import { Button } from '@rneui/themed';
import EmailPassword from '../../molecules/account/email-password';
import React from 'react';
import colors from '../../theme/colors';

type LoginProps = {
    signin: ({ email, password }) => void;
    signup: () => void;
    loginAnon?: () => void;
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
    const anon = (
        <View style={styles.formRow}>
            <Button
                title="Log in Anonymously"
                buttonStyle={[styles.button, styles.secondaryBtn]}
                titleStyle={styles.signupTitleStyle}
                accessibilityLabel="Log in Anonymously"
                onPress={loginAnon}
            />
        </View>
    );
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

            {loginAnon && anon}

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
        backgroundColor: colors.spanish_gray.shadow
    },
    signupTitleStyle: {
        fontWeight: '700',
        color: colors.smoky_black.base
    },
    secondaryBtn: {
        backgroundColor: colors.spanish_gray.base
    }
});
