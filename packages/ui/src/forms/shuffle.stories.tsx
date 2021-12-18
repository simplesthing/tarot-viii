import Shuffle, { ShuffleProps } from '../cards/shuffle';
import { StyleSheet, View } from 'react-native';

import React from 'react';
import { default as colors } from '../theme/colors';
import useReading from '../hooks/use-reading';

const styles = StyleSheet.create({
    container: {}
});

export default {
    title: 'cards/shuffle',
    component: Shuffle,
    argTypes: { done: { action: 'done!' } },
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

export const Default = (args: ShuffleProps) => {
    const { cutDeck, shuffleDeck } = useReading();

    return (
        <View style={styles.container}>
            <Shuffle {...args} cutDeck={cutDeck} shuffleDeck={shuffleDeck} />
        </View>
    );
};
