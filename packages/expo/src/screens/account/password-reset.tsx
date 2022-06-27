import { Button, Text } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';

import { Colors } from '@tarot-viii/ui';
import { ROUTES } from '../../navigation/config';
import React from 'react';
import { useRouter } from 'solito/router';

const PasswordReset = ({ navigation, route }) => {
    const address = route?.params?.emailAddress;
    const message = route?.params?.message;
    const { push } = useRouter();

    console.log(route);

    const onPress = () => {
        push({ pathname: ROUTES.screens.LOGIN.path });
    };

    const loggedIn = (
        <>
            <Text h4>{message}</Text>
            <Button
                buttonStyle={styles.goBackButton}
                onPress={() => navigation.goBack()}
                type="clear"
                titleStyle={styles.goBackTitle}
                title="Go back"
            />
        </>
    );

    const loggedOut = (
        <>
            <Text h4>
                A password reset link will be sent if an account is found for
                <Text style={styles.userEmail}> {address} </Text>
            </Text>
            <Button
                buttonStyle={styles.goBackButton}
                onPress={onPress}
                type="clear"
                titleStyle={styles.goBackTitle}
                title="Sign in"
            />
        </>
    );

    const content = message ? loggedIn : loggedOut;
    return <View style={styles.container}>{content}</View>;
};

export default PasswordReset;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        marginTop: '-50%'
    },
    goBackButton: {
        height: 40,
        backgroundColor: Colors.smoky_black.base,
        marginTop: 20
    },
    goBackTitle: {
        fontWeight: '800',
        paddingHorizontal: 40,
        color: Colors.silver_sand.light
    },
    userEmail: {
        fontStyle: 'italic'
    }
});
