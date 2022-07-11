import { StyleSheet, View } from 'react-native';

import Arrow from './arrow';
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
    title: 'atoms/arrow',
    component: Arrow,
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
        <Arrow {...args} />
    </View>
);
