import React, { useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ReadingProp } from '@tarot-viii/ui/types';
import { Text } from '@rneui/themed';
import { Value } from '../../theme/fonts';

export type CardDetailProps = {
    card: ReadingProp;
    height: number;
    width: number;
};

export default function CardDetail({ card, height, width }: CardDetailProps) {
    const svRef = useRef<ScrollView>(null);

    useEffect(() => {
        svRef.current?.scrollTo({ y: 0, x: 0, animated: true });
    }, [card]);

    return (
        <ScrollView ref={svRef}>
            <View style={styles.lower}>
                <Text h2 h2Style={styles.h2Style}>
                    {card.displayName}
                </Text>

                <Text style={styles.keywords}>{card.keywords}</Text>
                <Text style={styles.base}>{card.cardReading}</Text>
                <Text style={styles.base}>{card.positionDescription}</Text>
                <Text style={styles.base}>{card.cardDescription}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    lower: {
        marginHorizontal: 16,
        marginVertical: 20,
        paddingBottom: 80
    },
    h2Style: {
        fontSize: Value(24),
        fontWeight: 'bold'
    },
    title: {
        fontSize: Value(18),
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
