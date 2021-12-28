import { Button, Text } from 'react-native-elements';
import { Colors, Value } from '@tarot-viii/ui';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Avatar } from 'react-native-elements';

type AccountProps = {
    username: string;
    logout: () => void;
    resetPassword: (email: string) => void;
};

const { height } = Dimensions.get('window');

const Account = ({ username, logout, resetPassword }: AccountProps) => {
    const [isAnon, setAnon] = useState(false);

    useEffect(() => {
        if (username) {
            if (username.split('@')[1] === 'anon.com') {
                setAnon(true);
            }
        }
    }, [username]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.avatar}>
                    <Avatar
                        size={254}
                        rounded
                        source={{ uri: 'https://loremflickr.com/320/240/tarot' }}
                    />
                </View>
                <Text style={styles.username}>{username}</Text>
                {isAnon && (
                    <>
                        <Text style={styles.passwordInfo}>
                            Your anonymous login comes with the randomly generated email
                            address above and the password:
                            <Text style={styles.password}>&nbsp;anonymous</Text>
                        </Text>
                    </>
                )}
                {!isAnon && (
                    <Button
                        title="Reset password"
                        buttonStyle={styles.passwordButton}
                        titleStyle={styles.passwordInfo}
                        onPress={() => resetPassword}
                    />
                )}
                <View style={styles.logoutButton}>
                    <Button
                        title="Logout"
                        titleStyle={styles.logoutTitle}
                        onPress={logout}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        alignItems: 'center',
        marginHorizontal: 40
    },
    avatar: {
        marginTop: 100
    },
    username: {
        fontSize: Value(21),
        marginVertical: 20
    },
    passwordInfo: {
        fontSize: Value(12.8),
        lineHeight: Value(20),
        fontStyle: 'italic',
        fontWeight: 'normal',
        color: Colors.smoky_black.base
    },
    password: {
        fontSize: Value(16)
    },
    passwordButton: {
        backgroundColor: 'white'
    },
    logoutButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginVertical: 80
    },
    logoutTitle: {
        paddingHorizontal: 40
    }
});
