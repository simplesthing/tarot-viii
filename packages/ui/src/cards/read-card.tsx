import { StyleSheet, View } from 'react-native';

import Card from './card';
import React from 'react';
import { ReadingProp } from '@tarot-viii/ui/types';

export type ReadingCard = {
    cardName: string;
    cardNumber: string;
    cardDescription: string;
    displayName: string;
    hex: string;
    index: number;
    positionDescription: string;
    reversed: boolean;
};

export type ReadCardProps = {
    card: ReadingProp;
    itemIndex: number;
    currentIndex: number;
    onPress: (index: number) => void;
    width: number;
};

export default function ReadCard({
    card,
    itemIndex,
    currentIndex,
    onPress,
    width
}: ReadCardProps) {
    const rot = !!card.reversed ? '180deg' : '0deg';
    const itemWidth = currentIndex === itemIndex ? width / 2 : width / 3;

    const setCardIndex = () => {
        onPress(card.index);
    };
    return (
        <View style={[styles.container, { width: itemWidth }]}>
            <Card
                cardIndex={card.index}
                face={true}
                styleProps={{
                    width: itemWidth,
                    height: itemWidth * 2,
                    transform: [{ rotate: card.cardName === 'challenge' ? '0deg' : rot }]
                }}
                onPress={setCardIndex}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
});
