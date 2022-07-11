import ShuffleCard, { ShuffleCardProps } from './shuffle-card';
import { StyleSheet, View } from 'react-native';

import React from 'react';
import { default as colors } from '../../theme/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default {
    title: 'atoms/shuffleCard',
    component: ShuffleCard,
    argTypes: { onPress: { action: 'pressed' } },
    args: {
        cardIndex: 21,
        isShuffling: false,
        cutCards: () => ({}),
        cutCardIndex: 10,
        onPress: () => ({})
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

export const Default = (args: ShuffleCardProps) => (
    <View style={styles.container}>
        <ShuffleCard {...args} />
    </View>
);
