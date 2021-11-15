import React from 'react';
import Shuffle, { ShuffleProps } from './shuffle';
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
    title: 'cards/shuffle',
    component: Shuffle,
    argTypes: { onPress: { action: 'pressed' } },
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

export const Default = (args: ShuffleProps) => (
    <View style={styles.container}>
        <Shuffle {...args} />
    </View>
);
