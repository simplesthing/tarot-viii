import { StyleSheet, View } from 'react-native';

import ForgotPassword from './forgot-password';
import React from 'react';
import { default as colors } from '../../theme/colors';

export default {
    title: 'account/ForgotPassword',
    component: ForgotPassword,
    argTypes: {
        buttonPress: { action: 'send password reset email' }
    },
    args: {
        error: {}
    },
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
        <ForgotPassword {...args} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        backgroundColor: colors.silver_sand.light
    }
});
