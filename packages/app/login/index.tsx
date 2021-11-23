import React, { useEffect, useState } from 'react';
import { Button, Input, Text } from 'react-native-elements';
import { Colors } from '@tarot-viii/ui';
import { StyleSheet, View } from 'react-native';
import { useRouting } from 'expo-next-react-navigation';


type LoginProps = {
    signin: ({ email, password }) => void;
    signup: ({ email, password }) => void;
    loginAnon: () => void;
    forgotPassword: (email: string) => Promise<void>;
    error: {
        type?: string;
        message: string;
    };
};

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
        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        height: 40,
        marginTop: 10,
        alignSelf: 'stretch'
    },
    loginButton: {
        height: 60,
        backgroundColor: Colors.smoky_black.base,
        marginBottom: 20
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
    },
    forgotPasswordButton: {}
});

export default function Login({
    loginAnon,
    signin,
    signup,
    error,
    forgotPassword
}: LoginProps) {
    const [emailAddress, onChangeEmailAddress] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [hasError, setHasError] = useState(false);
    const [loginButtonEnabled, setLoginButtonEnabled] = useState(false);

    useEffect(() => {
        if (error?.message && error.message !== '') {
            setHasError(true);
        } else {
            setHasError(false);
        }
    }, [error]);

    useEffect(() => {
        setLoginButtonEnabled(
            error?.message === '' && (emailAddress === '' || password === '')
        );
    }, [emailAddress, password, error]);

    const emailInputStyle = hasError
        ? [styles.input, { borderBottomColor: 'red', borderBottomWidth: 1 }]
        : styles.input;

    const passwordInputStyle = hasError
        ? [styles.input, { borderBottomColor: 'red', borderBottomWidth: 1 }]
        : styles.input;

    const login = () => {
        signin({ email: emailAddress, password: password });
    };

    const register = () => {
        signup({ email: emailAddress, password: password });
    };

    const { navigate } = useRouting();

    const passwordReset = () => {
        try {
            forgotPassword(emailAddress);
        } catch (e) {
            console.log('error sending link', e);
        }
        console.log('link sent');
        navigate({ routeName: 'password', params: { emailAddress: emailAddress } });
    };

    return (
        <View style={styles.container}>
            <View style={styles.loginForm}>
                <View style={styles.formRow}>
                    <Input
                        label="email address"
                        style={emailInputStyle}
                        onChangeText={onChangeEmailAddress}
                        value={emailAddress}
                        placeholder="user528@anon.com"
                        textContentType="emailAddress"
                        autoCompleteType="email"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.formRow}>
                    <Input
                        label="password"
                        style={passwordInputStyle}
                        onChangeText={onChangePassword}
                        value={password}
                        placeholder="**************"
                        textContentType="password"
                        secureTextEntry={true}
                        autoCompleteType="password"
                    />
                </View>

                <Text style={styles.errorMessage}>{error?.message}</Text>

                <Button
                    title="Signup"
                    buttonStyle={styles.signupButton}
                    type="outline"
                    disabled={loginButtonEnabled}
                    titleStyle={styles.signupTitleStyle}
                    accessibilityLabel="Signup"
                    onPress={register}
                />

                <Button
                    title="Log in"
                    buttonStyle={styles.loginButton}
                    disabled={loginButtonEnabled}
                    titleStyle={styles.loginButtonTitleStyle}
                    accessibilityLabel="Log in"
                    onPress={login}
                />

                <Button
                    title="Log in Anonymously"
                    buttonStyle={styles.signupButton}
                    type="outline"
                    titleStyle={styles.signupTitleStyle}
                    accessibilityLabel="Log in Anonymously"
                    onPress={loginAnon}
                />
            </View>
            <Button
                title="Forgot password"
                type="clear"
                disabled={emailAddress === ''}
                buttonStyle={styles.forgotPasswordButton}
                titleStyle={styles.signupTitleStyle}
                accessibilityLabel="Forgot password"
                onPress={passwordReset}
            />
        </View>
    );
}
