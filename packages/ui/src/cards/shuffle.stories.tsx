import React from 'react';
import Shuffle, { ShuffleProps } from './shuffle';
import useReading from '../hooks/use-reading';
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
            <Shuffle {...args} cutDeck={cutDeck} shuffleDeck={shuffleDeck} web={true} />
        </View>
    );
};
