import { StyleSheet, View } from 'react-native';

import AvatarButton from './avatar-button';
import React from 'react';
import { default as colors } from '../theme/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    }
});

export default {
    title: 'atoms/avatarButton',
    component: AvatarButton,
    argTypes: {
        onPress: { action: 'avatar pressed' },
        size: { number: 100 }
    },
    args: { size: 300 },
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
        <AvatarButton {...args} />
    </View>
);
