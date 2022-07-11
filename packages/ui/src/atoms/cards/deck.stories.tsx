import Deck, { DeckProps } from './deck';
import { StyleSheet, View } from 'react-native';

import React from 'react';
import { default as colors } from '../../theme/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    }
});

export default {
    title: 'atoms/deck',
    component: Deck,
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

export const Default = (args: DeckProps) => (
    <View style={styles.container}>
        <Deck {...args} />
    </View>
);
