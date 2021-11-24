import LogOutButton from './logout-button';
import React from 'react';
import { default as colors } from '../theme/colors';
import { StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    }
});

export default {
    title: 'login/logoutButton',
    component: LogOutButton,
    argTypes: { onPress: { action: 'logout' } },
    parameters: {
        backgrounds: {
            default: 'default',
            values: [
                {
                    name: 'default',
                    value: colors.silver_sand.shadow
                }
            ]
        }
    }
};

export const Default = args => (
    <View style={styles.container}>
        <LogOutButton {...args} />
    </View>
);
