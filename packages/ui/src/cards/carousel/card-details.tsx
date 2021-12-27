import { StyleSheet, View } from 'react-native';

import React from 'react';
import { ReadingProp } from '@tarot-viii/ui/types';
import { Text } from 'react-native-elements';
import { Value } from '../../theme/fonts';

export type CardDetailProps = {
    card: ReadingProp;
    height: number;
};

export default function CardDetail({ card, height }: CardDetailProps) {
    return (
        <View style={styles.container}>
            <Text h1 h1Style={styles.h1Style}>
                {card.displayName}
            </Text>

            <View style={{ height }}></View>

            <View>
                <Text h2 h2Style={styles.h2Style}>
                    {card.cardName}
                </Text>
                <Text style={styles.title}>{card.title || 'Lord of things'}</Text>

                <Text style={styles.exalted}>{card.exaltation || 'aries,sun,10'}</Text>

                <Text style={styles.keywords}>
                    {card.keywords || 'keywords, like, this'}
                </Text>

                <Text style={styles.base}>
                    {card.cardDescription || 'Card description should be here'}
                </Text>
                <Text style={styles.base}>
                    {card.cardReading || 'Card reading should be here'}
                </Text>
                <Text h2 h2Style={styles.h2Style}>
                    Position
                </Text>
                <Text style={styles.base}>{card.positionDescription}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 16
    },
    h1Style: {
        fontSize: Value(25),
        fontWeight: 'bold'
    },
    h2Style: {
        fontSize: Value(21),
        fontWeight: 'bold',
        marginVertical: 8
    },
    title: {
        fontSize: Value(16)
    },
    base: {
        fontSize: Value(16),
        marginVertical: 8
    },
    keywords: {
        fontSize: Value(12.8),
        fontStyle: 'italic',
        marginVertical: 4
    },
    exalted: {
        fontSize: Value(10.24),
        textTransform: 'uppercase'
    }
});
