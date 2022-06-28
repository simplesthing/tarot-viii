import { Button, Input } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { default as Colors } from '../theme/colors';

const ForgotPassword = ({ resetPassword, error }) => {
    const [emailAddress, onChangeEmailAddress] = React.useState('');
    const [hasError, setHasError] = useState(false);
    const [btnEnabled, setBtnEnabled] = useState(false);

    useEffect(() => {
        if (error?.message && error.message !== '') {
            setHasError(true);
        } else {
            setHasError(false);
        }
    }, [error]);

    useEffect(() => {
        setBtnEnabled(error?.message === '' && emailAddress !== '');
    }, [emailAddress, error]);

    const emailInputStyle = hasError
        ? [styles.input, { borderBottomColor: 'red', borderBottomWidth: 1 }]
        : styles.input;

    const onPress = () => {
        resetPassword({ email: emailAddress });
    };
    return (
        <View style={styles.container}>
            <View style={styles.loginForm}>
                <View style={styles.formRow}>
                    <Input
                        label="email address"
                        labelStyle={styles.label}
                        style={emailInputStyle}
                        onChangeText={onChangeEmailAddress}
                        value={emailAddress}
                        placeholder="user528@internet.com"
                        textContentType="emailAddress"
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.formRow}>
                    <Button
                        title="Send password reset email"
                        disabled={!btnEnabled}
                        buttonStyle={styles.forgotPasswordButton}
                        titleStyle={styles.signupTitleStyle}
                        accessibilityLabel="Forgot password"
                        onPress={onPress}
                    />
                </View>
            </View>
        </View>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginForm: {
        width: '100%',
        padding: 20
    },
    formRow: {
        alignItems: 'stretch',
        marginTop: 10,
        marginBottom: 10
    },
    label: {
        color: Colors.smoky_black.base
    },
    input: {
        height: 40,
        marginTop: 10,
        alignSelf: 'stretch'
    },
    forgotPasswordButton: {
        alignSelf: 'stretch',
        height: 60,
        backgroundColor: Colors.smoky_black.base,
        marginBottom: 20
    },
    signupTitleStyle: {
        fontWeight: '800'
    },
    errorMessage: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 20,
        color: 'red'
    }
});
