import Deck, { DeckProps } from './deck';
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
    title: 'cards/deck',
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
