import { StyleSheet, View } from 'react-native';

import EmailPassword from './email-password';
import React from 'react';
import { default as colors } from '../theme/colors';

export default {
    title: 'account/emaillPassword',
    component: EmailPassword,
    argTypes: {
        buttonPress: { action: 'send email and password' },
        buttonLabel: { string: 'Login' }
    },
    args: {
        buttonLabel: 'Login',
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
        <EmailPassword {...args} />
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
