import { StyleSheet, View } from 'react-native';

import React from 'react';
import { ReadingProp } from '@tarot-viii/ui/types';
import { Text } from '@rneui/themed';
import { Value } from '../../theme/fonts';

export type CardDetailProps = {
    card: ReadingProp;
    height: number;
    width: number;
};

export default function CardDetail({ card, height, width }: CardDetailProps) {
    return (
        <View style={[styles.container, { width }]}>
            <Text h1 h1Style={styles.h1Style}>
                {card.cardName}
            </Text>
            <Text style={styles.title}>
                {card?.cardTitle || 'Lord of title needs to be added'}
            </Text>

            <View style={{ width, height: height }}></View>

            <View style={styles.lower}>
                <Text h2 h2Style={styles.h2Style}>
                    {card.displayName}
                </Text>
                <Text style={styles.keywords}>
                    {card.keywords ||
                        'a, comma, separated, list, of, keywords, like, this'}
                </Text>
                <Text style={styles.base}>
                    {card.cardReading || 'Card reading should be here'}
                </Text>
                <Text style={styles.base}>
                    {card.cardDescription || 'Card description should be here'}
                </Text>
                <Text style={styles.base}>{card.positionDescription}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        paddingBottom: 100
    },
    lower: {
        marginHorizontal: 16,
        marginVertical: 21
    },
    h1Style: {
        fontSize: Value(25),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    h2Style: {
        fontSize: Value(21),
        fontWeight: 'bold'
    },
    title: {
        fontSize: Value(12.8),
        fontStyle: 'italic',
        textAlign: 'center'
    },
    base: {
        fontSize: Value(16),
        marginVertical: 8
    },
    keywords: {
        fontSize: Value(16),
        fontStyle: 'italic',
        marginVertical: 4
    },
    exalted: {
        fontSize: Value(10.24),
        textTransform: 'uppercase'
    }
});
