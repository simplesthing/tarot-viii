import React from 'react';
import { Button, Text } from 'react-native-elements';
import { Colors } from '@tarot-viii/ui';
import { StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
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
        fontWeight: '800'
    },
    userEmail: {
        fontStyle: 'italic'
    }
});

const PasswordReset = ({ navigation, route }) => {
    const address = route?.params?.emailAddress;
    return (
        <View style={styles.container}>
            <Text h4>
                A password reset link wiil be sent if account is found for
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
