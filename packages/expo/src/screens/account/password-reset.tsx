import { Button, Text } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';

import { Colors } from '@tarot-viii/ui';
import React from 'react';

const PasswordReset = ({ navigation, route }) => {
    const address = route?.params?.emailAddress;
    return (
        <View style={styles.container}>
            <Text h4>
                A password reset link will be sent if an account is found for
                <Text style={styles.userEmail}> {address} </Text>
            </Text>
            <Button
                buttonStyle={styles.goBackButton}
                onPress={() => navigation.goBack()}
                type="clear"
                titleStyle={styles.goBackTitle}
                title="Go back"
            />
        </View>
    );
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
