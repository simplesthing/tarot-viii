import { Button, Input, Text } from 'react-native-elements';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { default as Colors } from '../theme/colors';

type EmailPasswordProps = {
    error: {
        type?: string;
        message?: string;
    };
    buttonPress: ({ email, password }) => void;
    buttonLabel: string;
};

const EmailPassword = ({ error = {}, buttonLabel, buttonPress }: EmailPasswordProps) => {
    const [emailAddress, onChangeEmailAddress] = React.useState('');
    const [password, onChangePassword] = React.useState('');
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
        setBtnEnabled(error?.message === '' && emailAddress !== '' && password !== '');
    }, [emailAddress, password, error]);

    const emailInputStyle = hasError
        ? [styles.input, { borderBottomColor: 'red', borderBottomWidth: 1 }]
        : styles.input;

    const passwordInputStyle = hasError
        ? [styles.input, { borderBottomColor: 'red', borderBottomWidth: 1 }]
        : styles.input;

    const onPress = () => {
        buttonPress({ email: emailAddress, password: password });
    };

    return (
        <View style={styles.container}>
            <View style={styles.formRow}>
                <Input
                    label="email address"
                    labelStyle={styles.label}
                    style={emailInputStyle}
                    onChangeText={onChangeEmailAddress}
                    value={emailAddress}
                    placeholder="user528@internet.com"
                    textContentType="emailAddress"
                    autoCompleteType="email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
            </View>

            <View style={styles.formRow}>
                <Input
                    label="password"
                    labelStyle={styles.label}
                    style={passwordInputStyle}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="**************"
                    textContentType="password"
                    secureTextEntry={true}
                    autoCompleteType="none"
                />
            </View>

            <Text style={styles.errorMessage}>{error?.message}</Text>

            <Button
                title={buttonLabel}
                buttonStyle={styles.loginButton}
                disabled={!btnEnabled}
                titleStyle={styles.loginButtonTitleStyle}
                accessibilityLabel={buttonLabel}
                onPress={onPress}
            />
        </View>
    );
};

export default EmailPassword;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'stretch'
    },
    formRow: {
        alignItems: 'flex-start',
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
    loginButton: {
        height: 60,
        backgroundColor: Colors.smoky_black.base,
        marginBottom: 20,
        paddingHorizontal: 40
    },
    loginButtonTitleStyle: {
        fontWeight: '800'
    },
    signupButton: {
        height: 60,
        marginBottom: 20
    },
    signupTitleStyle: {
        fontWeight: '700',
        color: Colors.smoky_black.base
    },
    errorMessage: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 20,
        color: 'red'
    }
});
